import { useParams } from 'react-router'
import { TaskView } from './TaskView'
import { useState, useEffect } from 'react'
import api from '../../../api/api'
import { CircularProgress } from '@mui/material'

export default function DashTasks() {
	const params = useParams()
	const handleOpenWork = elementId => {
		if (elementId === openElement) {
			setOpenElement(null)
		}
		if (openElement == null) {
			setOpenElement(elementId)
		}
		if (elementId !== openElement) {
			setOpenElement(elementId)
		}
	}

	const [tasks, setTasks] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [openElement, setOpenElement] = useState(null)
	const [error, setError] = useState('')

	const LoadTasks = () => {
		setIsLoading(true)
		api
			.get(`/tasks/by-category/${Number(params.id)}`)
			.then(res => {
				console.log(res)
				setTasks(res.data)
				setIsLoading(false)
			})
			.catch(error => {
				setError(error)
				setIsLoading(false)
			})
	}
	useEffect(() => {
		console.log(params)
		LoadTasks()
	}, [])
	if (isLoading)
		return (
			<div className='w-full flex flex-col items-center'>
				<CircularProgress />
			</div>
		)
	return (
		!isLoading && (
			<div className='flex flex-col gap-5 w-full'>
				{tasks.length < 1 && (
					<div className='text-gray uppercase text-center'>
						Нет доступных заданий
					</div>
				)}
				{tasks.map(task => (
					<TaskView
						key={task.id}
						item={task}
						isOpen={openElement === task.id}
						handleOpenWork={handleOpenWork}
					/>
				))}
			</div>
		)
	)
}
