import styles from './TaskItem.module.css'
import sferumIcon from '../../assets/sferum.svg'
import doWorkIcon from './icons/start.svg'
import infoIcon from './icons/infoButton.svg'
export const DoButtonsConteiner = () =>{
    return(
        <div className={styles.DoButtonsConteiner}>

            <div className={styles.imageButton} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={sferumIcon} alt=''/>
                <span className={styles.span}>Связаться</span>
            </div>

            <div className={styles.imageButton} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <img src={doWorkIcon} alt=''/>
                <span className={styles.span}>Начать</span>
            </div>

        </div>
    )
}