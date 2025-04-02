import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

export const loadProfileData = createAsyncThunk('loadProfileData', async () => {
	const res = await api.get('/player/profile')
	return res.data
})

const initialState = {
	isLoading: false,
	error: null,
	player: {
		roles: [],
		fullName: 'q q q',
		balance: 0,
		score: 0,
		raiting: 0,
		likeCategory: '...',
		taskAssignments: 0,
		edu_level: '',
	},
}

// const loadPlayerData = createAsyncThunk

const playerProfileSlice = createSlice({
	name: 'playerProfile',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loadProfileData.fulfilled, (state, actions) => {
			state.player = actions.payload
			state.isLoading = false
		})
	},
})

export default playerProfileSlice.reducer
