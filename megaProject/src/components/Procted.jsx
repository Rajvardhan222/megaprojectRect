import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loding from './loding/Loding'

function Procted({authincated=true,
children
}) {
    let [loder,setLoder] = useState(true)
    let authStatus = useSelector(storage=> storage.user.isUserLoggedIn)
    let navigate = useNavigate()

    useEffect(()=>{
        if(authStatus === false)navigate("/login")
        else{
    navigate("/")}

    setLoder(false)
    },[authStatus,authincated])
  return (
   loder ? <Loding/> : <>{children}</>
  )
}

export default Procted