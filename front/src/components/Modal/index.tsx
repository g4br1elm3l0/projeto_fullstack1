import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { iRenderize, UserContext } from "../../Context";
import { StyledModal } from './style';

const Modal = () => {

    const schema = yup.object({
        title: yup.string().required(),
        status: yup.string().required(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<iRenderize>({
        resolver: yupResolver(schema)
    })


    const { closeModal, renderizar } = useContext(UserContext)

    return (
        <StyledModal>
            <div className="topModal">
                <h3>Cadastrar Contato</h3>
                <small onClick={closeModal}>x</small>
            </div>
            <form onSubmit={handleSubmit(renderizar)}>
                <label>nome <input {...register('name')} placeholder="Digite o nome do seu contato" /></label>
                <p>{errors.name?.message}</p>

                <label>email <input {...register('email')} placeholder="Digite o email do seu contato" /></label>
                <p>{errors.email?.message}</p>

                <label>telefone <input {...register('phone')} placeholder="Digite o fone do seu contato" /></label>
                <p>{errors.phone?.message}</p>

                <button type="submit">Cadastrar Contato</button>
            </form>
        </StyledModal>
    )



}

export default Modal