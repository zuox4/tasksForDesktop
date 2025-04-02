import api from '../../../api/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' // Добавьте навигацию при необходимости

const TextSpan = ({ children }) => {
	return <span className='text-gray'>{children}</span>
}

const initialFormState = {
	title: '',
	description: '',
	categoryId: '',
	price: '',
	endDate: '',
	requiresApproval: false,
	emergencyTask: false,
}

export default function NewTask() {
	const navigate = useNavigate()
	const [categoriesList, setCategoriesList] = useState([])
	const [formData, setFormData] = useState(initialFormState)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState('')

	// Загрузка категорий
	const loadCategories = async () => {
		try {
			const res = await api.get('/categories/all')
			setCategoriesList(res.data)
		} catch (error) {
			console.error('Ошибка загрузки категорий:', error)
		}
	}

	// Обработка изменений в форме
	const handleInputChange = e => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	// Валидация формы

	// Отправка формы
	const handleSubmit = async e => {
		e.preventDefault()

		setIsSubmitting(true)
		setError('')

		try {
			const payload = {
				...formData,
				price: Number(formData.price),
				endDate:
					formData.endDate !== ''
						? new Date(formData.endDate).toISOString()
						: '',
			}

			const response = await api.post('/tasks', payload) // Замените на ваш эндпоинт

			if (response.status === 201) {
				// Очистка формы или перенаправление
				setFormData(initialFormState)
				navigate('/tasks') // Перенаправление после успешного создания
			}
		} catch (err) {
			console.error('Ошибка создания задачи:', err)
			setError(err.response?.data?.message || 'Ошибка при создании задачи')
		} finally {
			setIsSubmitting(false)
		}
	}

	// Очистка формы
	const handleClear = e => {
		e.preventDefault()
		setFormData(initialFormState)
		setError('')
	}

	useEffect(() => {
		loadCategories()
	}, [])

	return (
		<div className='w-full flex flex-col items-center gap-3'>
			<h1>Новое задание</h1>
			{error && <div className='text-red-500'>{error}</div>}

			<form className='w-full flex flex-col gap-1' onSubmit={handleSubmit}>
				{/* Поля формы */}
				<TextSpan>Заголовок</TextSpan>
				<input
					name='title'
					value={formData.title}
					onChange={handleInputChange}
					className='bg-white p-2 w-full rounded-[5px]'
					type='text'
					placeholder='Название'
					required
				/>

				<TextSpan>Описание:</TextSpan>
				<textarea
					name='description'
					value={formData.description}
					onChange={handleInputChange}
					className='bg-white p-2 w-full rounded-[5px]'
					placeholder='Описание задачи'
					maxLength='200'
				/>

				<TextSpan>Категория:</TextSpan>
				<select
					name='categoryId'
					value={formData.categoryId}
					onChange={handleInputChange}
					className='bg-white p-2 w-full rounded-[5px]'
					required
				>
					<option value=''>Не выбрано</option>
					{categoriesList.map(category => (
						<option key={category.id} value={category.category_id}>
							{category.category_id}
						</option>
					))}
				</select>

				<TextSpan>Цена:</TextSpan>
				<input
					name='price'
					value={formData.price}
					onChange={handleInputChange}
					className='bg-white p-2 w-full rounded-[5px]'
					type='number'
					placeholder='Стоимость'
					min='0'
					step=''
					required
				/>
				<TextSpan>Выполнить до:</TextSpan>
				<input
					name='endDate'
					value={formData.endDate}
					onChange={handleInputChange}
					className='bg-white p-2 w-full rounded-[5px]'
					type='date'
				/>

				<div className='flex flex-row w-full justify-between'>
					<TextSpan>Требует согласования</TextSpan>
					<input
						name='requiresApproval'
						checked={formData.requiresApproval}
						onChange={handleInputChange}
						className='bg-white w-10 rounded-[5px]'
						type='checkbox'
					/>
				</div>
				<div className='flex flex-row w-full justify-between'>
					<TextSpan>Срочная</TextSpan>
					<input
						name='emergencyTask'
						checked={formData.emergencyTask}
						onChange={handleInputChange}
						className='bg-white w-10 rounded-[5px]'
						type='checkbox'
					/>
				</div>

				<div className='flex flex-row justify-between mt-3'>
					<button
						type='submit'
						disabled={isSubmitting}
						className={`bg-blue px-5 py-1 text-[15px] rounded-[5px] text-white uppercase ${
							isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
						}`}
					>
						{isSubmitting ? 'Создание...' : 'Создать'}
					</button>

					<button
						onClick={handleClear}
						className='bg-red px-5 py-1 text-[15px] rounded-[5px] text-white uppercase'
					>
						Очистить
					</button>
				</div>
			</form>
		</div>
	)
}
