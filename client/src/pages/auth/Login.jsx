import React from 'react'
import InputType from '../../components/shared/form/InputType'
import Form from '../../components/shared/form/Form'

function Login() {
  return (
    <div className='m-0 p-0'>
        <div className="flex">
            <div className="md:w-8/12">
                <img src="1.png" alt="" className='h-96'/>
            </div>
            <div className="md:w-4/12 flex justify-center  items-center ">
                <Form formTitle={'Login Page'} submitBtn={'Login'} FormType={'Login'}/>        
            </div>
        </div>
    </div>
  )
}

export default Login