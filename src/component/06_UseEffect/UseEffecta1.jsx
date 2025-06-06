import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffecta1 = () => {

    const url = "https://jsonplaceholder.typicode.com/todos"
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
          <table className='table'>
              <thead className=''>
                  <tr className='thead'>
                      <th>S No</th>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Yes/No</th>
                  </tr>
              </thead>
              <tbody>
                  {state.map((item, index) => {
                    return (
                         <tr key={index}>
                            <td>{item.id }</td>
                            <td>{item.userId}</td>
                            <td>{item.title }</td>
                            <td>{item.completed ? "Yes" : "No"}</td>
                            <td><button className='btn btn-warning'  onClick={()=>remove(item.id) }>Delete</button></td>
                        </tr>
                      )
                    })}
              </tbody>
      </table>
    </div>
  )
}

export default UseEffecta1
