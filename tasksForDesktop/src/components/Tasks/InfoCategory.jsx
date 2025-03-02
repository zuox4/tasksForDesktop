import logo from './first2.svg'
import styles from './TaskItem.module.css'
export const InfoCategory = ({categoryName}) =>{
    return(
        <div className={styles.infoCategory}>
            <img src={logo} alt=""/>
            {categoryName}
        </div>
    )
}