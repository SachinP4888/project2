import React from 'react'
import Register from './Register'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'
import Home from './Home'

const Api_Form = () => {
  return (
    <div>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/registration' element={<Register/>} />
                  <Route path='/login' element={<Login/>} />
              </Routes>
          </BrowserRouter>
          
          
    </div>
  )
}

export default Api_Form
