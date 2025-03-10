import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router"
import { ChangeRolePage } from "./ChangeRole"

export const AdminPanel = () =>{
    const {roles} = useSelector(state=>state.auth.user)
    console.log(roles)
    if (roles.length>1){
        return <ChangeRolePage/>
    }
    return(
        <div className=''>
            <h1>{}, Добро пожаловать в панель администратора</h1>
            <nav>
                <Link to={'shop'}>Shop</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}