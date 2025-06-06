import React from 'react'
import { dummyData } from '../../DummyData'

const DealWithObject = () => {
    const data = dummyData

  return (
    <div>
          <table className='table'>
              <thead>
                  <tr>
                      <th>S.NO</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Team</th>
                      <th>Role</th>
                      <th>Image</th>
                      <th>Match Played</th>
                      <th>Is Caption</th>
                  </tr>
              </thead>
              <tbody>
                   {data.map((item, index) => {
                    return (
                         <tr key={index}>
                            <td>{item.id }</td>
                            <td>{item.name }</td>
                            <td>{item.age }</td>
                            <td>{item.team }</td>
                            <td>{item.role }</td>
                            <td><img src={item.image} alt={item.name} /></td>
                            <td>{item.match_played }</td>
                            <td>{item.IsCaptain? "Yes" : "No"}</td>
                        </tr>
                      )
                    })}
                </tbody>
            </table>
      
    </div>
  )
}

export default DealWithObject
