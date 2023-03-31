import { createContext, ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toastError, toastErrorLogin, toastSucess } from "../Toast";
import { toastSucessLogin } from './../Toast/index';


export interface iRegister {
    name: string,
    email: string
    password: string,
    phone: string,
}

export interface iLogin {
    email: string,
    password: string
}

export interface iUser {
    id: string,
    name: string,
    email: string,
    phone: string,
    contact: [],
    registeredAt: string,
}

export interface iRenderize {
    id: string
    name: string
    phone: string
    email: string
}



interface iUserContext {
    handleCadastro: (data: iRegister) => void;
    renderizar: (data: iRenderize) => void;
    handleLogin(data: iLogin): Promise<void>;
    loadUser: () => void;
    openModal(): void;
    user: iUser
    closeModal(): void;
    IsOpenModal: boolean;
}

interface iUserProvider {
    children: ReactNode
}


export const UserContext = createContext<iUserContext>({} as iUserContext)

const UserProvider = ({ children }: iUserProvider) => {
    const [IsOpenModal, setIsOpenModal] = useState(false)
    const navegate = useNavigate()
    const { reset } = useForm()
    const [user, setUser] = useState<iUser>({} as iUser);

    function openModal() {
        setIsOpenModal(true)
    }

    function closeModal() {
        setIsOpenModal(false)
    }
    function renderizar(data: iRenderize) {
        api.post('/users', data)
            .then(res => res)
            .catch(error => error)
        closeModal()
    }


    function handleCadastro(data: iRegister) {
        console.log(data)
        api.post('/users', data)
            .then(res => {
                toastSucess()
                navegate('/login')
                return res
            })
            .catch(error => {
                console.log(error)
                toastError()
            }
            )
        reset({
            name: '',
            email: '',
            password: '',
            phone: '',
        })
    }

    async function handleLogin(data: iLogin) {
        await api.post('/login', data)
            .then(res => {
                toastSucessLogin()
                setUser(res.data.user)
                localStorage.setItem('token', res.data.token)
                navegate('/Dashboard')
            })
            .catch(error => {
                console.log(error)
                toastErrorLogin()
            })
    }

    const loadUser = () => {
        api.get('/users')
            .then(res => {
                setUser(res.data[0])
            })
            .catch(err => err)
    }
    // useEffect(() => loadUser(), [user])

    return (
        <UserContext.Provider value={{ handleCadastro, user, handleLogin, loadUser, renderizar, openModal, closeModal, IsOpenModal }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider


