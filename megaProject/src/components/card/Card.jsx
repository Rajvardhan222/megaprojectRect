import React from 'react'
import authservice from '../../appwrite/user'
import config from "../../appwrite/config"
import {Link} from "react-router-dom"

function Card({
    $id,
    title,
    featuredImage,
    time,
    date

}) {

    let docUploadDate = date; // Example timestamp

let now = Date.now(); // Current timestamp in milliseconds
let elapsedTime = now - docUploadDate; // Time elapsed since upload in milliseconds
function getMonthName(monthIndex) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}
// Convert milliseconds to hours
let hoursElapsed = elapsedTime / (1000 * 60 * 60);
let formattedDate
if (hoursElapsed > 24) {
    let uploadDate = new Date(docUploadDate);
     formattedDate = `${uploadDate.getDate()} - ${getMonthName(uploadDate.getMonth())}`;
    console.log(`Document uploaded on ${formattedDate}`);
}


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
              { hoursElapsed <= 24 && time}
              {hoursElapsed > 24 && formattedDate}
            </h3>
        </div>
    </div>
   </div>
  )
}

export default Card