import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContactUpdate } from "../interfaces/contacts";
import AppDataSource from './../data-source';
import { Contact } from './../entities/contact.entity';
import { createContactService, listContactService, pathContactService } from './../services/contact.service';



export const createContactController = async (req: Request, res: Response) => {
    const contactData = req.body
    const userId: string = req.userId
    const newContact = await createContactService(contactData, userId)
    return res.status(201).json(instanceToPlain(newContact));
};


export const listContactController = async (req: Request, res: Response) => {
    const users = await listContactService()
    return res.status(200).json(instanceToPlain(users))
}


export const pathContactController = async (req: Request, res: Response) => {
    const contactId: any = req.params.id
    const contactData: IContactUpdate = req.body
    const updatedContact = await pathContactService(contactData, contactId)
    return res.json(updatedContact)
}


export const deleteContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const contactRepo = AppDataSource.getRepository(Contact)
    const foundContact = await contactRepo.findOneBy({ id: contactId })
    // await userRepo.softRemove(foundContact);
    const contact = await contactRepo.save({ ...foundContact, isActive: false })
    return res.status(204).json(contact)
}