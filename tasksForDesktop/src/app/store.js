import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import inputReducer from '../features/input/inputSlice'
import tasksReducer from '../features/tasks/tasksSlice'
export default configureStore(
    {
        reducer:{ 
            counter: counterReducer,
            input: inputReducer,
            tasks: tasksReducer,
        }
    }
)