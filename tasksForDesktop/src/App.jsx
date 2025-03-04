import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {
  const {user} = useSelector(state=>state.auth)
  return (
    <Routes>
      <Route path='/' element={user?<MainLayer/>:<Navigate to={'/login'}/>}>
        <Route path="/home" index element={user?<Home />:<Navigate to={'/login'}/>}/>
        <Route path='/shop' element={user?<Shop/>:<Login/>}/>
        <Route path='/tasks' element={user?<Tasks/>:<Login/>}/>
        <Route path='/calendar' element={user?<Shop/>:<Login/>}/>
        <Route path='/orders' element={user?<MyPurchaseHistory/>:<Login/>}/>
        <Route path='/*' element={<div>Страница не найдена</div>}/>  
      </Route>
      <Route path='/login' element={!user?<Login/>:<div>Уже авторизован</div>}/>

    </Routes>

  );
};

export default App
