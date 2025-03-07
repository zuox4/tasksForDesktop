import { Link, Outlet } from "react-router"

export const AdminPanel = () =>{
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