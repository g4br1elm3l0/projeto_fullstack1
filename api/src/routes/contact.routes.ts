import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { createContactController, deleteContactController, listContactController } from './../controller/contact.controller';


const contactRoutes = Router()

contactRoutes.post('', ensureAuthMiddleware, createContactController)
contactRoutes.get('', ensureAuthMiddleware, listContactController)
contactRoutes.patch('/:id', ensureAuthMiddleware, listContactController)
contactRoutes.delete('/:id', ensureAuthMiddleware, deleteContactController)



export default contactRoutes
