import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'

import { CircularProgress } from '@mui/material'
import { Error } from '../../../components/Errors/Error'
import { TaskHeader } from './TaskHeader'
import { ActionPanel } from './ActionPanel'
import { taskService } from './taskApi'
import { StatusTaskChangeView } from './StatusTaskChangeView'
export default function TaskSingle() {
	const [task, setTask] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)

	const { id } = useParams()
	const {
		taskId,
		title,
		description,
		categoryTitle,
		requiresApproval,
		price,
		author,
		statusAssigned,
		dueDate,
	} = task

	const heandleLoadTask = async taskId => {
		setIsLoading(true)
		try {
			const task = await taskService.loadTaskData(taskId)
			setTask(task)
			setIsLoading(false)
		} catch (error) {
			setError(error)
			console.log(error)
		}
	}
	useEffect(() => {
		heandleLoadTask(id)
	}, [id])
	const ref = useRef(null)

	if (isLoading) return <CircularProgress />
	if (error) return <Error />

	return (
		!isLoading && (
			<div className='gap-3 flex flex-col opacity-100 '>
				<TaskHeader
					taskMainInfo={{
						title: title,
						description: description,
						categoryTitle,
						author: author,
						dueDate: dueDate,
						price: price,
						requiresApproval: requiresApproval,
					}}
				/>
				<ActionPanel
					taskId={taskId}
					requiresApproval={requiresApproval}
					statusAssigned={statusAssigned}
					setTask={setTask}
				/>
			</div>
		)
	)
}
