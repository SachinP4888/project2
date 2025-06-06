import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
          This is Dashboard Page
          <hr /><hr />

          <nav>
              <ul>
                 <li><Link to="/dashboard/first">First Page</Link></li>
                <li> <Link to="/dashboard/second">First Page</Link></li>
             </ul>
          </nav>
          <hr /><hr />
          <Outlet />
          
    </div>
  )
}

export default Dashboard
