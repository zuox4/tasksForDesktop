import styles from './MainPage.module.css'
import statIcon from '../Tasks/first.svg'
import ushuIcon from '../../assets/ushu.svg'
import classHelpIcon from '../../assets/classhelp.svg'
import farRisonIcon from '../../assets/farRison.svg'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { changefilterTaksValue } from '../../features/filterTask/filterTaskSlice'

export const Categories = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function redirectToTasks(value){
        dispatch(changefilterTaksValue(value))
        navigate('/tasks')
    }
    return(
        <div className={styles.categories} >
            <div className={styles.CategoriesCard} onClick={()=>redirectToTasks('Движение первых')}>
                <img src={statIcon} alt="" />
                <span>Движение первых</span>
            </div>
            <div className={styles.CategoriesCard}>
                <img src={ushuIcon} alt="" />
                <span>Ушу</span>

            </div>
            <div className={styles.CategoriesCard}>
                <img src={classHelpIcon} alt="" />
                <span>Классная помощь</span>
            </div>
            <div className={styles.CategoriesCard}>
                <img src={farRisonIcon} alt="" />
                <span>Дальние горизонты</span>

            </div>
            <div className={styles.CategoriesCard}>
                <img src={statIcon} alt="" />
            </div>
        </div>
    )
}