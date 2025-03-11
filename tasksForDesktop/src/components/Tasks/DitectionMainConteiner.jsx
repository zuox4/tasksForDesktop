import { useDispatch, useSelector } from 'react-redux'
import styles from './DitectionMainConteiner.module.css'
import { useEffect, useState } from 'react'
import photo from './first2.svg'
import ArrowLeftIcon from'./icons/arrow-left.svg'
import { changefilterTaksValue } from '../../features/filterTask/filterTaskSlice'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export const DirectionMainConteiner = () =>{
        const { categories, categoryCurrent, status } = useSelector(state=>state.categories)
        
    const [categotyId, setCategoryId] = useState(categoryCurrent)
    const dispatch = useDispatch()
    return(
        (status==="succeeded")&&<div className={styles.directionMainConteiner}>
            <button  onClick={()=>(categotyId>0)&&setCategoryId(prev=>prev-1)}>
                {(categotyId>0)&&<ArrowBackIosIcon />}
            </button>
            <div className={styles.infoBlock}>
                <div className={styles.leftside}>
                    <h3>{categories[categotyId].title}</h3>
                    <p>{categories[categotyId].description}</p>
                    <button className={styles.sendbuttontocategory} onClick={()=>dispatch(changefilterTaksValue(categories[categotyId].title))} style={{textTransform:'none'}}>Перейти к заданиям</button>
                </div>
                <div className={styles.rigthside}>
                    <img className={styles.image} src={categories[categotyId].url_icon} alt="" />
                </div>
            </div>

            <button className={styles.button} onClick={()=>(categotyId<categories.length-1)&&setCategoryId(prev=>prev+1)}>
                {(categotyId<categories.length-1)&&<ArrowForwardIosIcon />}
            </button>
        </div>
    )
}