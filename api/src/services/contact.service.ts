import AppDataSource from "../data-source";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";
import { IContactRequest, IContactResponse, IContactUpdate } from './../interfaces/contacts/index';


export const createContactService = async (userData: IContactRequest, id: string): Promise<Contact> => {
    const contactRepo = AppDataSource.getRepository(Contact);
    const userRepo = AppDataSource.getRepository(User)

    const user = await userRepo.findOneBy({ id: id });

    const contact = contactRepo.create({
        email: userData.email,
        name: userData.name,
        phone: userData.phone,
        user: user
    });

    await contactRepo.save(contact);
    return contact;
};

export const listContactService = async (): Promise<Contact[]> => {
    const contactRepo = AppDataSource.getRepository(Contact);
    const contact = await contactRepo.find()
    return contact
}

export const pathContactService = async (contactData: IContactUpdate, contactId: any): Promise<IContactResponse> => {

    const contactRepo = AppDataSource.getRepository(Contact);
    const findcontact = await contactRepo.findOneBy({
        id: contactId
    })

    const updatedContact = {
        ...findcontact,
        ...contactData
    }

    await contactRepo.save(updatedContact)
    // const updatedContactValidator = await contactUpdadeSerializer.validate(updatedContact, {
    //     stripUnknown: true
    // })

    return updatedContact
}