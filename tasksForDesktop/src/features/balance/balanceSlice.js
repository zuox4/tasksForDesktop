import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value: null,
    },
    reducers:{
        setBalance(state, action){
            state.value =action.payload
        },
        decrement(state, action){
            state.value = state.value - action.payload
        }
    }
}) 
export const {decrement, setBalance} = balanceSlice.actions;
export default balanceSlice.reducer