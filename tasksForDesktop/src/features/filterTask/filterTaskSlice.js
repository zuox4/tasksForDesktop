import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name:'filter',
    initialState:{
        value:''
    },
    reducers:{
        changefilterTaksValue(state, action){
            state.value = action.payload
        }
    }
    
})
export const { value, changefilterTaksValue } = filterSlice.actions;
export default filterSlice.reducer; 