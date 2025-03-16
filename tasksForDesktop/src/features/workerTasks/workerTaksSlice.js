import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api' // ваш axios-экземпляр

// Асинхронный Thunk для добавления новой задачи
export const addNewTask = createAsyncThunk(
	'tasks/addNew',
	async (newTaskData, { rejectWithValue }) => {
		try {
			const response = await api.post('/tasks', newTaskData)
			alert('Успешно')
			return response.data // Возвращаем новую задачу
		} catch (err) {
			alert('Ошибка')
			return rejectWithValue(err.response.data)
		}
	}
)

// Асинхронный Thunk для загрузки задач
export const fetchTasks = createAsyncThunk(
	'tasks/fetchAll',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get('/tasks/task_create_by_worker')
			return response.data
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	}
)

export const workerTasksSlice = createSlice({
	name: 'worker_tasks',
	initialState: {
		allTasks: [],
		openTasks: [],
		closeTasks: [],
		loading: false,
		error: null,
		addTaskStatus: 'idle', // Состояние добавления задачи
	},
	reducers: {},
	extraReducers: builder => {
		builder
			// Обработка загрузки задач
			.addCase(fetchTasks.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.loading = false

				state.allTasks = action.payload
			})
			.addCase(fetchTasks.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload?.message || 'Ошибка загрузки задач'
			})

			// Обработка добавления новой задачи
			.addCase(addNewTask.pending, state => {
				state.addTaskStatus = 'loading'
			})
			.addCase(addNewTask.fulfilled, (state, action) => {
				state.addTaskStatus = 'succeeded'
				// Добавляем новую задачу в конец списка allTasks
				state.allTasks.unshift(action.payload)
			})
			.addCase(addNewTask.rejected, (state, action) => {
				state.addTaskStatus = 'failed'
				state.error = action.payload?.message || 'Ошибка добавления задачи'
			})
	},
})

export default workerTasksSlice.reducer
