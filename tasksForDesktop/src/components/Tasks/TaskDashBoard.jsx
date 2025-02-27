import { useEffect, useState } from "react"
import { InputFilter } from "../InputFilter"
import { TaskItem } from "./TaskItem"
export const TaskDashBoard = () =>{
    const [inputValue, setInputValue] = useState('')
    const [value, setValue] = useState(0)
    useEffect(()=>{
        console.log(value)
    }, [value])
    return(
        <div className="taskDashBoard" style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
            <InputFilter inputValue ={inputValue} setInputValue={setInputValue} placeholder={'Введите параметры поиска'}/>

            <input type="range" id="volume" name="volume" min="0" max="11" value={value} onChange={(e)=>setValue(prev=>e.target.value)} />
            <label for="volume">Цена</label>
            </div>
            <div>
   
            </div>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </div>
    )
}