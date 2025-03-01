import styles from './TaskItem.module.css'
export const Tasker = ({ name }) =>{
    return(
        <div className={styles.tasker}>{name}</div>
    )
}