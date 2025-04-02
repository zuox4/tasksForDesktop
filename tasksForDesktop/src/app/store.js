import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import balanceReducer from '../features/balance/balanceSlice'
import modalReducer from '../features/modal/modalSlice'
import userReduser from '../features/user/userSlice'
import previewShow from '../features/preview/previewSlice'
import playerProfile from '../features/playerProfile/playerProfileSlice'
export default configureStore({
	reducer: {
		auth: authReducer,
		balance: balanceReducer,
		modal: modalReducer,
		user: userReduser,
		preview: previewShow,
		playerProfile: playerProfile,
	},
	devTools: true, // Убедитесь, что включено
})
