import { configureStore } from "@reduxjs/toolkit";
import {cartReducer,martReducer} from './slice'
import {productExtraReducer} from './productSlice'
const store=configureStore({
    reducer:{
        cart:cartReducer,
        mart:martReducer,
        data:productExtraReducer
    }
});

export default store;



