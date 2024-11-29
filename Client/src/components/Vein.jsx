import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function Vein() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

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

          <h1>Vein</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Blood Vessel/Vein Low Magnification.jpg" alt="Thyroid" />
            <button className="AllButtons" data-tooltip="Tunica Intima" id="Veinbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Blood Vessel/Vein Tunica Intima.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Intima</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Includes the endothelium and the underlying subendothelial connective tissue (only in large veins). </li><li>The internal elastic lamina is absent.</li></ul>', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Tunica Media" id="Veinbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Blood Vessel/Vein Tunica Media.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Media</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>The proportional thickness of tunica media to tunica adventitia is in a ratio of 1: 3</li><li>Few circularly arranged smooth muscle cells, collagen fibres, elastic fibres, reticular fibres and proteoglycans.</li></ul>', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Tunica Adventitia" id="Veinbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Blood Vessel/Vein Tunica Adventitia.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Adventitia</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Thickest layer</li><li>Made of longitudinally arranged collagenous tissue and a few elastic fibres. </li><li>It contains vasa vasorum and nerve vascularis</li></ul>', '#')}>3</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Arteriole"
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
            data-tooltip="Sinusoid"
            onClick={handleNext}
            disabled={currentIndex === bloodVesselTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className='Container2'>
        <ol style={{ textAlign: 'left', marginLeft: '10px' }}>
            <li><strong>Tunica Intima -</strong> Includes the endothelium and the underlying subendothelial connective tissue (only in large veins). </li>
            <ul style={{ textAlign: 'left', listStyle: 'disc' }}>
            <li>The internal elastic lamina is absent.</li></ul>
            <li><strong>Tunica Media -</strong>The proportional thickness of tunica media to tunica adventitia is in a ratio of 1: 3</li>
            <ul style={{ textAlign: 'left', listStyle: 'disc' }}>
              <li>Few circularly arranged smooth muscle cells, collagen fibres, elastic fibres, reticular fibres and proteoglycans.</li>
            </ul>
            <li><strong>Tunica Adventitia -</strong>Thickest layer</li> 
            <ul style={{ textAlign: 'left', listStyle: 'disc' }}>
              <li>Made of longitudinally arranged collagenous tissue and a few elastic fibres. </li>
              <li>It contains vasa vasorum and nerve vascularis</li>
              
            </ul>
          </ol>
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
        <Footer />
      </div>
    </>
  );
}

export default Vein;
