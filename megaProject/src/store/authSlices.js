import { createSlice } from "@reduxjs/toolkit"


let initialState = {
   user:{
    isUserLoggedIn:false,
    userDetail:null
   }
}

let authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user.isUserLoggedIn = true;
            state.user.userDetail = action.payload
        },
        logOut : (state)=>{
            state.user.isUserLoggedIn = false
            state.user.userDetail = null

        }
    }
})
export let {login,logOut} = authSlice.actions
export default authSlice.reducer