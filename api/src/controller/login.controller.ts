import { Request, Response } from "express";
import { IUserLogin } from './../interfaces/users/index';
import loginService from './../services/login.service';

const loginController = async (req: Request, res: Response) => {


    const loginData: IUserLogin = req.body
    const token = await loginService(loginData)
    return res.json({ token: token })


}

export { loginController };

