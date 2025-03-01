import { useDispatch } from 'react-redux'
import logoutIcon from '../../assets/logoutIcon.svg'
import { logout } from '../../features/auth/authSlice'
export const Logout = () =>{
    const dispatch = useDispatch()
    return(
        <div style={{display:'flex', flexDirection:'row', gap:'10px', cursor:'pointer'}} onClick={()=>dispatch(logout())}>
          <img style={{width:'16px'}}src={logoutIcon} alt=''/>
          <span>Выйти</span>
        </div>
    )
}