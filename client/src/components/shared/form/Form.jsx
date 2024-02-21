import React,{useState} from 'react'
import InputType from './InputType'
import {Link} from 'react-router-dom'
import { handleLogin, handleRegister } from '../../../services/authService'

function Form({submitBtn,formTitle,FormType}) {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [role,setRole] = useState('donor')
  const [name,setName] = useState('')
  const [organisationName,setOrganisationName] = useState('')
  const [hospitalName,setHospitalName] = useState('')
  const [website,setWebsite] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  return (
    <div>
      <form onSubmit={(e) => {
        if(FormType === 'Login') return handleLogin(e,email,password,role);
        else if (FormType === 'Register') return handleRegister(e,name,role,email,password,organisationName,hospitalName,website,address,phone);
      }}>
        <h1 className='text-center'>{formTitle}</h1>
        <hr/>
        <div className="flex items-center">
          <input
          type="radio" 
          name="role" 
          id='donorRadio'
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          value={'donor'}
          onChange={(e) => setRole(e.target.value)}
          defaultChecked
          />
          <label htmlFor="donorRadio" className="ml-2 text-gray-700">Donor</label>
        </div>
        <div className="flex items-center">
          <input
          type="radio" 
          name="role" 
          id='adminRadio'
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          value={'admin'}
          onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="adminRadio" className="ml-2 text-gray-700">Admin</label>
        </div>
        <div className="flex items-center">
          <input
          type="radio" 
          name="role" 
          id='hospitalRadio'
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          value={'hospital'}
          onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="hospitalRadio" className="ml-2 text-gray-700">Hospital</label>
        </div>
        <div className="flex items-center">
          <input
          type="radio" 
          name="role" 
          id='organisationRadio'
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
          value={'organisation'}
          onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="organisationRadio" className="ml-2 text-gray-700">Organisation</label>
        </div>



        {/* Switch statement */}
        {(() => {
          switch(true){
            case FormType === 'Login':{
              return (
              <>
                <InputType 
                  labeltext={'email'} 
                  labelFor={'ForEmail'} 
                  inputType={'email'} 
                  name={'email'}
                  value={email} 
                  placeName={'Email'}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType 
                  labeltext={'password'} 
                  labelFor={'ForPassword'} 
                  inputType={'password'} 
                  name={'password'}
                  value={password} 
                  placeName={'Password'}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
              );
            }
            case FormType === 'Register':{
              return(
                <>
                  {(role === 'admin' || role === 'donor') && (
                    <InputType 
                      labeltext={'name'} 
                      labelFor={'ForName'} 
                      inputType={'text'} 
                      name={'name'}
                      value={name} 
                      placeName={'Name'}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === 'organisation'&& (

                  <InputType 
                    labeltext={'organisationName'} 
                    labelFor={'ForOrganisationName'} 
                    inputType={'text'} 
                    name={'organisationName'}
                    value={organisationName} 
                    placeName={'Organisation Name'}
                    onChange={(e) => setOrganisationName(e.target.value)}
                  />
                  )}

                    {role === 'hospital' && (

                  <InputType 
                    labeltext={'hospitalName'} 
                    labelFor={'ForHospitalName'} 
                    inputType={'text'} 
                    name={'hospitalName'}
                    value={hospitalName} 
                    placeName={'Hospital Name'}
                    onChange={(e) => setHospitalName(e.target.value)}
                  />
                    )}
                  <InputType 
                    labeltext={'email'} 
                    labelFor={'ForEmail'} 
                    inputType={'email'} 
                    name={'email'}
                    value={email} 
                    placeName={'Email'}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType 
                    labeltext={'password'} 
                    labelFor={'ForPassword'} 
                    inputType={'password'} 
                    name={'password'}
                    value={password} 
                    placeName={'Password'}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType 
                    labeltext={'website'} 
                    labelFor={'ForWebsite'} 
                    inputType={'text'} 
                    name={'website'}
                    value={website} 
                    placeName={'Website'}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType 
                    labeltext={'address'} 
                    labelFor={'ForAddress'} 
                    inputType={'text'} 
                    name={'address'}
                    value={address} 
                    placeName={'Address'}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType 
                    labeltext={'phone'} 
                    labelFor={'ForPhone'} 
                    inputType={'text'} 
                    name={'phone'}
                    value={phone} 
                    placeName={'Phone'}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              )
            }
          }
        })()}

        

        <div>
          {FormType === 'Login' ? (
            <p>
              <Link to="/register">Not registered yet ? Register Here !</Link>
            </p>
          ):(
            <p>
              <Link to="/login">Already a User Please Login !</Link>
            </p>
          )}
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {submitBtn}
            </button> 
        </div>
      </form>
    </div>
  )
}

export default Form