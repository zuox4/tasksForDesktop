import { InputFilter } from "../InputFilter"
import { TaskItem } from "./TaskItem"
import { useDispatch, useSelector } from "react-redux"
import {changefilterTaksValue} from '../../features/filterTask/filterTaskSlice'
import { useEffect, useState } from "react";
import sadIcon from '../../assets/sad.svg'
const tasksData = [
    {
        id: 1,
        category: 'Движение первых',
        title: 'Подготовка к ЕГЭ',
        description: 'Помощь в подготовке к экзаменам по математике и физике.',
        tasker: 'Петрова',
        heashTags: ['ЕГЭ', 'математика', 'физика'],
        deadLineDate: '12.12.2025',
        price: '5000',
        requiresApproval: false,
    },
    {
        id: 2,
        category: 'Спорт',
        title: 'Тренировка по футболу',
        description: 'Индивидуальная тренировка для начинающих футболистов.',
        tasker: 'Сидоров',
        heashTags: ['футбол', 'тренировка', 'спорт'],
        deadLineDate: '12.12.2025',
        price: '2000',
        requiresApproval: true,
    },
    {
        id: 3,
        category: 'IT',
        title: 'Разработка сайта',
        description: 'Создание лендинга для малого бизнеса.',
        tasker: 'Козлов',
        heashTags: ['веб-разработка', 'лендинг', 'IT'],
        deadLineDate: '12.12.2025',
        price: '15000',
        requiresApproval: true,
    },
    {
        id: 4,
        category: 'Искусство',
        title: 'Уроки рисования',
        description: 'Обучение основам акварельной живописи.',
        tasker: 'Иванова',
        heashTags: ['рисование', 'акварель', 'искусство'],
        deadLineDate: '12.12.2025',
        price: '4000',
        requiresApproval: false,
    },
    {
        id: 5,
        category: 'Кулинария',
        title: 'Мастер-класс по выпечке',
        description: 'Приготовление домашнего хлеба и пирогов.',
        tasker: 'Смирнова',
        heashTags: ['кулинария', 'выпечка', 'хлеб'],
        deadLineDate: '12.12.2025',
        price: '3500',
        requiresApproval: true,
    }
];
export const TaskDashBoard = () =>{
    const value = useSelector((state)=>state.taskInput.value)
    const dispatch = useDispatch()
    const [tasksFiltered, setTaskFiltered] = useState([])
    useEffect(()=>{
        setTaskFiltered(tasksData.filter((task => 
            task.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            task.description.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            task.tasker.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            task.category.toLocaleLowerCase().includes(value.toLocaleLowerCase())

            
        )))
    },[value])
    function change(v){
        dispatch(changefilterTaksValue(v))
    }
    
    return(
        <div className="taskDashBoard" style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <InputFilter inputValue ={value} setInputValue={change} placeholder={'Введите параметры поиска'}/>

            <div style={{display:"flex", flexDirection:'column', gap:'20px'}}>
                {
                    tasksFiltered.length>0?tasksFiltered.map((item)=>
                        <TaskItem item={item}/>
                    ):<div style={{fontWeight:'500', fontSize:"20px", display:'flex', flexDirection:'column', alignItems:'center'}}>
                        Тут пока ничего нет
                        <img src={sadIcon} alt="" style={{width:'100px', marginTop:"20px"}}/>
                        </div>
                }
            </div>

        </div>
    )
}