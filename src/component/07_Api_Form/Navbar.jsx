import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate()
    const isLoing = localStorage.getItem("authToken")

    const logout = () => {
        localStorage.removeItem("authToken")
        alert("Token  removed and logout")
        navigate("./login")
    }
    const deleteAccount = () => {
        
    }
  return (
    <div>
          <ul className="navbar">
              <li className="list-item"> <Link to="/">Home</Link> </li>
              <li className="list-item"> <Link to="/registration">Registration</Link> </li>
              <li className="list-item"> {isLoing?(<div>
                  <button onClick={logout}>LogOut</button>
                  {/* <button onClick={}>Delete Account</button> */}
              </div>):<Link to="/login">Login</Link>} </li>
      </ul>
    </div>
  )
}

export default Navbar
