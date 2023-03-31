
import { useContext, useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext, iRenderize, iUser } from '../../Context';
import api from '../../Services/api';
import Modal from '../../components/Modal';
import { DashConteiner, Ul } from './style';


const Dashboard = () => {

    const [userTest, setUserTest] = useState<iUser>()
    const navegate = useNavigate()
    const token = localStorage.getItem("token")
    const { user, loadUser } = useContext(UserContext)



    function voltar() {
        localStorage.clear()
        navegate('/')
    }

    useEffect(() => {
        loadUser()
    }, [])


    function deleteContact(id: string | undefined) {
        api.delete(`contacts/${id}`)
            .catch(err => err)
    }

    const { IsOpenModal, openModal } = useContext(UserContext)

    return (
        <>
            {token ? (<>
                <DashConteiner>
                    <header>
                        <div>
                            <button onClick={() => voltar()}>Sair</button>
                        </div>
                    </header>
                    <div>
                        <div className='helo'>
                            <h1>Olá,{" " + user.name}</h1>
                            <p> {user.phone} </p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className='ulConteiner'>
                        <div className='techTop'>
                            <h2>contact</h2>
                            <button className="botao-x " onClick={openModal}>+</button>
                        </div>
                        <Ul>
                            {user.contact.map((elem: iRenderize) => <li key={elem.id}>
                                <h2>{elem.name}</h2>
                                <div>
                                    <p>{elem.phone}</p>
                                    <p>{elem.email}</p>
                                    <BsFillTrashFill onClick={() => deleteContact(elem.id)} />
                                </div>
                            </li>)}
                        </Ul>
                    </div>
                </DashConteiner>

                {IsOpenModal && <Modal />}
            </>
            )
                :

                <Navigate to={'/users'} />
            }
        </>
    )
}

export default Dashboard