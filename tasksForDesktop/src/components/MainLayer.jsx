import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

import { Header } from "./Header/Header"
import { NavBar } from "./NavBar"
import { ModaConteiner } from './ModalConteiner'





export const MainLayer =()=>{
    return(
        <div className="main-content">
            
            <Header/>
            <div  style={{display:'flex', flexDirection:'row', marginTop:'20px', justifyContent:'space-between', gap:'30px'}}>
                <NavBar/>
                <div className={'page-content'} style={{width: '75%'}}>
                    <Outlet/>
                </div>
            </div>
      </div>
    )
}