import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, initPopupHistory } from './script';

function Ureter() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);


  const UrinaryTypes = [
    "/UrinaryBladder",
    "/Ureter"
  ];



  const currentIndex = UrinaryTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(UrinaryTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < UrinaryTypes.length - 1) {
      navigate(UrinaryTypes[currentIndex + 1]);
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
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Navbar />
        <div className="heading">

          <h1>Ureter</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img alt= ""  src="/assets/Images/Urinary System/Ureter Low Magnification.jpg" />
            <button className="AllButtons" data-tooltip="Transitional epithelium" id="Ureterbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Urinary System/Ureter Epithelium.jpg', '<p><strong><span style="text-decoration: underline;">Mucosa</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Show folds.</li><li>The lining epithelium is transitional and the basement membrane is ill defined. </li><li>Lamina propria contains connective tissue, abundant elastic tissue, capillaries and veins.</li></ul>', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Lamina propria" id="Ureterbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Urinary System/Ureter Lamina Propia.jpg', '<p><strong><span style="text-decoration: underline;">Mucosa</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Show folds.</li><li>The lining epithelium is transitional and the basement membrane is ill defined. </li><li>Lamina propria contains connective tissue, abundant elastic tissue, capillaries and veins.</li></ul>', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Mucosal fold " id="Ureterbtn3" data-popup="popup3">3</button>
            <button className="AllButtons" data-tooltip="Longitudinal smooth muscle" id="Ureterbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Urinary System/Ureter Muscle Layer.jpg', '<p><strong><span style="text-decoration: underline;">Muscularis Layer</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>In contrast to GIT, the muscle layer is very thin.</li><li>Inner - longitudinal and the outer -circular muscle layer.</li></ul>', '#')}>4</button>
            <button className="AllButtons" data-tooltip="Circular smooth muscle" id="Ureterbtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Urinary System/Ureter Muscle Layer.jpg', '<p><strong><span style="text-decoration: underline;">Muscularis Layer</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>In contrast to GIT, the muscle layer is very thin.</li><li>Inner - longitudinal and the outer -circular muscle layer.</li></ul>', '#')}>5</button>
            <button className="AllButtons" data-tooltip="Adventitia" id="Ureterbtn6" data-popup="popup6" onClick={() => openPopup1('/assets/Images/Urinary System/Ureter Adventitia.jpg', '<p><strong><span style="text-decoration: underline;">Adventitia</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Loose connective tissue and adipose tissue.</li></ul>', '#')}>6</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Urinary Bladder"
            onClick={handlePrev}
            disabled={false}
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
            data-tooltip="Disabled"
            onClick={handleNext}
            disabled={true}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='Container2'>
          <a className="image-cell" onClick={() => openPopup1("/assets/Images/Urinary System/Ureter High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Panaromic Diagram of Ureter</u></strong></a>
          {/* <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
            <ol className="feature-list">
              <li>Connective Tissue capsule sending in septae dividing gland into lobules.</li>
              <li>Parenchyma consists of large number of follicles lined by simple squamous epithelium (in resting follicles) to simple cuboidal epithelium (in active follicles).</li>
              <li>Colloid is present in the lumen of the follicles</li>
              <li>Parafollicular cells present outside the follicles</li>
            </ol> */}
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

export default Ureter;
