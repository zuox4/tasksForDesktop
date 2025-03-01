import { InputFilter } from "../InputFilter"
import { TaskItem } from "./TaskItem"
import { useDispatch, useSelector } from "react-redux"
import {changefilterTaksValue} from '../../features/filterTask/filterTaskSlice'

export const TaskDashBoard = () =>{
    const value = useSelector((state)=>state.taskInput.value)
    const dispatch = useDispatch()
    function change(v){
        dispatch(changefilterTaksValue(v))
    }

    return(
        <div className="taskDashBoard" style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <InputFilter inputValue ={value} setInputValue={change} placeholder={'Введите параметры поиска'}/>

            <div>
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
            </div>

        </div>
    )
}