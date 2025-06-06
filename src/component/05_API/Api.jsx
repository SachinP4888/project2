import React from 'react'
import axios from 'axios'

const Api = () => {
  const url = "https://jsonplaceholder.typicode.com/todos"

    const response = axios.get(url)
    console.log(response.data)
    return (
    <div>
      
    </div>
  )
}

export default Api
