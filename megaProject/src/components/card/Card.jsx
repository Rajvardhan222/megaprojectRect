import React from 'react'
import authservice from '../../appwrite/user'
import config from "../../appwrite/config"
import {Link} from "react-router-dom"

function Card({
    $id,
    title,
    featuredImage

}) {
  return (
   <div className='w-full bg-gray-100 rounded-xl p-4'>
    <div className='w-full justify-center mb-4'>
        <Link to={`/post/${$id}`}>
            <img className='rounded-md' src={config.getFilePreview(featuredImage)}></img>
        </Link>
    </div>
    <div>
        <h4
         className='text-xl font-bold'
        >{title}</h4>
    </div>
   </div>
  )
}

export default Card