import styles from './MainPage.module.css'
import { useSelector } from 'react-redux'
export const PhotoUser = () =>{
    const {photoURL} = useSelector(state=>state.auth.user)
    return(
        <div className={styles.photoconteiner}>
            <img src={photoURL} alt=''/>
        </div>
    )
}