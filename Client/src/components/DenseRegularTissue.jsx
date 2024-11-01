import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function DenseRegularTissue() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
    <div>
      <Navbar />
        <div className="heading">
          
          <h1>Dense Regular Connective Tissue</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Connective Tissue/Dense Regular Low Magnification.jpg" alt="Dense Regular Tissue" />
            <button className="AllButtons" data-tooltip="Collagen Fibres" id="DenseRbtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Fibroblasts" id="DenseRbtn2" data-popup="popup2" >2</button>
          </div>
        </div>
        <div className="toggle-button-container">
          <button
            id="toggleButton"
            data-tooltip="Show/Hide labels"
            className="toggle-button"
            onClick={() => toggleButtons(buttonClicked, setButtonClicked)}
          >
            {buttonClicked ? (
              <img src="/assets/on-1.png" alt="afterClick" className="toggle-image" />
            ) : (
              <img src="/assets/off-1.png" alt="beforeClick" className="toggle-image" />
            )}
          </button>
        </div>
        <div className="Container2">
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <p>Parallel and regularly arranged collagen fibres with connective tissue cells dispersed loosely and randomly between fibres.</p>
          
          <h2 style={{ textDecoration: 'underline' }}>Examples:</h2>
          <p>Tendon, aponeurosis and ligaments.</p>
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
            <div id="additionalButtons" className="additional-buttons"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default DenseRegularTissue;
