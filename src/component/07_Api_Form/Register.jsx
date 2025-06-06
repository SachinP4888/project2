import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate()
  const url = 'http://tutorials.codebetter.in:7084/auth/save'
  const NameRef = useRef()
  const MobileRef = useRef()
  const EmailRef = useRef()
  const PasswordRef = useRef()
  const GenderRef = useRef()



  const handleForm = async (e)=>{
  e.preventDefault()

  const name = NameRef.current.value
  const phone = MobileRef.current.value
  const email = EmailRef.current.value
  const password = PasswordRef.current.value
  const gender = GenderRef.current.value

if(!name || !phone || !email || !password || !gender ){
  alert("please enter all the fields properly")
  return
}

const form = {
  name,
  phone,
  email,
  password,
  gender
}

try{

const response = await axios.post(url , form)
 console.log(response.data)
 alert(response.data.message)
 
 if(response.data.status == true)navigate('/login')
}catch(err){
  console.log(err)
}

  }
  
  return (
    <>
  
  <h1 className='text-primary'>Registration Form</h1>
  <form onSubmit={handleForm} className='form'>
    <label htmlFor="" className='form-label'>Enter your Name</label>
    <input type="text"
     className='form-control'
     ref={NameRef}/>

    <label htmlFor="" className='form-label'>Enter your Number</label>
    <input type="text"
     className='form-control'
     ref={MobileRef}/>

    <label htmlFor="" className='form-label'>Enter your Email</label>
    <input type="email"
     className='form-control'
     ref={EmailRef}/>

    <label htmlFor="" className='form-label'>Enter your Password</label>
    <input type="password"
     className='form-control'
     ref={PasswordRef}/>

    <label htmlFor="" className='form-label'>Enter your gender</label>
      <select name="" id="" className='form-select' ref={GenderRef}>
        <option value="">Select One</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <button type='submit' className='btn btn-primary'>Submit</button>
  </form>
    </>
  )
}

export default Register



