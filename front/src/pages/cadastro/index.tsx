
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { iRegister, UserContext } from '../../Context';
import { StyledCadastro, TopCadastro } from './style';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string()
        .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
        .matches(/(\d)/, 'Deve conter ao menos um número')
        .matches(/(\W)|_/, 'Deve conter um caracter especial')
        .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
        .min(8, 'minimo 8 caracteres')
        .required('Senha é obrigatória'),
    phone: yup.string().required(),

})

const Cadastro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iRegister>({
        resolver: yupResolver(schema)
    })

    const { handleCadastro } = useContext(UserContext)

    return (
        <>
            <TopCadastro>
                <h2>ContactBook</h2>
                <Link to={'/login'}>Ir Para Login</Link>
            </TopCadastro>
            <StyledCadastro>
                <h2>Crie aqui sua conta</h2>
                <small> Rapido e gratis, vamos nessa</small>
                <form onSubmit={handleSubmit(handleCadastro)}>
                    <label htmlFor=""> Nome</label>
                    <input placeholder="Nome" {...register('name')}></input>
                    <p>{errors.name?.message}</p>
                    <label htmlFor="">Email </label>
                    <input placeholder="Email" {...register('email')} ></input>
                    <p>{errors.email?.message}</p>
                    <label htmlFor="">Senha</label>
                    <input
                        placeholder="Sua senha"
                        type="password"
                        {...register('password')}
                    />
                    <p>{errors.password?.message}</p>

                    <label htmlFor=""> Telefone </label>
                    <input placeholder="Seu linkedin" {...register('phone')} />
                    <p>{errors.phone?.message}</p>

                    <button type="submit">Cadastrar</button>
                </form>
            </StyledCadastro >
        </>)
}

export default Cadastro