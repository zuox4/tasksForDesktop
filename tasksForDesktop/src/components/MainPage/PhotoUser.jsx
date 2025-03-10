import styles from './MainPage.module.css'
import { useSelector } from 'react-redux'
export const PhotoUser = () =>{
    const {photoURL} = useSelector(state=>state.auth.user)
    return(
        <div className={styles.photoconteiner}>
            <img src={photoURL||'https://assets-1.napopravku.ru/dist/c050a967cdb87bf470a751d003ac7679.svg'} alt=''/>
        </div>
    )
}