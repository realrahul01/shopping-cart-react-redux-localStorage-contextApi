import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../Feature/CounterSlice'


export const store = configureStore({
    reducer:{
        counter: cartReducer
    }
})