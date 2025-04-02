import { Link } from 'react-router'

import { CategorySingleView } from './CategorySingleView'
import { useEffect, useState } from 'react'
import api from '../../../api/api'
import { CircularProgress } from '@mui/material'
import { Error } from '../../components/Errors/Error'
export default function DashCategories({ name, icon }) {
	const [categories, setCategories] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const LoadCategories = () => {
		setIsLoading(true)
		api
			.get('/categories/all')
			.then(res => {
				console.log(res)
				setCategories(res.data)
				setIsLoading(false)
			})
			.catch(error => {
				setError(true)
				setIsLoading(false)
			})
	}

	useEffect(() => {
		LoadCategories()
	}, [])
	if (isLoading) return <CircularProgress className='flex justify-center' />
	if (error) return <Error />
	return (
		<div className='flex flex-col w-full gap-9'>
			{categories.map(category => (
				<CategorySingleView
					key={category.category_id}
					name={category.title}
					id={category.category_id}
				/>
			))}
		</div>
	)
}
