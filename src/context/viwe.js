import { createSlice } from "@reduxjs/toolkit";                             
export const likeSlice = createSlice({                                                  
    name: "like",                                    
    initialState:{                                                                      
        value: JSON.parse(localStorage.getItem("likas")) || []                                    
    },                              
    reducers:{                              
        addTLike(state, action){         
            let index = state.value.findIndex(el => el.id === action.payload.id)
            if(index < 0){
                state.value = [...state.value,action.payload]    
                
            }else{
                state.value = state.value.filter((el)=> el.id !== action.payload.id)
            }
            localStorage.setItem("likas", JSON.stringify(state.value)) 
        },                           
    }                                
})                              

export const {addTLike} = likeSlice.actions          
export default likeSlice.reducer     