import { DirectionMainConteiner } from '../components/Tasks/DitectionMainConteiner'
import { TaskDashBoard } from '../components/Tasks/TaskDashBoard'
import styles from './Pages.module.css'
export const Tasks = () =>{

    return(
        <div className={styles.tasks} >
            <DirectionMainConteiner/>
            <h1 style={{fontSize:'20px', marginTop:'20px'}}>Задания</h1>
            <TaskDashBoard/>
        </div>
    )
}