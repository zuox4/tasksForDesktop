import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

import { Header } from "./Header/Header"
import { NavBar } from "./NavBar"




export const MainLayer =()=>{
    const {user} = useSelector(state=>state.auth)

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