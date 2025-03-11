import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setCurrentRole } from "../../features/auth/authSlice"
import { Outlet } from "react-router"
export const AdminPanel = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurrentRole('admin'))
    } ,[dispatch])
    return(
        <Outlet/>
    )
}