import styles from './MainPage.module.css'

import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { changefilterTaksValue } from '../../features/filterTask/filterTaskSlice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { changeCurrentCategory } from '../../features/categories/categoriesSlice'

const CategoryCard = ({name, id, icon}) =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function redirectToTasks(value){
        dispatch(changefilterTaksValue(value))
        navigate('/player/tasks')
        dispatch(changeCurrentCategory(id-1))
    }
    return(
        <div className={styles.CategoriesCard} onClick={()=>redirectToTasks(name)}>
            <img src={icon} alt="" />
            <span>{name}</span>
        </div>
    )
}

export const Categories = () => {
const categories = useSelector((state) => state.categories.categories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);
    useEffect(()=>{

    },[])

    return(
        <div className={styles.categories} >
            {categories.map((cat)=><CategoryCard key={cat.category_id} id={cat.category_id} name={cat.title} icon={cat.url_icon}/>)}
        </div>
    )
}