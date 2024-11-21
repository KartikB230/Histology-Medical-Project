import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function LooseConnectiveTissue() {
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
          <h1>Loose Connective Tissue</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
          <img src="/assets/Images/Connective Tissue/Loose Connective Tissue Low Magnification.jpg" alt="Loose Connective Tissue" />
            <button className="AllButtons" data-tooltip="Collagen Fibres" id="Loosebtn1" data-popup="popup1" onClick={() => openPopup1("/assets/Images/Connective Tissue/Collagen Fibres.jpg",'','')}>1</button>
            <button className="AllButtons" data-tooltip="Adipocytes" id="Loosebtn2" data-popup="popup2" onClick={() => openPopup1("/assets/Images/Connective Tissue/Adipocytes.jpg")}>2</button>
            <button className="AllButtons" data-tooltip="Blood Vessel" id="Loosebtn3" data-popup="popup3" onClick={() => openPopup1("/assets/Images/Connective Tissue/Blood Vessel.jpg")}>3</button>
            <button className="AllButtons" data-tooltip="Elastic Fibres" id="Loosebtn4" data-popup="popup4" onClick={() => openPopup1("/assets/Images/Connective Tissue/Elastic Fibres.jpg")}>4</button>
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
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Connective Tissue/Loose Connective Tissue Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Loose Connective Tissue</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <p>Collagen and elastic fibres with connective tissue cells dispersed loosely and randomly.</p>
          
          <h2 style={{ textDecoration: 'underline' }}>Examples:</h2>
          <p>Areolar Tissue, Perimysium and Lamina Propria.
          </p>
        
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

export default LooseConnectiveTissue;
