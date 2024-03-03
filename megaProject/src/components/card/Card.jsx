import React from 'react'
import authservice from '../../appwrite/user'
import config from "../../appwrite/config"
import {Link} from "react-router-dom"

function Card({
    $id,
    title,
    featuredImage,
    time

}) {
  return (
   <div className='w-full bg-gray-100 rounded-xl p-4'>
    <div className='w-full justify-center mb-4'>
        <Link to={`/post/${$id}`}>
            <div className='w-full justify-center mb-4'>
            <img className = 'rounded-md' src={config.getFilePreview(featuredImage)}></img></div>
        </Link>
    </div>
    <div>
       {/* TODO From where we will get title */}
        <h4
         className='text-xl font-bold'
        >{title}</h4>

        <div>
            <h3>
                {time}
            </h3>
        </div>
    </div>
   </div>
  )
}

export default Card