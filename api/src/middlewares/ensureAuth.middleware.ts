import 'dotenv/config';
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: 'Invalid Token!'
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {



        if (error) {
            return res.status(401).json({
                message: 'Invalid Token!'
            })
        }
        const id = decoded.sub

        req.userId = id

        return next()
    })
}

export default ensureAuthMiddleware