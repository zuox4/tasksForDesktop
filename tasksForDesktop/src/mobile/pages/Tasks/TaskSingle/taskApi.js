import api from '../../../../api/api'
const handleRequestError = (error, defaultMessage = 'Ошибка запроса') => {
	if (error.response) {
		console.error(`${defaultMessage}:`, error.response.data)
		throw new Error(error.response.data.message || defaultMessage)
	} else if (error.request) {
		console.error(`${defaultMessage}: Нет ответа от сервера`)
		throw new Error('Сервер не ответил')
	} else {
		console.error(`${defaultMessage}:`, error.message)
		throw new Error('Ошибка при выполнении запроса')
	}
}

export const taskService = {
	async takeTask(taskId) {
		try {
			const response = await api.post('tasks/get-task', { task_id: taskId })
			console.log('Задача получена:', response.data)
			return response.data
		} catch (error) {
			return handleRequestError(error, 'Не удалось взять задачу')
		}
	},

	async finishTask(taskId) {
		try {
			const response = await api.put('tasks/finish-task', { task_id: taskId })
			console.log('Задача отправлена на проверку:', response.data)
			return response.data
		} catch (error) {
			return handleRequestError(error, 'Не удалось завершить задачу')
		}
	},
	async loadTaskData(taskId) {
		try {
			const response = await api.get(`/tasks/${taskId}`)
			return response.data
		} catch (error) {
			return handleRequestError(error, 'Не удалось загрузить задачу')
		}
	},
	async loadPlayerTasks() {
		try {
			const response = await api.get('tasks/get-my-tasks')
			console.log(response.data)
			return response.data
		} catch (error) {
			return handleRequestError(error, 'Не удалось загрузить задачи')
		}
	},
}
