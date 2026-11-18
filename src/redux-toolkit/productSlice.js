import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const fetchProduct=createAsyncThunk(
    'products',
    async (_,{rejectWithValue})=>{
        try{
            const resp=await fetch('https://dummyjson.com/products');
            const response=await resp.json();
            if(!resp.ok){
                throw new Error(response.message || 'faild to laod data');
            }
            console.log(response);
            return response.products;
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
);

const initialState={
    item:[],
    status:null,
    error:null
}

const productSlice=createSlice({
    name:'product',
    initialState,

    reducers:{
        viewProcuts(state,action){
            state.item=action.payload;
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state)=>{
            state.status='loading'
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.item=action.payload;
            state.status='fulfilled',
            state.error=null
        })
    }

})

export {fetchProduct};
export const productExtraReducer=productSlice.reducer;