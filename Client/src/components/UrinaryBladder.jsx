import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function UrinaryBladder() {
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
          
          <h1>Urinary Bladder</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Urinary System/Urinary Bladder Low Magnification.jpg" alt="Urinary Bladder" />
            <button className="AllButtons" data-tooltip="Transitional epithelium" id="Urinarybtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Urinary System/Urinary Bladder Epithelium.jpg', '<p><strong><span style="text-decoration: underline;">Mucosa</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Irregular lumen lined by the urothelium (Transitional epithelium).</li><li>Mucosa shows foldings when the bladder is not distended.</li><li>Lamina propria contains connective tissue, capillaries and veins. </li><li>No glands are present in the mucosa. Some glands may be seen in the neck of the urinary bladder.</li></ul>', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Lamina propria" id="Urinarybtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Urinary System/Urinary Bladder Lamina Propia.jpg', '<p><strong><span style="text-decoration: underline;">Mucosa</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Irregular lumen lined by the urothelium (Transitional epithelium).</li><li>Mucosa shows foldings when the bladder is not distended.</li><li>Lamina propria contains connective tissue, capillaries and veins. </li><li>No glands are present in the mucosa. Some glands may be seen in the neck of the urinary bladder.</li></ul>', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Mucosal fold " id="Urinarybtn3" data-popup="popup3">3</button>
            <button className="AllButtons" data-tooltip="Smooth muscle bundles" id="Urinarybtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Urinary System/Urinary Bladder Smooth Muscle.jpg', '<p><strong><span style="text-decoration: underline;">Muscle Layer</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Very thick called the Detrusor.</li><li>Inner longitudinal layer, middle oblique layer, and outer longitudinal layer. Under the microscope, these three layers are often closely intermingled and hence cannot be differentiated as three separate layers.</li></ul>', '#')}>4</button>
            <button className="AllButtons" data-tooltip="Adventitia" id="Urinarybtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Urinary System/Urinary Bladder Adventitia.jpg', 'Serosa is seen only on the superior surface of the urinary bladder. At other areas, adventitia is present.', '#')}>5</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Disabled"
            onClick={handlePrev}
            disabled={true}
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
            data-tooltip="Ureter"
            onClick={handleNext}
            disabled={currentIndex === UrinaryTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className= 'Container2'>
          {/* <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Thyroid/Thyroid Pencil diagram without labels.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Urinary Bladder</u></strong></a> */}
          <p>The Urinary bladder is a distensible hollow organ located in the pelvis which functions as a reservoir for urine.</p>
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

export default UrinaryBladder;
