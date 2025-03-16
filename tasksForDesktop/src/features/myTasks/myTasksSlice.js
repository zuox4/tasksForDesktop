import { createSlice } from "@reduxjs/toolkit";

export const myTaskSlice = createSlice({
    name:'worker',
    initialState:{
        openTasks:[1,2,3],
        closeTasks:[0]
    },
    reducers:{

    }
})
export default myTaskSlice.reducer;