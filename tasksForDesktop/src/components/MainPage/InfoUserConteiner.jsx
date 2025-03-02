import styles from './MainPage.module.css'
export const InfoUserConteiner = ({children}) =>{
    return(
        <div className={styles.infouserconteiner}>
            {children}
        </div>
    )
}