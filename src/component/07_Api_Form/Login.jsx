import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

     const navigate = useNavigate()
  const url = 'http://tutorials.codebetter.in:7084/auth/login'

  const EmailRef = useRef()
  const PasswordRef = useRef()
 


  const handleForm = async (e)=>{
  e.preventDefault()

  const email = EmailRef.current.value
  const password = PasswordRef.current.value
 
if(!email || !password ){
  alert("please enter all the fields properly")
  return
}

const form = { email, password }

try{

    const response = await axios.post(url, form)
    const token = response.data.data.token
    localStorage.setItem("authToken", token)
    console.log(token)
   navigate("/")
    console.log(response.data)
    alert(response.data.message)
    
 
 if(response.data.status == true)navigate('/home')
}catch(err){
  console.log(err)
}

  }

  return (
    <div>
      
  <h1 className='text-primary'>Login Form</h1>
  <form onSubmit={handleForm} className='form'>

    <label htmlFor="" className='form-label'>Enter your Email</label>
    <input type="email"
     className='form-control'
     ref={EmailRef}/>

    <label htmlFor="" className='form-label'>Enter your Password</label>
    <input type="password"
     className='form-control'
     ref={PasswordRef}/>

      <button type='submit' className='btn btn-primary'>Submit</button>
  </form>

    </div>
  )
}

export default Login
