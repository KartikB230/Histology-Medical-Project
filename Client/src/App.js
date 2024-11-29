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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for authentication state
    const storedAuth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuth === "true");

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
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   localStorage.removeItem("isAuthenticated");
  // };

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
            <Route path='/home' element={<ProtectedRoute isAuthenticated={isAuthenticated}><HomePage /></ProtectedRoute>} />
            <Route path='/SquamousEpithelium' element={<ProtectedRoute isAuthenticated={isAuthenticated}><SquamousEpithelium /></ProtectedRoute>} />
            <Route path='/Thyroid' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Thyroid /></ProtectedRoute>} />
            <Route path='/Medulla' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Medulla /></ProtectedRoute>} />
            <Route path='/Adrenal' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Adrenal /></ProtectedRoute>} />
            <Route path='/Cortex' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Cortex /></ProtectedRoute>} />
            <Route path="/Trial" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Trial /></ProtectedRoute>} />
            <Route path="/Pituitary" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Pituitary /></ProtectedRoute>} />
            <Route path="/Cartilage" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Cartilage /></ProtectedRoute>} />
            <Route path="/Epithelium" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Epithelium /></ProtectedRoute>} />
            <Route path="/SimpleCuboidalEpithelium" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SimpleCuboidalEpithelium /></ProtectedRoute>} />
            <Route path="/SimpleColumnarEpithelium" element={<ProtectedRoute isAuthenticated={isAuthenticated}><SimpleColumnarEpithelium /></ProtectedRoute>} />
            <Route path="/PseudostratifiedEpithelium" element={<ProtectedRoute isAuthenticated={isAuthenticated}><PseudostratifiedEpithelium /></ProtectedRoute>} />
            <Route path="/TransitionalEpithelium" element={<ProtectedRoute isAuthenticated={isAuthenticated}><TransitionalEpithelium /></ProtectedRoute>} />
            <Route path="/StratifiedSquamousKeratinisedEpithelium" element={<ProtectedRoute isAuthenticated={isAuthenticated}><StratifiedSquamousKeratinisedEpithelium /></ProtectedRoute>} />
            <Route path="/StratifiedSquamousNonKeratinisedEpithelium" element={<ProtectedRoute isAuthenticated={isAuthenticated}><StratifiedSquamousNonKeratinisedEpithelium /></ProtectedRoute>} />
            <Route path="/HyalineCartilage" element={<ProtectedRoute isAuthenticated={isAuthenticated}><HyalineCartilage /></ProtectedRoute>} />
            <Route path="/ElasticCartilage" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ElasticCartilage /></ProtectedRoute>} />
            <Route path="/WhiteFibrousCartilage" element={<ProtectedRoute isAuthenticated={isAuthenticated}><WhiteFibrousCartilage /></ProtectedRoute>} />
            <Route path="/ConnectiveTissue" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ConnectiveTissue /></ProtectedRoute>} />
            <Route path="/AdiposeTissue" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AdiposeTissue /></ProtectedRoute>} />
            <Route path="/DenseRegularTissue" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DenseRegularTissue /></ProtectedRoute>} />
            <Route path="/DenseIrregularTissue" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DenseIrregularTissue /></ProtectedRoute>} />
            <Route path="/LooseConnectiveTissue" element={<ProtectedRoute isAuthenticated={isAuthenticated}><LooseConnectiveTissue /></ProtectedRoute>} />
            <Route path="/Bone" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Bone /></ProtectedRoute>} />
            <Route path="/BoneTS" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BoneTS /></ProtectedRoute>} />
            <Route path="/BoneLS" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BoneLS /></ProtectedRoute>} />
            <Route path="/Osteon" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Osteon /></ProtectedRoute>} />
            <Route path="/BloodVessel" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BloodVessel /></ProtectedRoute>} />
            <Route path="/Vein" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Vein /></ProtectedRoute>} />
            <Route path="/Arteriole" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Arteriole /></ProtectedRoute>} />
            <Route path="/Sinusoid" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Sinusoid /></ProtectedRoute>} />
            <Route path="/ElasticArtery" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ElasticArtery /></ProtectedRoute>} />
            <Route path="/MuscularArtery" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MuscularArtery /></ProtectedRoute>} />
            <Route path="/Endocrine" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Endocrine /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
