import { useDispatch } from 'react-redux'
import styles from './DitectionMainConteiner.module.css'
import photo from './first2.svg'
import { changefilterTaksValue } from '../../features/filterTask/filterTaskSlice'
export const DirectionMainConteiner = () =>{
    const dispatch = useDispatch()
    return(
        <div className={styles.directionMainConteiner}>
            <div className={styles.leftside}>
                <h3>Движение первых</h3>
                <p>Тут будет длинное описание направления котороое может нек поместиться поэтому надо бы его скрыть и нажать клавишу раскрытия Тут будет длинное описание направления котороое может нек поместиться поэтому надо бы его скрыть и нажать клавишу раскрытия</p>
                <button className={styles.sendbuttontocategory} onClick={()=>dispatch(changefilterTaksValue('Движение первых'))} style={{textTransform:'none', fontSize:'14px', cursor:'pointer'}}>Перейти к заданиям</button>
            </div>
            <div className={styles.rigthside}>
                <img className={styles.image} src={photo} alt="" />
            </div>
        </div>
    )
}