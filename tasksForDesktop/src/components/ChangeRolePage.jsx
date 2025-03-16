import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import styles from '../pages/Pages.module.css'
import teacherIcon from '../assets/teacher.svg'
import adminIcon from '../assets/settings.svg'
import playerIcon from '../assets/worker.svg'
import { setCurrentRole } from "../features/auth/authSlice"
import { closeModal } from "../features/modal/modalSlice"

const roleDict = { 'worker':{name:'Заказчик', icon: teacherIcon}, 
                    'player':{name:'Исполнитель', icon: playerIcon}, 
                    'admin':{name:'Администратор', icon: adminIcon}
                }

// eslint-disable-next-line react/prop-types
const Role = ({ name })=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currentRole } = useSelector(state=>state.auth)
    function changeRole(){
        dispatch(setCurrentRole(name))
        navigate(name+'/home')
        dispatch(closeModal())
    }
    
    return(
        <button className={styles.Role} onClick={changeRole} disabled={(name===currentRole)&&true}>
            <img src={roleDict[name].icon} alt=""/>
            <span>{roleDict[name].name}</span>
        </button>
    )
}
export const ChangeRolePage = () =>{
    const {roles} = useSelector(state=>state.auth.user)
    return(

        <div className={styles.ChangeRolePage}>
            <div className={styles.roles}>
            {roles.map((role)=><Role key={role} name={role}/>)}
            </div>
        </div>

    )

        
    
}