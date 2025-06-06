import React, { useEffect,useState } from "react"
import axios from "axios"

const FakeStore1 = () => {

    const [products, setProducts] = useState([]);

    
     useEffect((() => {
        axios({
            method: "get",
            url:"https://fakestoreapi.com/products"
        }).then((res) => {
             setProducts(res.data)
             console.log(products)
        })
    }),[])

     return (
        <div className="container-fluid d-flex flex-wrap">
            {
                products.map((product,index) => (
                    <div className="card m-2 p-2" style={{width:"400px", height:"600px"}} key={index}>
                        <img src={product.image} alt={product.title} className="card-img-top" style={{height:"",minHeight:"400px"}} />
                        <div className="card-body" style={{minHeight:"100px"}} >
                            <p>{ product.title}</p>
                        </div>
                        <div className="card-footer row row-cols-2">
                            <button className="btn btn-success ">Add to Card</button>
                            <button className="btn btn-danger">Buy Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )



}
   
    

export default FakeStore1