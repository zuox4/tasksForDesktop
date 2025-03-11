import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setCurrentRole } from "../../features/auth/authSlice"
import { Outlet } from "react-router"
export const WorkerPanel = () =>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurrentRole('worker'))
    } ,[dispatch])
    return(
        
        <Outlet/>
    )
}