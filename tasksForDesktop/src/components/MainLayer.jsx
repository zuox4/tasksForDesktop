import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { Header } from "./Header/Header"
import { useEffect } from 'react'
import { fetchCategories } from '../features/categories/categoriesSlice'

export const MainLayer =()=>{
    const dispatch = useDispatch()
            useEffect(()=>{
            dispatch(fetchCategories())
        }, [dispatch])

    return(

        <div className="main-content">
            <Header/>
                <div style={{marginTop:'20px'}}>
                    <Outlet/>
                </div>
            </div>
      
    )
}