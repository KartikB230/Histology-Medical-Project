import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import './App.css';

import HomePage from "./components/HomePage";
import Thyroid from "./components/Thyroid";
import SquamousEpithelium from "./components/SquamousEpithelium";
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
import LooseConnectiveTissue from "./components/LooseConnectiveTissue";
import Bone from "./components/Bone";
import BoneTS from "./components/BoneTS";
import BoneLS from "./components/BoneLS";
import Osteon from "./components/Osteon";
import BloodVessel from "./components/BloodVessel";
import Vein from "./components/Vein";
import Arteriole from "./components/Arteriole";
import Sinusoid from "./components/Sinusoid";
import ElasticArtery from "./components/ElasticArtery";
import MuscularArtery from "./components/MuscularArtery";
import Endocrine from "./components/Endocrine";

import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderSize, setLoaderSize] = useState(30);

  useEffect(() => {
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

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "/home"; // Redirect after login
  };

  return (
    <div>
      {loading ? (
        <div className="Loader">
          <div className="title">
            <strong>SymbiAnatomy</strong>
          </div>
          <div className="spinner">
            <PropagateLoader color={'rgb(255, 210, 210)'} size={loaderSize} />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
            <Route path='/home' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path='/SquamousEpithelium' element={<ProtectedRoute><SquamousEpithelium /></ProtectedRoute>} />
            <Route path='/Thyroid' element={<ProtectedRoute><Thyroid /></ProtectedRoute>} />
            <Route path='/Medulla' element={<ProtectedRoute><Medulla /></ProtectedRoute>} />
            <Route path='/Adrenal' element={<ProtectedRoute><Adrenal /></ProtectedRoute>} />
            <Route path='/Cortex' element={<ProtectedRoute><Cortex /></ProtectedRoute>} />
            <Route path="/Trial" element={<ProtectedRoute><Trial /></ProtectedRoute>} />
            <Route path="/Pituitary" element={<ProtectedRoute><Pituitary /></ProtectedRoute>} />
            <Route path="/Cartilage" element={<ProtectedRoute><Cartilage /></ProtectedRoute>} />
            <Route path="/Epithelium" element={<ProtectedRoute><Epithelium /></ProtectedRoute>} />
            <Route path="/SimpleCuboidalEpithelium" element={<ProtectedRoute><SimpleCuboidalEpithelium /></ProtectedRoute>} />
            <Route path="/SimpleColumnarEpithelium" element={<ProtectedRoute><SimpleColumnarEpithelium /></ProtectedRoute>} />
            <Route path="/PseudostratifiedEpithelium" element={<ProtectedRoute><PseudostratifiedEpithelium /></ProtectedRoute>} />
            <Route path="/TransitionalEpithelium" element={<ProtectedRoute><TransitionalEpithelium /></ProtectedRoute>} />
            <Route path="/StratifiedSquamousKeratinisedEpithelium" element={<ProtectedRoute><StratifiedSquamousKeratinisedEpithelium /></ProtectedRoute>} />
            <Route path="/StratifiedSquamousNonKeratinisedEpithelium" element={<ProtectedRoute><StratifiedSquamousNonKeratinisedEpithelium /></ProtectedRoute>} />
            <Route path="/HyalineCartilage" element={<ProtectedRoute><HyalineCartilage /></ProtectedRoute>} />
            <Route path="/ElasticCartilage" element={<ProtectedRoute><ElasticCartilage /></ProtectedRoute>} />
            <Route path="/WhiteFibrousCartilage" element={<ProtectedRoute><WhiteFibrousCartilage /></ProtectedRoute>} />
            <Route path="/ConnectiveTissue" element={<ProtectedRoute><ConnectiveTissue /></ProtectedRoute>} />
            <Route path="/AdiposeTissue" element={<ProtectedRoute><AdiposeTissue /></ProtectedRoute>} />
            <Route path="/DenseRegularTissue" element={<ProtectedRoute><DenseRegularTissue /></ProtectedRoute>} />
            <Route path="/DenseIrregularTissue" element={<ProtectedRoute><DenseIrregularTissue /></ProtectedRoute>} />
            <Route path="/LooseConnectiveTissue" element={<ProtectedRoute><LooseConnectiveTissue /></ProtectedRoute>} />
            <Route path="/Bone" element={<ProtectedRoute><Bone /></ProtectedRoute>} />
            <Route path="/BoneTS" element={<ProtectedRoute><BoneTS /></ProtectedRoute>} />
            <Route path="/BoneLS" element={<ProtectedRoute><BoneLS /></ProtectedRoute>} />
            <Route path="/Osteon" element={<ProtectedRoute><Osteon /></ProtectedRoute>} />
            <Route path="/BloodVessel" element={<ProtectedRoute><BloodVessel /></ProtectedRoute>} />
            <Route path="/Vein" element={<ProtectedRoute><Vein /></ProtectedRoute>} />
            <Route path="/Arteriole" element={<ProtectedRoute><Arteriole /></ProtectedRoute>} />
            <Route path="/Sinusoid" element={<ProtectedRoute><Sinusoid /></ProtectedRoute>} />
            <Route path="/ElasticArtery" element={<ProtectedRoute><ElasticArtery /></ProtectedRoute>} />
            <Route path="/MuscularArtery" element={<ProtectedRoute><MuscularArtery /></ProtectedRoute>} />
            <Route path="/Endocrine" element={<ProtectedRoute><Endocrine /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
