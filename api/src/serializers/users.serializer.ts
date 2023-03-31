import * as yup from "yup";

const userSerializer = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required(),
})
const userUpdadeSerializer = yup.object().shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    password: yup.string().notRequired(),

})

const userWithoutPasswordSerializer = yup.object().shape({
    email: yup.string().notRequired(),
    name: yup.string().notRequired(),
    id: yup.string().notRequired(),
    registeredAt: yup.date().notRequired(),

})

export { userUpdadeSerializer, userSerializer, userWithoutPasswordSerializer };

