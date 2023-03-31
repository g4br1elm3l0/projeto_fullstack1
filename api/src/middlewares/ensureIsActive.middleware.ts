import { NextFunction, Request, Response } from "express";
import { AppError } from "../Errors/AppError";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";


const authUserIsActive = async (req: Request, res: Response, next: NextFunction) => {
    const loginRepository = AppDataSource.getRepository(User)
    const user = await loginRepository.findOneBy({
        id: req.params.id
    })

    if (user?.isActive == false) {
        throw new AppError("User already deleted", 400)
    }
    return next()
}
export default authUserIsActive