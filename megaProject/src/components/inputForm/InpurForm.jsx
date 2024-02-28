import React, { useId } from 'react'
import {forwardRef } from 'react'

function InpurForm({
    label,
    type="text",
    className='',
    ...props

},ref) {
      const id = useId()
  return (
    <>
       {
        label &&  <label htmlFor={id}  className='inline-block mb-1 pl-1' >{label}</label>
       }
        <input id={id} ref={ref} type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} {...props}/>
    </>
  )
}

export default forwardRef(InpurForm)