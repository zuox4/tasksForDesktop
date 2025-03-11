import { useDispatch, useSelector } from "react-redux";
import styles from './HeaderStyle.module.css'
import { openModal } from "../../features/modal/modalSlice";

export const ChangeRoleSelect = () =>{
    const {roles} = useSelector(state=>state.auth.user)
    const dispatch = useDispatch()
    const chekRoles = (roles.length>1)
    function openModalRole(){
        dispatch(openModal({
                  componentName: 'ChangeRolePage',
                  props: {}
                }))
    }
    return(
        chekRoles&&<div className={styles.changeRoleButton} onClick={openModalRole}>Сменить роль</div>
    )
}