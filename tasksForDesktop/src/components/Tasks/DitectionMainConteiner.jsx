import { useDispatch } from 'react-redux'
import styles from './DitectionMainConteiner.module.css'
import photo from './first2.svg'

import { changefilterTaksValue } from '../../features/filterTask/filterTaskSlice'
import { useEffect, useState } from 'react'
export const DirectionMainConteiner = () =>{
    const [categotyId, setCategoryId] = useState(1)
    const dispatch = useDispatch()
    
    return(
        <div className={styles.directionMainConteiner}>
            <button onClick={()=>setCategoryId(prev=>prev-1)}>-</button>
            <div className={styles.leftside}>
                <h3>Движение первых{categotyId}</h3>
                <p>Тут будет длинное описание направления котороое может нек поместиться поэтому надо бы его скрыть и нажать клавишу раскрытия Тут будет длинное описание направления котороое может нек поместиться поэтому надо бы его скрыть и нажать клавишу раскрытия</p>
                <button className={styles.sendbuttontocategory} onClick={()=>dispatch(changefilterTaksValue('Движение первых'))} style={{textTransform:'none'}}>Перейти к заданиям</button>
            </div>
            <div className={styles.rigthside}>
                <img className={styles.image} src={photo} alt="" />
            </div>
            <button onClick={()=>setCategoryId(prev=>prev+1)}>+</button>
        </div>
    )
}