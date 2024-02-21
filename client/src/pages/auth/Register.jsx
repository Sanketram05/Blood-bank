import React from 'react'
import Form from '../../components/shared/form/Form'

function Register() {
  return (
    <>
        <div className="flex">
          <div className="md:w-8/12">
            <img src="1.png" alt="" className='h-96'/>
          </div>
          <div className="md:w-4/12 flex justify-center  items-center">
            <Form formTitle={'Register'} submitBtn={'Register'} FormType={'Register'}/>
          </div>
        </div>
    </>
  )
}

export default Register