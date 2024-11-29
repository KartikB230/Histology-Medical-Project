import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function StratifiedSquamousNonKeratinisedEpithelium() {
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
          <h1>Stratified Squamous Non - Keratinised Epithelium </h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img src="assets\Images\Epithelium\Stratified Squamous Non-Keratinised Low Magnification.png" alt="Stratified Squamous Keratinised Epithelium" />
            <button className="AllButtons" data-tooltip="Stratified Squamous Non-Keratinised Epithelium" id="NonKeratinisedbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Stratified Squamous Non-Keratinised High Magnification.PNG', '#', '#')}>1</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
        <button
          className="nav-button prev-button"
          data-tooltip="Disabled"
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
          data-tooltip="Disabled"
          onClick={handleNext}
          disabled={currentIndex === epitheliumTypes.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

        <div className='Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Stratified Squamous Non-Keratinised Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Stratified Squamous Non - Keratinised Epithelium</u></strong></a>
          <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
            <li>It is made up of many cell layers.</li>
            <li>There is a basal columnar cell layer, above which,  are cuboidal or polyhedral cells. As we proceed towards the surface, the cells get more and more flat. The superficial layer is made up of flat squamous cells.</li>
            <li>Stratified Squamous Non-Keratinised Epithelium - where only above mentioned cell layers are present. Keratin layer is absent. It is also known as moist epithelium.</li>
            <li>Present at places where there is friction, constant wear and tear is going on.</li>
            <li>Examples - Oral Mucosa, Lip, Oesophagus, Cornea</li>
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

export default StratifiedSquamousNonKeratinisedEpithelium;
