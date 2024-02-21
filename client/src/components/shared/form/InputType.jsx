import React from 'react'

function InputType({value,onChange,name,inputType,labeltext,labelFor,placeName}) {
  return (
    <div>
        <div>
            <label htmlFor={labelFor} className="sr-only">{labeltext}</label>
            <input  name={name} type={inputType} autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={placeName} value={value} onChange={onChange}/>
        </div>
    </div>
  )
}

export default InputType