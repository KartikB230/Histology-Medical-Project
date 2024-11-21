import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function Sinusoid() {
  const [buttonClicked, setButtonClicked] = useState(false);

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
          
          <h1>Sinusoid</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Blood Vessel/Sinusoid Low Magnification.jpg" alt="Sinusoid" />
            <button className="AllButtons" data-tooltip="Sinusoids" id="Sinusoidbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Blood Vessel/Sinusoid High Magnification.jpg', '#', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Sinusoids" id="Sinusoidbtn2" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Blood Vessel/Sinusoid High Magnification.jpg', '#', '#')}>1</button>
          </div>
        </div>
        <div className="toggle-button-container">
          <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
            {buttonClicked ? (
              <img src="/assets/on-1.png" alt="afterClick" className="toggle-image" />
            ) : (
              <img src="/assets/off-1.png" alt="beforeClick" className="toggle-image" />
            )}
          </button>
        </div>
        <div className= 'Container2'>
            <ul style = {{textAlign : 'left', listStyle : 'disc', marginLeft : '20px'}}>
              <li>Sinusoids are large irregular blood vessels lined by gaps in the endothelium.</li>
              <li><strong>Site:</strong> liver, adrenal cortex, pituitary, parathyroid, spleen.</li>
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

export default Sinusoid;
