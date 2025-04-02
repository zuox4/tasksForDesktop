import { createSlice } from '@reduxjs/toolkit'

const isOpen = localStorage.getItem('preview')

const PreviewSlice = createSlice({
	name: 'preview',
	initialState: {
		value: !isOpen,
	},
	reducers: {
		setPreviewClose(state) {
			localStorage.setItem('preview', !true)
			state.value = false
		},
	},
})
export const { setPreviewClose } = PreviewSlice.actions
export default PreviewSlice.reducer
