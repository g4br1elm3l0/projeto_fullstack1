import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserRequest, IUserResponse, IUserUpdate } from "../interfaces/users";
import { userWithoutPasswordSerializer } from "../serializers/users.serializer";


export const createUserService = async (userData: IUserRequest): Promise<User> => {
    const userRepo = AppDataSource.getRepository(User);
    const user = userRepo.create(userData);
    await userRepo.save(user);
    return user;
};

export const listUserService = async (): Promise<User[]> => {
    const userRepo = AppDataSource.getRepository(User);
    const users = await userRepo.find()
    return users
}

export const listEspecificUserService = async (userId: any): Promise<User> => {
    const userRepo = AppDataSource.getRepository(User);
    const findUser = await userRepo.findOneBy({
        id: userId
    })
    return findUser
}

export const pathUserService = async (userData: IUserUpdate, userId: any): Promise<IUserResponse> => {
    const userRepo = AppDataSource.getRepository(User);
    const findUser = await userRepo.findOneBy({
        id: userId
    })

    const updatedUser = {
        ...findUser,
        ...userData
    }

    await userRepo.save(updatedUser)
    const updatedUserWithoutPassword = await userWithoutPasswordSerializer.validate(updatedUser, {
        stripUnknown: true
    })

    return updatedUserWithoutPassword
}