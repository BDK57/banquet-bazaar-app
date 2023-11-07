import { createSlice } from "@reduxjs/toolkit";




const initiallstate = {
    banquetdata : ''
}

const banquetslice = createSlice({
    name:'banquet',
    initialState:initiallstate,
    reducers:{
        addbanquetdata(state,action){
            console.log("action",action.payload)
            state.banquetdata = action.payload
        }
    }
})


export const {addbanquetdata} = banquetslice.actions;


export default banquetslice.reducer;