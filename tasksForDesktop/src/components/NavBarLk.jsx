import styles from './NavBarLk.module.css'
import myOrdersIcon from '../assets/orders4.svg'
import myTaskIcon from '../assets/myTasks.svg'
import { Link } from 'react-router'
export const NavBarLk = () =>{
    return(
        <div className={styles.navconteiner}>
            <Link to={'/orders'} className={styles.itemConteiner}>
                <img className={styles.image} src={myOrdersIcon} alt=''/>  
                <span>Покупки</span> 
            </Link>

            <Link to={'/my-tasks'} className={styles.itemConteiner}>
                <img className={styles.image} src={myTaskIcon} alt=''/>  
                <span>Мои задачи</span>
            </Link>
            
        </div>
    )
}