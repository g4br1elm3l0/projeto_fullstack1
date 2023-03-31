import { NextFunction, Request, Response } from "express";
import { AppError } from "../Errors/AppError";
import AppDataSource from "../data-source";
import { User } from './../entities/user.entity';

const authUserExists = async (req: Request, res: Response, next: NextFunction) => {
    const loginRepository = AppDataSource.getRepository(User)
    const user = await loginRepository.findOneBy({
        email: req.body.email
    })

    if (user) {
        throw new AppError("User already exists", 409)
    }
    return next()
}
export default authUserExists