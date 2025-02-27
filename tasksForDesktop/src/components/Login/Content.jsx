import styles from './Content.module.css'
import mainPage from './MainPage.svg'
export const LeftContent = () =>{
    return(
        <div className={styles.leftContent}>
            <img className={styles.mainImage} src={mainPage} alt=''/>
        </div>
    )
}