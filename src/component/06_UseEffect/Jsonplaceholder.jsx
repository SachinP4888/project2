import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Jsonplaceholder = () => {

     const url = "https://jsonplaceholder.typicode.com/posts"
    const [state, setState] = useState([])

    useEffect((() => {
        const getData = async () => {
            try {
                const response = await axios.get(url)
                setState(response.data)
                console.log(response.data)
            } catch (err) {
                console.log(err)
           }
        }
        getData()
   }),[])

    const remove = (id) => {
        // alert(`Are you sure to delete ${id}`)
        const remainItem = state.filter((item) => item.id !== id)
        setState(remainItem)
    }

  return (
    <div>
       <div>
          <table className='table'>
              <thead className=''>
                  <tr className=''>
                      <th>User ID</th>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Body</th>
                  </tr>
              </thead>
              <tbody>
                  {state.map((item, index) => {
                    return (
                         <tr key={index+1}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title }</td>
                            <td>{item.body}</td>
                            <td><button className='btn btn-warning'  onClick={()=>remove(item.id) }>Delete</button></td>
                        </tr>
                      )
                    })}
              </tbody>
      </table>
    </div>
    </div>
  )
}

export default Jsonplaceholder
