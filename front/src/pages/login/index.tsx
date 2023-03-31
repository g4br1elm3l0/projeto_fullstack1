import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { UserContext, iLogin } from '../../Context';
import { StyledConteiner, StyledDiv, StyledForm } from './style';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6, 'minimo 6 caracteres').required(),

})

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<iLogin>({
        resolver: yupResolver(schema)
    })
    const navegate = useNavigate()
    const { handleLogin } = useContext(UserContext)
    const token = localStorage.getItem('token')

    return (
        <>
            {token && (navegate('/dashboard'))}
            {!token && (<StyledConteiner>
                <h2>ContactBook</h2>
                <StyledDiv>
                    <h2>Login</h2>
                    <StyledForm onSubmit={handleSubmit(handleLogin)}>
                        <label htmlFor=""> Email</label>
                        <input type="text" placeholder='Email' {...register('email')} />
                        <p>{errors.email?.message}</p>
                        <label htmlFor=""> Senha</label>
                        <input type="password" placeholder='Password' {...register('password')} />
                        <p>{errors.password?.message}</p>
                        <button type='submit'>Entrar</button>
                        <small>Ainda não possui cadastro?</small>
                        <Link to={'/cadastro'} >Cadastrar</Link>
                    </StyledForm>
                </StyledDiv>
            </StyledConteiner>)}
        </>
    )
}

export default Login