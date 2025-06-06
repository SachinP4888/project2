import React, { useEffect, useState } from "react";
import axios from "axios";

const NasaApi = () => {
  const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY";

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.photos);
        console.log(response.data.photos);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    getData();
  }, []); 

  return (
     <table className='table'>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Rover Name</th>
                      <th>Date</th>
                      <th>Image</th>
                      
                  </tr>
              </thead>
              <tbody>
                   {data.map((item, index) => {
                    return (
                         <tr key={index}>
                            <td>{item.id }</td>
                            <td>{item.camera.full_name }</td>
                            <td>{item.date }</td>
                            <td><img src={item.img_src} alt={item.img_src} width={200} /></td>
                            
                        </tr>
                      )
                    })}
                </tbody>
            </table>
  );
};

export default NasaApi;
