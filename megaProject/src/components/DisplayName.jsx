import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {InpurForm as Input,Button, authservice} from './index'
import appwriteService from './../appwrite/config'
import { useNavigate } from './index'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function DisplayName() {
  let [error,setError] = useState()
  let [userName,SetUserName] = useState(false)
  let navigate = useNavigate()
  if (!userName) {
    navigate('/display')
  }
   
    let store = useSelector(store => store.user.userDetail)
    let {register , handleSubmit ,} = useForm()
    let  submit = async (data)=>{
      setError("")
      let query = [Query.equal("displayName", [data.displayName])]
     
     let awailable  = await appwriteService.getDisplayNames(query)
     console.log(awailable.documents[0]);


     if(awailable.documents.length > 0 && awailable.documents[0].displayName == data.displayName){
       setError("This name is already taken")
     }


     if(  awailable.documents.length ==0||(awailable.documents[0].displayName !== data.displayName) || awailable.documents[0] === undefined){
      console.log(data);
       let name =  await appwriteService.createDisplayName(data, store.$id)
       if(name) {
        SetUserName(true)
        
       }
      
       navigate('/')}
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
        <Input
        label="Display Name"

        placeholder="Enter your display name"
        {...register("displayName", {
            required: true,})}
        />
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      <Button
      type="submit"
      children={'Check'}
      {...register("submit")}
      />
      
        </form>
    </div>
  )
}

export default DisplayName