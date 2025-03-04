import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value:10000,
    },
    reducers:{
        decrement(state, action){
            state.value = state.value - action.payload
        }
    }
}) 
export const {decrement} = balanceSlice.actions;
export default balanceSlice.reducer