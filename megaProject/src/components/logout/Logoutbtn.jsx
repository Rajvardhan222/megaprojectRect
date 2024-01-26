import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlices'
import authservice from '../../appwrite/user'

function Logoutbtn() {
    let dispatch = useDispatch()
   let handleClick = ()=>{
        
        authservice.logOut()
        .then(()=>dispatch(logOut()))
    }
  return (
    <div>
        <button onClick={handleClick} className ='p-5 bg-blue-500 text-white border-solid border-2 border-black hover:bg-blue-700 transition-all duration-500'>
    Logout
        </button>
    </div>
  )
}

export default Logoutbtn