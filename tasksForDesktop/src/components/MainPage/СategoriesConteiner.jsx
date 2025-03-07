import styles from './MainPage.module.css'
import statIcon from '../Tasks/first.svg'
import ushuIcon from '../../assets/ushu.svg'
import classHelpIcon from '../../assets/classhelp.svg'
import farRisonIcon from '../../assets/farRison.svg'
import rokotIcon from '../../assets/rokot.svg'
import schooldealIcon from '../../assets/schooldeals.svg'
import mediachildrenIcon from '../../assets/mediachildren2.svg'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { changefilterTaksValue } from '../../features/filterTask/filterTaskSlice'


const CategoryCard = ({name, icon}) =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function redirectToTasks(value){
        dispatch(changefilterTaksValue(value))
        navigate('/tasks')
    }
    return(
        <div className={styles.CategoriesCard} onClick={()=>redirectToTasks(name)}>
            <img src={icon} alt="" />
            <span>{name}</span>
        </div>
    )
}

export const Categories = () => {
    return(
        <div className={styles.categories} >
            <CategoryCard name={'Ушу'} icon={ushuIcon}/>
            <CategoryCard name={'Классная помощь'} icon={classHelpIcon}/>
            <CategoryCard name={'Дальние горизонты'} icon={farRisonIcon}/>
            <CategoryCard name={'Рокот'} icon={rokotIcon}/>
            <CategoryCard name={'Школьные дела'} icon={schooldealIcon}/>
            <CategoryCard name={'Медиа дети'} icon={mediachildrenIcon}/>
            <CategoryCard name={'Движение первых'} icon={statIcon}/>
        </div>
    )
}