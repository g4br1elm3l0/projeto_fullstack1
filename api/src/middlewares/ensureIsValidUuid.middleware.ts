import { NextFunction, Request, Response } from 'express';
import { AppError } from '../Errors/AppError';
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';

const isValidId = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    if (!id.match(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi)) {
        throw new AppError('uuid invalid!', 404)
    }

    const userRepo = AppDataSource.getRepository(User);
    const findUser = await userRepo.findOneBy({
        id: id
    })

    if (!findUser) {
        return res.status(400).json({
            message: "invalid id"
        })
    }

    return next()
}
export default isValidId