import { ActionButton } from './ActionButton'

import { NeedApproveAlert } from './NeedAproveAlert'
import sferum from './sferum.svg'
import { taskService } from './taskApi'
import { useEffect, useState } from 'react'
import confirmIcon from './confirm.svg'
import { StatusTaskChangeView } from './StatusTaskChangeView'

export const ActionPanel = ({ taskId, statusAssigned, requiresApproval }) => {
	const statusMessages = {
		in_work: 'У вас в работе',
		wait_approve: `Заявка отправлена. Ожидаем согласования заказчика`,
		wait_confirm: `Выполнение завершено. Ожидаем удтверждения заказчика`,
		completed: 'Задача завершена',
	}

	const [isLoading, setIsLoading] = useState(false)
	const [status, setStatus] = useState(statusAssigned)
	const [openInfo, setOpenInfo] = useState(false)
	useEffect(() => {
		status && setOpenInfo(true)
	}, [status])

	const handleTakeTask = async taskId => {
		setIsLoading(true)
		try {
			const task = await taskService.takeTask(taskId)
			setStatus(task.status)
		} catch (error) {
			alert('Ошибка сети')
		}
		setIsLoading(false)
	}

	const handlefinishTaskTask = async taskId => {
		try {
			const task = await taskService.finishTask(taskId)
			setStatus(task.status)
		} catch (error) {
			// Обработка ошибки (можно показать уведомление пользователю)
			alert('Ошибка сети')
			console.error(error.message)
		}
		setIsLoading(false)
	}

	return (
		!isLoading && (
			<>
				{requiresApproval && [null, 'wait_approve'].includes(status) && (
					<NeedApproveAlert />
				)}
				{status in statusMessages ? (
					<span className='w-full uppercase text-white text-center font-bold text-1xl'>
						<StatusTaskChangeView
							text={statusMessages[status]}
							status={status}
						/>
					</span>
				) : (
					<div>sdcsdcsdc</div>
				)}
				<section className='gap-2 flex flex-col'>
					{[
						null,
						'completed',
						'in_work',
						'wait_confirm',
						'wait_approve',
					].includes(status) && (
						<ActionButton
							text={'Cвязаться с автором задачи'}
							srcIcon={sferum}
							className={'w-8'}
						/>
					)}
					{status === 'in_work' && (
						<ActionButton
							srcIcon={confirmIcon}
							className={'w-8'}
							text={'Завершить задачу'}
							onClick={() => handlefinishTaskTask(taskId)}
						/>
					)}

					{[null].includes(status) && (
						<ActionButton
							onClick={() => handleTakeTask(taskId)}
							text={requiresApproval ? 'Отправить заявку' : 'Приступить'}
							className={'w-8'}
						>
							<div className='bg-yellow h-8 relative left-2 w-10 text-right rounded-bl-[9px] rounded-tl-[9px] flex flex-row items-center justify-end'>
								<span className='white font-bold text-white mr-2'>Go</span>
							</div>
						</ActionButton>
					)}
				</section>
			</>
		)
	)
}
