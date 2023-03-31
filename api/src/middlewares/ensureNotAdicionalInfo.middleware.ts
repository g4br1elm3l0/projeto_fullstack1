import { NextFunction, Request, Response } from 'express';
import { AppError } from '../Errors/AppError';

const notAdicionalInfo = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body


    if (data.hasOwnProperty("isActive")) {
        throw new AppError('não podem conter campos diferentes de email, password e name', 401)
    }
    if (data.hasOwnProperty("id")) {
        throw new AppError('não podem conter campos diferentes de email, password e name', 401)
    }

    next()
}

export default notAdicionalInfo