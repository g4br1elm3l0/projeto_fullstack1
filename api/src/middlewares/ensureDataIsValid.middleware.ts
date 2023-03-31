import { NextFunction, Request, Response } from 'express';

export const dataIsValid = (schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedData = await schema.validate(req.body, {
            abortEarly: false,
            stripUnknown: true
        })
        req.body = validatedData
        return next()
    } catch (error: any) {
        return res.status(400).json({
            error: error.errors
        })
    }
}