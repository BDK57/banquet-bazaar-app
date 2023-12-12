import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";


const inititialstate = {
    userdata:"",
    isAuthenticated:false,
    vendordata:"",
    favoritesHall:""
}
const userslice = createSlice({
    name:'user',
   initialState:inititialstate,
   reducers:{
    login(state,action){
        console.log("aactiodddddd",action.payload)
        state.userdata = action.payload,
        state.isAuthenticated = true
    },
    logoutaction(state,action){
        state.userdata = null
        state.isAuthenticated = false
    },
    vendordata(state,action){
       state.vendordata = action.payload
    },
    favoritesHall(state,action){
        console.log(action.payload);
        state.favoritesHall=action.payload;
    }
   }
})


export const {login,logoutaction,vendordata,favoritesHall} = userslice.actions;

export default userslice.reducer;