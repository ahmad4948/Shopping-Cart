import {configureStore, createSlice} from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name:'cart',
    initialState: {
        buttons:[]
    },
    reducers:{
        toggle:(state,action)=>{
            let id = action.payload;
            let index = state.buttons.indexOf(id);
            if(index==-1){
                state.buttons.push(id);
            }
            else{
                state.buttons = state.buttons.filter(pid=>pid!=id);
            }
        }
    }
    })
    export const {toggle} = cartSlice.actions;
    export const store = configureStore({
        reducer:{
            cart:cartSlice.reducer
        }
    })

