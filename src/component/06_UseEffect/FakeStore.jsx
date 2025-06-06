import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
const FakeStore = () => {

    const url = "https://fakestoreapi.com/products"
    const[data, setData] = useState([])

    useEffect((() => {
        const getData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data)
                console.log(response.data)
                
            } catch (err) {
                console.log(err)
           }
        }
        getData()
   }),[])

    return (
         <div className="container mt-5">
      <h2 className="text-center mb-4">Fake Store Products</h2>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card shadow-lg h-100 d-flex flex-column">
              <img src={item.image} className="card-img-top p-3" alt={item.title} style={{height:"300px"}} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)}...`
                    : item.description}
                </p>
                <p><strong>Price:</strong> ${item.price}</p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-outline-secondary ms-2">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
    
}
export default FakeStore
