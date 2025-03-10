import { useDispatch } from 'react-redux'
import logoutIcon from '../../assets/logoutIcon.svg'
import { logout } from '../../features/auth/authSlice'
import { useSelector } from 'react-redux'
import { openModal } from '../../features/modal/modalSlice'


export const Logout = () =>{
  const { user } = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  

  function logOut(){
    dispatch(logout())
  }

  function OpenloginModal(){

    dispatch(openModal({
          componentName: 'LoginForm',
          props: {}
        }))
  }
    return(
      <>
        <div style={{display:'flex', flexDirection:'row', gap:'10px', cursor:'pointer'}} onClick={user?logOut:()=>dispatch(openModal({ componentName: 'LoginForm' }))}>
          <img style={{width:'16px'}}src={logoutIcon} alt=''/>
          <span>{user?'Выйти':'Войти'}</span>
        </div>
      </>
        
    )
}