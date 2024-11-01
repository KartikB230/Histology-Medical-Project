import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons, openPopup } from './script';

function DenseIrregularTissue() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonBottomOffset, setButtonBottomOffset] = useState('20px');

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const toggleButton = document.getElementById('toggleButton');

      if (footer && toggleButton) {
        const footerRect = footer.getBoundingClientRect();
        const buttonHeight = toggleButton.offsetHeight;

        if (footerRect.top < window.innerHeight) {
          const offsetAboveFooter = footerRect.height + buttonHeight + 20;
          setButtonBottomOffset(`${offsetAboveFooter}px`);
        } else {
          setButtonBottomOffset('20px');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Dense Irregular Tissue</h1>
        </div>
        <hr className="divider" />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Connective Tissue/Dense Irregular Low Magnification.jpg" alt="Dense Irregular Tissue" />
            <button className="AllButtons" data-tooltip="Collagen Fibres" id="DenseIbtn1" data-popup="popup1">1</button>
            <button className="AllButtons" data-tooltip="Fibroblasts" id="DenseIbtn2" data-popup="popup2">2</button>
            <button className="AllButtons" data-tooltip="Capiliary" id="DenseIbtn3" data-popup="popup3">3</button>
          </div>
        </div>

        {/* Toggle Button positioned below the image */}
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
        <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Connective Tissue/Dense Irregular High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Dense Irregular Tissue</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Connective Tissue/Dense Irregular Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Dense Irregular Tissue</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
            <li>Collagen and elastic fibres with connective tissue cells dispersed randomly.</li>
          </ul>
          <h2 style={{ textDecoration: 'underline' }}>Examples:</h2>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
            <li>Dermis of Skin.</li>
          </ul>

        </div>

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup('overlay')}>&times;</button>
          <div className="popup-content">
            <img id="popupImage" className="popup-image" src="" alt="Pop-up Image" />
            <div id="additionalButtons" className="additional-buttons">
              <a href="#" className="image-cell" onClick={() => openPopup('/assets/Images/Connective/Fibroblasts Diagram.jpg')} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Fibroblasts Diagram</u></strong></a>
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
      </div>
      <Footer />
    </>
  );
}

export default DenseIrregularTissue;
