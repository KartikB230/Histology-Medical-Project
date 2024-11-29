import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function TransitionalEpithelium() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
 
  const epitheliumTypes = [
    "/SquamousEpithelium",
    "/SimpleCuboidalEpithelium",
    "/SimpleColumnarEpithelium",
    "/PseudostratifiedEpithelium",
    "/TransitionalEpithelium",
    "/StratifiedSquamousKeratinisedEpithelium",
    "/StratifiedSquamousNonKeratinisedEpithelium",
  ];


  const currentIndex = epitheliumTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(epitheliumTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < epitheliumTypes.length - 1) {
      navigate(epitheliumTypes[currentIndex + 1]);
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
          <h1>Transitional Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img src="assets\Images\Epithelium\Transitional Epithelium Low Magnification.jpg" alt="Transitional Epithelium Low Magnification" />
            <button className="AllButtons" data-tooltip="Transitional Epithelium - High Magnification" id="Transitionalbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Transitional Epithelium High Magnification.PNG', '#', '#')}>1</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
        <button
          className="nav-button prev-button"
          data-tooltip="Pseudostratified Epithelium"
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
          data-tooltip="Stratified Squamous Keratinised Epithelium"
          onClick={handleNext}
          disabled={currentIndex === epitheliumTypes.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

        <div className='Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Transitional Epithelium Relaxed Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Transitional Epithelium Relaxed</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Transitional Epithelium Streched Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Transitional Epithelium Streched</u></strong></a>
          <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
            <li>Transitional Epithelium also known as Urothelium as it is found lining most of the urinary system.</li>
            <li>It is a stratified epithelium having 3 types of cell layers:</li>
            <ol className='epithelium-list'>
              <li>Basal columnar or cuboidal cells</li>
              <li>Polyhedral cells (2-4 cell thick)</li>
              <li>Umbrella shaped cells (1 cell thick)- may be mononucleate or binucleate</li>
            </ol>
            <li> Special features: </li>
            <ol className='epithelium-list'>
              <li>It allows for considerable stretching without damage.</li>
              <li>The superficial cells are covered with special glycoproteins coat which make it impermeable to toxins.</li>
            </ol>
              <li>Examples: Ureter, Urinary bladder, part of urethra</li>
            </ul>
          </p>
        </div>
        <div id="overlay" className="overlay">
          <button className="close-button" onClick={closePopup}>&times;</button>
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
        <Footer/>
      </div>
    </>
  );
}

export default TransitionalEpithelium;
