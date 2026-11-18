import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

const addToMart=createSlice({
    name:'mart',
    initialState,

    reducers:{
        addItem:(state,action)=>{
            state.value+=action.payload;
        },
        removeItem:(state,payload)=>{
            state.value-=payload;
        }
    }
})

const addData=addToMart.actions.addItem;
const martReducer=addToMart.reducer;


const addToCart=createSlice({
    name:'cart',
    initialState,

    reducers:{
        addItem:(state,action)=>{
            const existingItem=state.items.find((item)=>item.id===action.payload.id);
            if(existingItem){
                existingItem.quantity=(existingItem.quantity ||1)+1;
            }else{
                state.items.push({...action.payload,quantity:1});
            }
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        removeItem:(state,action)=>{
            const existingItem=state.items.find((item)=>item.id===action.payload);
            if(existingItem){
                existingItem.quantity=(existingItem.quantity ||1)-1;
                if(!existingItem.quantity){
                    state.items=state.items.filter((item)=>item.id!==action.payload);
                }
            }
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        clearItem:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {addItem,removeItem,clearItem}=addToCart.actions;
export {addData};
const cartReducer=addToCart.reducer;
export {martReducer,cartReducer};







// is trah se bhi ise likh skte hai 
// const addToCart = createSlice({
//     name: "cart",

//     initialState: {
//         value: 0
//     },

//     reducers: {
//         addItem: (state) => {
//             state.value += 1;
//         },

//         removeItem: (state) => {
//             state.value -= 1;
//         },

//         resetCart: (state) => {
//             state.value = 0;
//         }
//     }
// });