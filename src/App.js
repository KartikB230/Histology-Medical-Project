import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage";
import Thyroid from "./components/Thyroid";
import SquamousEpithelium from "./components/SquamousEpithelium";
import 'bootstrap/dist/css/bootstrap.min.css';
import Medulla from "./components/Medulla";
import Cortex from "./components/Cortex";
import Adrenal from "./components/Adrenal";


function App() {

  
  return (
   
    <BrowserRouter>
        <div>
          <Routes>
          
            <Route path='/' element={<HomePage/>} />
            <Route path='/SquamousEpithelium' element={<SquamousEpithelium/>} />
            <Route path='/Thyroid' element={<Thyroid/>} />
            <Route path='/Medulla' element={<Medulla/>} />
            <Route path='/Adrenal' element={<Adrenal/>} />
            <Route path='/Cortex' element={<Cortex/>} />
            
          </Routes>
         </div>
         
    </BrowserRouter>
    
  );
}

export default App;



