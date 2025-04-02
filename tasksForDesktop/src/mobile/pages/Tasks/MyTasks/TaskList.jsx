import { useState } from 'react'
import { TaskView } from './TaskView'

export function TaskList({ myTasks }) {
	// Добавляем проверку на существование myTasks
	if (!myTasks || !Array.isArray(myTasks)) {
		return null // или можно вернуть сообщение об ошибке/загрузке
	}
	const statusMessages = {
		in_work: 'Ожидает выполнения',
		wait_approve: `Ожидаем согласования заказчика`,
		wait_confirm: `Ожидаем удтверждения заказчика`,
		completed: 'Задача завершена',
	}
	const colors = {
		in_work: '#0092c8',
		wait_approve: 'gray',
		wait_confirm: 'gray',
		completed: 'green',
	}
	return (
		<div className='w-full flex flex-col gap-3'>
			{myTasks.map(task => (
				<TaskView
					key={task.taskId}
					taskId={task.taskId}
					title={task.title}
					status={statusMessages[task.status]}
					color={colors[task.status]}
				/>
			))}
		</div>
	)
}
