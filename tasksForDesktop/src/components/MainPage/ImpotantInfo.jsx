import styles from './MainPage.module.css'
import { useSelector } from 'react-redux'
export const ImpotantInfo = () =>{
    const {displayName} = useSelector(state=>state.auth.user)
    return(
        <div className={styles.impotantInfo}>

            <div className={styles.userName}>{displayName}</div>

            <div className={styles.gradName}>9В класс</div>

            <div className={styles.schoolRaiting}>
                <span>
                    ученик
                </span>
            </div>
        </div>
    )
}