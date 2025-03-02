import { Link, useLocation } from "react-router"
import { NavBarButton } from "./NavBar.button"
import homeIcon from '../assets/home.svg'
import tasksIcon from '../assets/tasks.svg'
import calendarIcon from '../assets/calendar.svg'
import shopIcon from '../assets/shop.svg'
import myTaksIcon from '../assets/myTasks.svg'
import ordersIcon from '../assets/orders4.svg'


export const NavBar = () =>{

    return(
        <div className="nav-bar" style={{background:'white', width:'min-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
            
            <NavBarButton path={'/home'} name={'Главная'} icon={homeIcon}/>
            <NavBarButton path={'/tasks'} name={'Задания'} icon={tasksIcon}/>
            <NavBarButton path={'/shop'} name={'Магазин'} icon={shopIcon}/>
            <NavBarButton path={'/calendar'} name={'Календарь'} icon={calendarIcon}/>
            <NavBarButton path={'/mytasks'} name={'Мои задачи'} icon={myTaksIcon}/>
            <NavBarButton path={'/orders'} name={'Покупки'} icon={ordersIcon}/>


            
        </div>
    )
}