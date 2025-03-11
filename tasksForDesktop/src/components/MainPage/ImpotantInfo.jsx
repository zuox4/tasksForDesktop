import styles from './MainPage.module.css'
import { useSelector } from 'react-redux'
export const ImpotantInfo = () =>{
    const {fullName, roles} = useSelector(state=>state.auth.user)
    return(
        <div className={styles.impotantInfo}>
            <div className={styles.userName}>{fullName}</div>
            <div className={styles.gradName}>{!(roles.length>1)?'9В класс':'Учитель'}</div>
            <div className={styles.schoolRaiting}>
                <span>
                    {roles.length>1?'Сотрудник':'Ученик'}
                </span>
            </div>
        </div>
    )
}