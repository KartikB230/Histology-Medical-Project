import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage";
import Thyroid from "./components/Thyroid";
import SquamousEpithelium from "./components/SquamousEpithelium";


function App() {
  return (
   
    <BrowserRouter>
        <div>
          <Routes>
          
            <Route path='/' element={<HomePage/>} />
            <Route path='/SquamousEpithelium' element={<SquamousEpithelium/>} />
            <Route path='/Thyroid' element={<Thyroid/>} />
            
          </Routes>
         </div>
         
    </BrowserRouter>
    
  );
}

export default App;



