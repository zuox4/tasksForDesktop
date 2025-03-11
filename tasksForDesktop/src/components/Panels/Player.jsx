import { Outlet, useNavigate } from "react-router"
import { NavBar } from "../NavBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setCurrentRole } from "../../features/auth/authSlice"

export const  PlayerPanel = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurrentRole('player'))
    },[])
    return(
        <div style={{display:'flex', flexDirection:'row'}}>
            <NavBar/>
            <div style={{marginLeft:'20px', width:'100%'}}>
                <Outlet></Outlet>
            </div>

        </div>
    )
}