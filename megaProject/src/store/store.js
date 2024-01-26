import {configureStore} from "@reduxjs/toolkit"
import  authReducer  from "./authSlices"
 

let store = configureStore({
    reducer:authReducer
})
export default store