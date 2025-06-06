import axios from 'axios'
import React from 'react'

const Api1 = () => {

    const url = "https://jsonplaceholder.typicode.com/todos"
    const getData = async () => {
        try {
            const response = await axios.get(url)
            console.log(response)
            console.log(response.data[0])
            console.log(response.data[0].title)
        }catch(err) {
            console.log(err)
        }
    }
    getData()

  return (
    <div>
      
    </div>
  )
}

export default Api1
