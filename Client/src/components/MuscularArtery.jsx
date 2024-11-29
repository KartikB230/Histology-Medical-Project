import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function MuscularArtery() {
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

          <h1>Medium Muscular Artery</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Blood Vessel/Muscular Artery Low Magnification.jpg" alt="Medium Muscular Artery" />
            <button className="AllButtons" data-tooltip="Tunica Intima" id="MAbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Blood Vessel/Muscular Artery Tunica Intima.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Intima</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Includes endothelium and internal elastic lamina</li><li>The internal elastic lamina is prominent and is wavy (Wavy due to contraction of smooth muscle cells in the Tunica media).</li></ul>', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Tunica Media" id="MAbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Blood Vessel/Muscular Artery Tunica Media.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Media</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Thickness of Tunica media in comparison to Tunica adventitia is 1 : 1</li><li>Concentrically arranged layers of smooth muscle fibres (almost 40 layers thick)</li><li>Scattered among them are some elastic and reticular fibres.</li></ul>', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Tunica Adventitia" id="MAbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Blood Vessel/Muscular Artery Tunica Adventitia.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Adventitia</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>External elastic lamina is prominent.</li><li>Made of longitudinally arranged collagenous tissue and a few elastic fibres.</li><li>These components gradually merge into the loose connective tissue surrounding the vessels.</li><li>It contains vasa vasorum and nervi vascularis</li><li><strong>Examples:</strong> brachial, radial, ulnar, popliteal, dorsalis pedis artery (All arteries except elastic arteries)</li></ul>', '#')}>3</button>
          </div>
        </div>
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Large Elastic Artery"
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
            data-tooltip="Arteriole"
            onClick={handleNext}
            disabled={currentIndex === bloodVesselTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className='Container2'>

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

export default MuscularArtery;
