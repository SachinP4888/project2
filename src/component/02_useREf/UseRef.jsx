import React from 'react'
import { useRef } from 'react'

const UseRef = () => {

  const NameRef = useRef()
  const MobileRef = useRef()
  const EmailRef = useRef()
  const PasswordRef = useRef()

  const AnswerNameRef = useRef()
  const AnswerMobileRef = useRef()
  const AnswerEmailRef = useRef()
  const AnswerPasswordRef = useRef()

  const handleForm = (e) => {
    e.preventDefault()
    
    const Name = NameRef.current.value.trim()
    const Mobile = MobileRef.current.value
    const Email = EmailRef.current.value
    const Password = PasswordRef.current.value

    if (!Name || !Mobile || !Email || !Password) {
      alert("All fields are required")
      
      AnswerNameRef.current.innerHTML = ""
      AnswerMobileRef.current.innerHTML = ""
      AnswerEmailRef.current.innerHTML = ""
      AnswerPasswordRef.current.innerHTML = ""

    } else {
      AnswerNameRef.current.innerHTML = Name
      AnswerMobileRef.current.innerHTML = Mobile
      AnswerEmailRef.current.innerHTML = Email
      AnswerPasswordRef.current.innerHTML = Password


      NameRef.current.value = ""
      EmailRef.current.value = ""
      MobileRef.current.value = ""
      PasswordRef.current.value = ""
}



}
  
  return (

    <div>
      <h1 className="text-center"> form Validation</h1>

      <form action="" onSubmit={handleForm} className="form form-control-sm ">
        <label htmlFor="" className='form-label'>Enter Your Name</label>
        <input type="text" placeholder='Enter your Name' className='form-control' ref={NameRef} />
        <br /><br />

         <label htmlFor="" className='form-label'>Enter Your Mobile No</label>
        <input type="text" placeholder='Enter your number' className='form-control' ref={MobileRef} />
        <br /><br />

         <label htmlFor="" className='form-label'>Enter Your Email</label>
        <input type="email" placeholder='Enter your Name' className='form-control' ref={EmailRef} />
        <br /><br />

         <label htmlFor="" className='form-label'>Enter your password</label>
        <input type="password" placeholder='Enter your Name' className='form-control' ref={PasswordRef} />
        <br /><br />
        <button type='submit' className='btn text-danger bg-primary'>Submit</button>
      </form>
      <div className="">
        <p ref={AnswerNameRef}></p>
        <p ref={AnswerMobileRef}></p>
        <p ref={AnswerEmailRef}></p>
        <p ref={AnswerPasswordRef}></p>
      </div>
    </div>
  )
}

export default UseRef
