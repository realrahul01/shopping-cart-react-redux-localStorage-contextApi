
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart : [],
    profileDetail:{name:'',email:'',password:'',confirmPassword:''},
    bool:false,
    product:[]
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        addcart:(state,action)=>{
            state.cart = action.payload.map((x)=>{
                return {...x,quantity:1}
            })
        },
        updateProfileName:(state,action)=>{
            state.profileDetail.name = action.payload
        },
        detailsVal:(state,action)=>{
            console.log(action.payload)
            state.profileDetail = action.payload
        },
        authentication:(state)=>{
            state.bool = !state.bool
        },
        singleProduct:(state,action)=>{
            const existingItemIndex = state.product.findIndex((item)=>item.id === action.payload.id)
            if(existingItemIndex !== -1){
                state.product[existingItemIndex].quantity += 1
            }else{
                state.product.push(action.payload)
            }
        },
        increment:(state,action)=>{
            state.product = state.product.map((x,index)=>{
                if(index == action.payload){
                    return {...x, quantity:x.quantity+1}
                }else{
                    return x
                }
            })
        },
        decrement:(state,action)=>{
            state.product = state.product.map((x,index)=>{
                if(index === action.payload){
                    if(x.quantity > 1){
                        return {...x,quantity:x.quantity-1}
                    }else{
                        return {...x,quantity:x.quantity}
                    }
                }else{
                    return x
                }
            })
        },
        removeItem:(state,action)=>{
            state.product.splice(action.payload, 1)
        }
    }
})

export const {addcart,detailsVal,authentication,singleProduct,increment,decrement,removeItem,updateProfileName} = CounterSlice.actions
export default CounterSlice.reducer