import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Home } from '../pages/Home'
import { Shop } from '../pages/Shop'
import { useSelector } from 'react-redux'
import { Link, Navigate, Outlet } from 'react-router'
import Login from '../pages/Login'
import { Header } from "./Header"
import { NavBar } from "./NavBar"
import { ModalWindow } from "./ModalWindow"



export const MainLayer =()=>{
    const {user} = useSelector(state=>state.auth)

    return(
        <div className="main-content">
            
            <Header/>
            <div  style={{display:'flex', flexDirection:'row', marginTop:'20px', justifyContent:'space-between'}}>
            <NavBar/>

            <div className={'page-content'} style={{width: '75%'}}>
            
                <Outlet/>
            </div>
           
            </div>
            

      </div>
    )
}