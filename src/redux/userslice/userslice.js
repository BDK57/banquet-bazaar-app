import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";


const inititialstate = {
    userdata:"",
    isAuthenticated:false

}
const userslice = createSlice({
    name:'user',
   initialState:inititialstate,
   reducers:{
    login(state,action){
        console.log("aactio",action.payload)
        state.userdata = action.payload,
        state.isAuthenticated = true
    }
   }
})


export const {login} = userslice.actions;

export default userslice.reducer;