import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'
import { Header } from './Header/Header'
import { useEffect } from 'react'
import { fetchCategories } from '../features/categories/categoriesSlice'

export const MainLayer = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchCategories())
	}, [dispatch])
	useEffect(() => {
		navigate('/player/home')
	}, [])
	return (
		<div className='main-content'>
			<Header />
			<div style={{ marginTop: '20px' }}>
				<Outlet />
			</div>
		</div>
	)
}
