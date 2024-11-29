import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function PseudostratifiedEpithelium() {
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
    "/StratifiedSquamousNonKeratinisedEpithelium",
    "/StratifiedSquamousKeratinisedEpithelium",
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
          <h1>Pseudostratified Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img src="assets\Images\Epithelium\Pseudostratified Epithelium Low Magnification.png" alt="Pseudostratified Epithelium Low Magnification" />
            <button className="AllButtons" data-tooltip="Pseudostratified Epithelium" id="Pseudobtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Pseudostratified Epithelium High Magnification.PNG', '#', '#')}>1</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
        <button
          className="nav-button prev-button"
          data-tooltip="Simple Columnar Epithelium"
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
          data-tooltip="Transitional Epithelium"
          onClick={handleNext}
          disabled={currentIndex === epitheliumTypes.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

        <div className='Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Pseudostratified Epithelium Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Pseudostratified Epithelium</u></strong></a>
          <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
            <li>The epithelium consists of a single layer of cells. </li>
            <li>The cells are of varying heights and their nuclei are placed at different levels. This epithelium therefore appears stratified which it actually is not.</li>
            <li>It consists of two cell types a) Tall columnar cells b) Short basal cells. </li>
            <li>Basal cells are overlaid by tall superficial cells which maintain their connection with the basement membrane through thin processes. </li>
            <li>Basal cells are stem cells which give rise to other cells.</li>
            <li>It has secretory role. </li>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>With cilia- </strong>Trachea, Bronchus (Respiratory system) <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>With stereocilia – </strong>Epididymis, Vas Deferens (Male reproductive system)
              </p>
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
      </div>
      <Footer/>
    </>
  );
}

export default PseudostratifiedEpithelium;
