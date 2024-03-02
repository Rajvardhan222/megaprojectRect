import { createSlice } from "@reduxjs/toolkit"


let initialState = {
   user:{
    isUserLoggedIn:false,
    userDetail:null,
    posts:[]
   }
}

let authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user.isUserLoggedIn = true;
            state.user.userDetail = action.payload.userDetail;
            console.log("payload ",action.payload.userDetail);
        },
        logOut : (state)=>{
            state.user.isUserLoggedIn = false
            state.user.userDetail = null

        },
        posts : (state,action)=> {
            state.user.posts = action.payload
        }
    }
})
export let {login,logOut,posts} = authSlice.actions
export default authSlice.reducer