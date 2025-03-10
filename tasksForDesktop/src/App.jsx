import './App.css'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { Route, Routes } from "react-router-dom"

import { Home } from './pages/Home'
import { Shop } from './pages/Shop'

import { MainLayer } from './components/MainLayer'
import { Tasks } from './pages/Tasks'
import { MyPurchaseHistory } from './pages/MyPurchaseHistory'
import { AdminPanel } from './pages/AdminPanel'
import { ModaConteiner } from './components/ModalConteiner'

function App() {
  const {user} = useSelector(state=>state.auth)
  return (
    <>
    <ModaConteiner/>
    <Routes>
      <Route path='/' element={<MainLayer/>}>
        <Route path='home' index element={<Home />}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='tasks' element={<Tasks/>}/>
        <Route path='calendar' element={user?<Shop/>:<Login/>}/>
        <Route path='orders' element={user?<MyPurchaseHistory/>:<Navigate to='../../login'/>}/>
        <Route path='/' element={<Navigate to='home'/>}/>  
        <Route path='*' element={<div>Страница не найдена</div>}/>  
      </Route>
      <Route path='/login' element={!user?<Login/>:<div>Уже авторизован</div>}/>
      <Route path='/admin' element={<AdminPanel/>}>
        <Route path='shop' index element={<div>Магазин</div>}/>
      </Route>
      <Route path='/worker' element={<div>Работник</div>}>
        <Route path='shop' index element={<div>роририои</div>}/>
      </Route>
    </Routes>
    </>


  );
};

export default App
