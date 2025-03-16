import { Outlet, useNavigate } from "react-router"
import { NavBar } from "../NavBar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setCurrentRole } from "../../features/auth/authSlice"
import api from "../../api/api"
import { setBalance } from "../../features/balance/balanceSlice"
export const  PlayerPanel = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCurrentRole('player'))
    },[])

    useEffect(()=>{
        api.get('/player/balance').then(res=>{
            dispatch(setBalance(res.data.balance.balance))
            console.log(res.data.balance.balance)
        }).catch(err=>console.log(err))
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