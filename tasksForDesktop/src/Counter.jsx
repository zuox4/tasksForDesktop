import {useSelector, useDispatch} from 'react-redux'


import { Test } from './Test'
import { addTask } from './features/tasks/tasksSlice'

export  const Counter = () =>{
    const tasks = useSelector(state=>state.tasks.tasks)
    const dispatch = useDispatch()
    function addNewTask(){
        const newTask = 'Новая задача'
        dispatch(addTask('sdcsdc'))
        console.log(tasks)
    }

    return(
        <div>

            <div>
                <button onClick={addNewTask}>Добавить задачу</button>
            </div>


            {tasks.map(task=><div>{task}</div>)}
        </div>
    )
}