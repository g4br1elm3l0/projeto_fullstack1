import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import './Global/globalStyle.css';
import Cadastro from './pages/cadastro';
import Dashboard from './pages/dashboard/index';
import Login from './pages/login/index';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cadastro' element={<Cadastro />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='*' element={<Cadastro />}></Route>
      </Routes>
      <ToastContainer />

    </>
  );
}

export default App;
