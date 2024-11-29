import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function DenseRegularTissue() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const connectiveTissueTypes = [
    "/AdiposeTissue",
    "/DenseRegularTissue",
    "/DenseIrregularTissue",
    "/LooseConnectiveTissue"
  ];


  const currentIndex = connectiveTissueTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(connectiveTissueTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < connectiveTissueTypes.length - 1) {
      navigate(connectiveTissueTypes[currentIndex + 1]);
    }
  };
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX && endX) {
      const distance = startX - endX;
      if (distance > 50) {
        handleNext(); // Swipe left
      } else if (distance < -50) {
        handlePrev(); // Swipe right
      }
    }
    setStartX(null);
    setEndX(null);
  };


  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault(); 
    };

    const disableImageDownload = (e) => {

      if (e.target && e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('mousedown', disableImageDownload); 

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('mousedown', disableImageDownload);
    };
  }, []);

  return (
    <>
    <div>
      <Navbar />
        <div className="heading">
          
          <h1>Dense Regular Connective Tissue</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Connective Tissue/Dense Regular Low Magnification.jpg" alt="Dense Regular Tissue" />
            <button className="AllButtons" data-tooltip="Collagen Fibres" id="DenseRbtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Fibroblasts" id="DenseRbtn2" data-popup="popup2" >2</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
        <button
          className="nav-button prev-button"
          data-tooltip="Adipose Connective Tissue"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaArrowLeft /> 
        </button>
          
          <div className="toggle-button-container">
            <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
              {buttonClicked ? (<img src="/assets/on-1.png" alt="afterClick" className="toggle-image" />) : 
              (<img src="/assets/off-1.png" alt="beforeClick" className="toggle-image" />)}</button>
          
          </div>
        <button
          className="nav-button next-button"
          data-tooltip="Dense Irregular Connective Tissue"
          onClick={handleNext}
          disabled={currentIndex === connectiveTissueTypes.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

        <div className="Container2">
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <p>Parallel and regularly arranged collagen fibres with connective tissue cells dispersed loosely and randomly between fibres.</p>
          
          <h2 style={{ textDecoration: 'underline' }}>Examples:</h2>
          <p>Tendon, aponeurosis and ligaments.</p>
        </div>
        
        

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup('overlay')}>&times;</button>
          <div className="popup-content">
            <img id="popupImage" className="popup-image" src="" alt="Pop-up Image" />
            <div>
              <p id="popupInfo"></p>
            </div>
            <div className="audio-container">
              <audio controls id="popupAudio">
                <source src="" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div id="additionalButtons" className="additional-buttons"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default DenseRegularTissue;
