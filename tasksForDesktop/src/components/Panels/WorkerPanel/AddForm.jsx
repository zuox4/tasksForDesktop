import { useFormState, useFormStatus } from 'react-dom'
import { useDispatch } from 'react-redux'
import { addNewTask } from '../../../features/workerTasks/workerTaksSlice'
import {
	Checkbox,
	FormControlLabel,
	InputLabel,
	TextField,
	InputAdornment,
	FormControl,
	FilledInput,
	Box,
	FormLabel,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import dayjs from 'dayjs'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { useState } from 'react'
import { closeModal } from '../../../features/modal/modalSlice'
dayjs.extend(utc)
dayjs.extend(timezone)

function SubmitButton() {
	const { pending } = useFormStatus()

	return (
		<button type='submit' disabled={pending}>
			{pending ? 'Загрузка...' : 'Создать задачу'}
		</button>
	)
}

export const AddForm = () => {
	const dispatch = useDispatch()
	const { pending } = useFormStatus()
	const [error, setError] = useState('')

	function createTaskData(data) {
		const { title, description, date, price, requires_approval } =
			Object.fromEntries(data.entries())

		return {
			title,
			description,
			category_id: 1,
			due_date: dayjs.utc(date),
			price: Number(price),
			requires_approval: requires_approval === 'on',
		}
	}

	async function sendDataToServer(data) {
		const taskData = createTaskData(data)
		const res = await dispatch(addNewTask(taskData))
		res.error?.message
			? setError('Ошибка при добавлении новой задачи')
			: dispatch(closeModal())
	}

	return (
		<form
			className=''
			style={{
				display: 'flex',
				flexDirection: 'column',
				background: 'white',
				padding: '100px',
				width: '500px',
				borderRadius: '10px',
			}}
			action={async data => await sendDataToServer(data)}
		>
			<h3>Добавить задачу</h3>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					maxWidth: '700px',
					gap: '30px',
				}}
			>
				<TextField
					id='filled-basic'
					label='Название задачи'
					variant='standard'
					required
					name='title'
					disabled={pending}
				/>
				<TextField
					id='filled-basic'
					type='text'
					variant='standard'
					name='description'
					label='Описание задачи'
					disabled={pending}
					required
					multiline
					maxRows={4}
				/>
				<TextField
					required
					id='filled-basic'
					type='number'
					variant='standard'
					name='price'
					label='Вознаграждение'
					disabled={pending}
				/>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						label='Дата время завершения'
						name='date'
						disabled={pending}
					/>
				</LocalizationProvider>

				<FormControlLabel
					control={<Checkbox name='requires_approval' defaultChecked={true} />}
					label='Требует согласования'
				/>
				<SubmitButton />
			</Box>
		</form>
	)
}
