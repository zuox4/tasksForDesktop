import styles from './MainPage.module.css'

export const CardWithInfo = ({icon, info}) =>{
    return(
        <div className={styles.CardWithInfo}>
            <img src={icon} alt=''/>
            <span>{info}</span>
        </div>
    )
}