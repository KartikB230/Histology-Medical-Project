import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';


function SquamousEpithelium() {
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
          <h1>Squamous Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            
            <div className="image-overlay"></div>
            <img src="/assets/Images/Squamous/simple_squamous_epithelium1.png" alt="SquamousEpithelium" className="image"/>
            <button className="AllButtons" data-tooltip="Squamous Cells" id="Squamousbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Squamous/simple_squamous_epithelium_High_power1.png','Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium', '/assets/Audios/Squamous/h1_76 squamous epithelium (1).wav')}>1</button>
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
          data-tooltip="Simple Cuboidal Epithelium"
          onClick={handleNext}
          disabled={currentIndex === epitheliumTypes.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

        

        <div className="Container2">
          <a
            href="#"
            className="image-cell"
            onClick={() =>
              openPopup1("/assets/Images/Squamous/Simple squamous pencil diagram.png")
            }
            style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
          >
            <strong>
              <u>Click Here to view Pencil Diagram of Squamous Epithelium</u>
            </strong>
          </a>
          <p>
            Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium
          </p>
        </div>

        <div className="audio-container">
          <audio
            src="/assets/Audios/Squamous/h1_76 squamous epithelium (1).wav"
            controls
            autoPlay={false}
            loop={false}
          />
        </div>

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup('overlay')}>
            &times;
          </button>
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
      <Footer />
    </>
  );
}

export default SquamousEpithelium;
