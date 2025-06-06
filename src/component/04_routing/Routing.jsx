import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './page/About'
import Dashboard from './page/Dashboard'
import Home from './page/Home'
import NavBar from './NavBar'
import First from './page/first'
import Second from './page/second'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path='/dashboard/first' element={<First/>}  />
            <Route path='/dashboard/second' element={<Second/>}  />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
