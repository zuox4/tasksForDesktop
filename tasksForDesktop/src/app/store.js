import {configureStore} from '@reduxjs/toolkit'
import authReducer  from '../features/auth/authSlice'
import balanceReducer from '../features/balance/balanceSlice'
import filterTaskReducer from '../features/filterTask/filterTaskSlice'
import myTasks from '../features/myTasks/myTasksSlice'
export default configureStore(
    {
        reducer:{ 
            auth: authReducer,
            balance: balanceReducer,
            taskInput: filterTaskReducer,
            myTasks: myTasks
        },
    }
)