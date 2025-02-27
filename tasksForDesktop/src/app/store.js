import {configureStore} from '@reduxjs/toolkit'
import authReducer  from '../features/auth/authSlice'
import balanceReducer from '../features/balance/balanceSlice'

export default configureStore(
    {
        reducer:{ 
            auth: authReducer,
            balance: balanceReducer,
        },
    }
)