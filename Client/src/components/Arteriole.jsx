import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, initPopupHistory } from './script';

function Arteriole() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const navigate = useNavigate();


  const bloodVesselTypes = [
    "/ElasticArtery",
    "/MuscularArtery",
    "/Arteriole",
    "/Vein",
    "/Sinusoid"
  ];


  const currentIndex = bloodVesselTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(bloodVesselTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < bloodVesselTypes.length - 1) {
      navigate(bloodVesselTypes[currentIndex + 1]);
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
    initPopupHistory();
    
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

          <h1>Arteriole</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img alt= ""  src="/assets/Images/Blood Vessel/Arteriole Low Magnification.jpg" />
            <button className="AllButtons" data-tooltip="Arteriole" id="Arteriolebtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Blood Vessel/Arteriole High Magnification.jpg', '#', '#')}>1</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Medium Muscular Artery"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>

          <div className="toggle-button-container">
            <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
              {buttonClicked ? (<img alt= ""  src="/assets/on-1.png" className="toggle-image" />) :
                (<img alt= ""  src="/assets/off-1.png" className="toggle-image" />)}</button>

          </div>
          <button
            className="nav-button next-button"
            data-tooltip="Vein"
            onClick={handleNext}
            disabled={currentIndex === bloodVesselTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='Container2'>
          <ol style={{ textAlign: 'left', marginLeft: '10px' }}>
            <li><strong>Tunica Intima -</strong> The endothelium is similar, gap junctions are present between endothelial cells and smooth muscle cells of tunica media.</li>
            <li><strong>Tunica Media -</strong> Usually have 1-2 muscle layers.</li>
            <ul style={{ textAlign: 'left', listStyle: 'disc' }}>
              <li>The Internal elastic lamina may or may not be present.</li>
              <li>Elastic fibres are absent.</li>
            </ul>
            <li><strong>Tunica Adventitia -</strong> It is a thin, ill defined sheath of connective tissue that blends with the surrounding connective tissues.</li>
          </ol>
        </div>

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup()}>&times;</button>
          <div className="popup-content">
            <div id="popupImageWrapper" className="popup-image-wrapper">
              <img alt= ""  id="popupImage" className="popup-image" src="" />
              <div id="additionalButtons" className="additional-buttons">
              </div>
            </div>
            <div>
              <p id="popupInfo"></p>
            </div>
            <div className="audio-container">
              <audio controls id="popupAudio">
                <source src="" type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Arteriole;