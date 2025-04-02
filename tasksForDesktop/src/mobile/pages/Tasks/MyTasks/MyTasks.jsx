import { useEffect, useState, useMemo } from 'react'
import { taskService } from '../TaskSingle/taskApi'
import { Error } from '../../../components/Errors/Error'
import { CircularProgress } from '@mui/material'
import { Header } from './Header'
import { FilterStatus } from './FilterStatus'
import { TaskList } from './TaskList'
export default function MyTasks() {
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)
	const [myTasks, setMyTasks] = useState([])
	const [filter, setFilter] = useState('current')

	const filteredTasks = useMemo(() => {
		if (filter === 'current') {
			return myTasks.filter(task => task.status !== 'completed')
		}
		return myTasks.filter(task => task.status === filter)
	}, [filter, myTasks])
	const handleLoadMytasks = async () => {
		setIsLoading(true)
		try {
			const tasks = await taskService.loadPlayerTasks()
			setMyTasks(tasks)
		} catch (error) {
			setError(true)
		}
		setIsLoading(false)
	}
	useEffect(() => {
		handleLoadMytasks()
	}, [])
	if (error) return <Error />
	if (isLoading) return <CircularProgress />
	return (
		!isLoading && (
			<div className='w-full flex flex-col items-center gap-4'>
				<Header />
				<FilterStatus filter={filter} setFilter={setFilter} />
				<TaskList myTasks={filteredTasks} />
			</div>
		)
	)
}
