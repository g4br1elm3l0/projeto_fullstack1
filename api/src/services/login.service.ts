import { compare } from 'bcryptjs';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';
import { AppError } from '../Errors/AppError';
import { IUserLogin } from './../interfaces/users/index';

const loginService = async ({ password, email }: IUserLogin): Promise<string> => {


    const loginRepository = AppDataSource.getRepository(User)
    const user = await loginRepository.findOneBy({
        email: email
    })

    if (!user) {
        throw new AppError("user or password not valid!", 403)
    }

    const passwordMath = await compare(password, user.password)

    if (!passwordMath) {
        throw new AppError("user or password not valid!", 403)
    }
    const token = jwt.sign({
        isAdm: user.isActive as unknown as string
    }, process.env.SECRET_KEY,
        {
            subject: String(user.id),
            expiresIn: '24h'
        }
    )
    return token
}
export default loginService