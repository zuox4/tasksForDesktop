import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode'
import api from '../../api/api'

const initialState = {
	user: null,
	isActive: null,
	loading: false,
	error: null,
}

// Инициализация из localStorage
const token = localStorage.getItem('token')

if (token) {
	try {
		const decoded = jwtDecode(token)
		initialState.user = {
			id: decoded.user_id,
			// fullName: decoded.full_name,
			email: decoded.sub,
			isActive: decoded.isActive,
		}
	} catch (error) {
		localStorage.removeItem('token')
	}
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginStart(state) {
			state.loading = true
			state.error = null
		},
		loginSuccess(state, action) {
			const { token } = action.payload
			const decoded = jwtDecode(token)
			state.loading = false
			state.user = {
				id: decoded.user_id,
				role: decoded.role,
				fullName: decoded.full_name,
				email: decoded.sub,
				isActive: decoded.isActive,
			}
			state.currentRole = decoded.role
			state.error = null
			localStorage.setItem('token', token)
		},
		loginFailure(state, action) {
			state.loading = false
			state.error = action.payload
			localStorage.removeItem('token')
		},
		resetLoading(state) {
			state.loading = false
		},
		logout(state) {
			state.user = null
			state.currentRole = null
			state.error = null
			localStorage.removeItem('token')
			localStorage.removeItem('preview')
		},
		setCurrentRole: (state, action) => {
			state.currentRole = action.payload
		},
		setActivate: (state, action) => {
			state.user = { ...state.user, isActive: action.payload }
		},
		updateUserData(state) {
			const token = localStorage.getItem('token')
			if (token) {
				try {
					const decoded = jwtDecode(token)
					state.user = { ...state.user, ...decoded }
				} catch (error) {
					localStorage.removeItem('token')
				}
			}
		},
	},
})

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	logout,
	setCurrentRole,
	updateUserData,
	setActivate,
	resetLoading,
} = authSlice.actions

// Thunk для логина с Axios
export const login = (credentials, navigate) => async dispatch => {
	try {
		dispatch(loginStart())
		const response = await api.post('/auth/login', credentials)

		dispatch(
			loginSuccess({
				token: response.data.access_token,
				user: response.data.user,
			})
		)
		navigate('/fast-bonus')
	} catch (error) {
		const errorMessage = error.response?.data?.message || 'Login failed'
		dispatch(loginFailure(errorMessage))
	}
}

// Thunk для автоматической проверки токена
export const checkAuth = () => async dispatch => {
	const token = localStorage.getItem('token')
	if (token) {
		try {
			const decoded = jwtDecode(token)
			if (decoded.exp * 1000 > Date.now()) {
				dispatch(loginSuccess({ token }))
			} else {
				dispatch(logout())
			}
		} catch (error) {
			dispatch(logout())
		}
	}
}
export default authSlice.reducer
