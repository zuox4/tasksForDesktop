import styles from './DitectionMainConteiner.module.css'
import photo from './first2.svg'
export const DirectionMainConteiner = () =>{
    return(
        <div className={styles.directionMainConteiner}>
            <div className={styles.leftside}>
                <h3>Название направления</h3>
                <p>Тут будет длинное описание направления котороое может нек поместиться поэтому надо бы его скрыть и нажать клавишу раскрытия Тут будет длинное описание направления котороое может нек поместиться поэтому надо бы его скрыть и нажать клавишу раскрытия</p>
                <p className={styles.sendbuttontocategory} style={{textTransform:'none', fontSize:'12px', cursor:'pointer', textDecoration:'underline'}}>Перейти к заданиям</p>
            </div>
            <div className={styles.rigthside}>
                <img className={styles.image} src={photo} alt="" />
            </div>
        </div>
    )
}