import styles from './TaskItem.module.css'
export const AdditionalInfo = ({ title, icon }) =>{
    return(
        <div className={styles.AdditionalInfoItem} style={{display:'flex', flexDirection:'row', gap:'5px'}}>
            <img style={{width:'20px'}} src={icon} alt=""/>
            <span>{title}</span>
        </div>
    )
}