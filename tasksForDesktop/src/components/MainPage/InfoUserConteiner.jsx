import styles from './MainPage.module.css'
export const InfoUserConteiner = ({children}) =>{
    return(
        <div className={styles.infouserconteiner}>
            {children}
            <div style={{width:'100%', height:'1px', background:'gray', marginTop:'20px'}}> </div>
        </div>
    )
}