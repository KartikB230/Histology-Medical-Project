import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import './App.css';

import HomePage from "./components/HomePage";
import Thyroid from "./components/Thyroid";
import SquamousEpithelium from "./components/SquamousEpithelium";
import 'bootstrap/dist/css/bootstrap.min.css';
import Medulla from "./components/Medulla";
import Cortex from "./components/Cortex";
import Adrenal from "./components/Adrenal";
import Trial from './components/Trial';
import Pituitary from './components/Pituitary';
import Cartilage from './components/Cartilage';
import Epithelium from "./components/Epithelium";
import SimpleCuboidalEpithelium from "./components/SimpleCuboidalEpithelium";
import SimpleColumnarEpithelium from "./components/SimpleColumnarEpithelium";
import PseudostratifiedEpithelium from "./components/PseudostratifiedEpithelium";
import TransitionalEpithelium from "./components/TransitionalEpithelium";
import StratifiedSquamousKeratinisedEpithelium from "./components/StratifiedSquamousKeratinisedEpithelium";
import StratifiedSquamousNonKeratinisedEpithelium from "./components/StratifiedSquamousNonKeratinisedEpithelium";
import HyalineCartilage from "./components/HyalineCartilage";
import ElasticCartilage from "./components/ElasticCartilage";
import WhiteFibrousCartilage from "./components/WhiteFibrousCartilage";
import ConnectiveTissue from "./components/ConnectiveTissue";
import AdiposeTissue from "./components/AdiposeTissue";
import DenseRegularTissue from "./components/DenseRegularTissue";
import DenseIrregularTissue from "./components/DenseIrregularTissue";
import LooseConnectiveTissue from "./components/LooseConnectiveTissue"
import Bone from "./components/Bone"
import BoneTS from "./components/BoneTS"
import BoneLS from "./components/BoneLS"
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import { Carousel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [loading, setLoading] = useState(false);
  const [loaderSize, setLoaderSize] = useState(30);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const updateLoaderSize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setLoaderSize(15);
      } else if (width < 900) {
        setLoaderSize(20);
      } else {
        setLoaderSize(30);
      }
    };

    updateLoaderSize();
    window.addEventListener("resize", updateLoaderSize);
    return () => window.removeEventListener("resize", updateLoaderSize);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="Loader">
          <div className="title">
            <strong>SymbiAnatomy</strong>
          </div>
          <div className="spinner">
            <PropagateLoader
              color={'rgb(255, 210, 210)'}
              loading={loading}
              size={loaderSize}
            />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <div>
            <Routes>
              <Route path='/' element={<LoginPage/>} />
              <Route path='/home' element={<HomePage/>} />
              <Route path='/SquamousEpithelium' element={<SquamousEpithelium/>} />
              <Route path='/Thyroid' element={<Thyroid/>} />
              <Route path='/Medulla' element={<Medulla/>} />
              <Route path='/Adrenal' element={<Adrenal/>} />
              <Route path='/Cortex' element={<Cortex/>} />
              <Route path="/Trial" element={<Trial/>} />
              <Route path="/Pituitary" element={<Pituitary/>} />
              <Route path="/Cartilage" element={<Cartilage/>} />
              <Route path="/Epithelium" element={<Epithelium/>} />
              <Route path="/SimpleCuboidalEpithelium" element={<SimpleCuboidalEpithelium/>}/>
              <Route path="/SimpleColumnarEpithelium" element={<SimpleColumnarEpithelium/>}/>
              <Route path="/PseudostratifiedEpithelium" element={<PseudostratifiedEpithelium/>}/>
              <Route path="/TransitionalEpithelium" element={<TransitionalEpithelium/>}/>
              <Route path="/StratifiedSquamousKeratinisedEpithelium" element={<StratifiedSquamousKeratinisedEpithelium/>}/>
              <Route path="/StratifiedSquamousNonKeratinisedEpithelium" element={<StratifiedSquamousNonKeratinisedEpithelium/>}/>
              <Route path = "/HyalineCartilage" element={<HyalineCartilage/>}/>
              <Route path = "/ElasticCartilage" element={<ElasticCartilage/>}/>
              <Route path = "/WhiteFibrousCartilage" element ={<WhiteFibrousCartilage/>}/>
              <Route path = "/ConnectiveTissue" element ={<ConnectiveTissue/>}/>
              <Route path = "/AdiposeTissue" element ={<AdiposeTissue/>}/>
              <Route path = "/DenseRegularTissue" element ={<DenseRegularTissue/>}/>
              <Route path = "/DenseIrregularTissue" element ={<DenseIrregularTissue/>}/>
              <Route path = "/LooseConnectiveTissue" element ={<LooseConnectiveTissue/>}/>
              <Route path = "/Bone" element ={<Bone/>}/>
              <Route path = "/BoneTS" element ={<BoneTS/>}/>
              <Route path = "/BoneLS" element ={<BoneLS/>}/>
              <Route path = "/Carousel" element ={<Carousel/>}/>
              
              <Route path = "/Footer" element ={<Footer/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
