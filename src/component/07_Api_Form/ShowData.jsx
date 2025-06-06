import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowData = () => {

    const url = "http://tutorials.codebetter.in:7084/api/user/list"
    const [userData, setUserdata] = useState([])

    const token  = localStorage.getItem("authToken")
    // console.log(token)
    

    useEffect(() => {
        const getData = async() => {
            try {
                const response = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
                setUserdata(response.data.data)
                console.log(userData)
            
              
            } catch (err) {
               console.log(err)
            }
        }
        getData()
       
    },[])

  return (
    <div>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Active or Not</th>
                      <th>Image</th>
                  </tr>
              </thead>
              <tbody>
                  {userData.map((item, index) => {
                    return (
                         <tr key={index}>
                            <td>{item.id }</td>
                            <td>{item.name}</td>
                            <td>{item.phone }</td>
                            <td>{item.isactive ? "Yes" : "No"}</td>
                            <td><img src={item.image} alt={item.img_src} width={200} /></td>
                           
                            
                        </tr>
                      )
                    })}
              </tbody>
      </table>
    </div>
  )
}

export default ShowData
