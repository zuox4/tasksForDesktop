import { createSlice} from '@reduxjs/toolkit'

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        value: ''
    },
    reducers: {
        setInputValue: (state, action) =>
        {
            state.value = state.payload;
        }
    }
})

export const { setInputValue } = inputSlice.actions;

export default inputSlice.reducer;