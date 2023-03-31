import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { dataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import authUserIsActive from "../middlewares/ensureIsActive.middleware";
import isValidId from "../middlewares/ensureIsValidUuid.middleware";
import notAdicionalInfo from "../middlewares/ensureNotAdicionalInfo.middleware";
import authUserExists from "../middlewares/ensureUserExists.middleware";
import { userSerializer, userUpdadeSerializer } from "../serializers/users.serializer";
import { createUserController, deleteUserController, listEspecificUserController, listUserController, pathUserController } from './../controller/users.controller';


const router = Router()

router.post('', dataIsValid(userSerializer), authUserExists, createUserController)
router.get('', listUserController)
router.get('/:id', ensureAuthMiddleware, listEspecificUserController)
router.patch('/:id', ensureAuthMiddleware, notAdicionalInfo, dataIsValid(userUpdadeSerializer), isValidId, pathUserController)
router.delete('/:id', ensureAuthMiddleware, authUserIsActive, deleteUserController)

export default router;