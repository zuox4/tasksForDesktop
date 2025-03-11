import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
        user:null
    },
    reducers:{
        setInfoUserAfterLogin: (state, action)=>{
            state.user = action.payload;
        }

    }
})
export const {setInfoUserAfterLogin} = userSlice.actions;
export default userSlice.reducer;