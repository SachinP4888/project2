
import React from 'react'
import FirstPage from './FirstPage'
import  '../node_modules/bootstrap/dist/css/bootstrap.css';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Api from './component/05_API/Api';
import Api1 from './component/06_UseEffect/Api1';
import UseEffecta1 from './component/06_UseEffect/UseEffecta1';
import NasaApi from './component/06_UseEffect/NasaApi';
import DealWithObject from './component/03_deal-with-object/DealWithObject';
import Routing from './component/04_routing/Routing';
import FakeStore from './component/06_UseEffect/FakeStore';
import Jsonplaceholder from './component/06_UseEffect/Jsonplaceholder';
import FakeStore1 from './component/06_UseEffect/FakeStore1';
import Api_Form from './component/07_Api_Form/Api_Form';



const App = () => {
  return (
    <div>
      {/* <h1>ReactJS</h1>  */}
      {/* <UseState1 />  */}
      {/* <UseRef/> */}
      {/* <DealWithObject/> */}
      {/* <Routing/> */}
      {/* <Api/> */}
      {/* <Api1/> */}
      {/* <UseEffecta1/> */}
      {/* <NasaApi/> */}
      {/* <FakeStore /> */}
      {/* <FakeStore1/> */}
      {/* <Jsonplaceholder/> */}
      <Api_Form/>
     
    </div>
  )
}
export default App
