import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function Tonsil() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const LymphoidTissueTypes = [
    "/LymphNode",
    "/Spleen",
    "/Thymus",
    "/Tonsil"
  ];
  


  const currentIndex = LymphoidTissueTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(LymphoidTissueTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < LymphoidTissueTypes.length - 1) {
      navigate(LymphoidTissueTypes[currentIndex + 1]);
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
    <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      <Navbar />
        <div className="heading">
          
          <h1>Tonsil</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Lymphoid Tissue/Tonsil Low Magnification.jpg" alt="Tonsil" />
            <button className="AllButtons" data-tooltip="Stratified squamous nonkeratinised epithelium" id="Tonsilbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Tonsil High Magnification.jpg', "#", '#')}>1</button>
            <button className="AllButtons" data-tooltip="Tonsillar crypt" id="Tonsilbtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Lymphatic nodule" id="Tonsilbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Tonsil Lymphatic Nodule.jpg', '#', '#')}>3</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Thymus"
            onClick={handlePrev}
            disabled={false}
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
            data-tooltip="Disabled"
            onClick={handleNext}
            disabled={currentIndex === LymphoidTissueTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

<div className="Container2">
                  <a
                    href="#"
                    className="image-cell"
                    onClick={() =>
                      openPopup1("/assets/Images/Lymphoid Tissue/Tonsil Pencil Diagram.jpg")
                    }
                    style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
                  >
                    <strong>
                      <u>Click Here to view Pencil Diagram of Tonsil</u>
                    </strong>
                  </a>
                </div>

        <div className= 'Container2'>
          <u><strong>Structure of Palatine Tonsil</strong>tr</u>
          {/* <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Lymphoid Tissue/Spleen Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Spleen</u></strong></a> */}
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginTop: '10px'}}>
                      <li><strong>Lining Epithelium</strong>- stratified, squamous, and non- keratinized epithelium.</li>
                      <li>Epithelium dips down to form tonsillar crypts.</li>
                      <li><strong>Aggregations of Lymphoid follicles</strong> are present just below the epithelium in the lamina propria.</li>
                    </ul>
                    
                    
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
            <div id="additionalButtons" className="additional-buttons">
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Tonsil;
