import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";
import { createUserService, listEspecificUserService, listUserService, pathUserService } from './../services/user.service';


export const createUserController = async (req: Request, res: Response) => {
    const userData = req.body
    console.log(req.body)
    const newUser = await createUserService(userData)
    // const { password, ...myUser } = newUser
    return res.status(201).json(instanceToPlain(newUser));
};


export const listUserController = async (req: Request, res: Response) => {
    const users = await listUserService()
    return res.status(200).json(instanceToPlain(users))
}


export const listEspecificUserController = async (req: Request, res: Response) => {
    const userId = req.params.id
    const users = await listEspecificUserService(userId)
    return res.status(200).json(instanceToPlain(users))
}

export const pathUserController = async (req: Request, res: Response) => {
    const userId: any = req.params.id
    const userData: IUserUpdate = req.body
    const updatedUser = await pathUserService(userData, userId)
    return res.json(updatedUser)
}


export const deleteUserController = async (req: Request, res: Response) => {
    const userId = req.params.id
    const userRepo = AppDataSource.getRepository(User)
    const foundUser = await userRepo.findOneBy({ id: userId })
    // await userRepo.softRemove(foundUser);
    const user = await userRepo.save({ ...foundUser, isActive: false })
    return res.status(204).json(user)
}