import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, openPopup, initPopupHistory } from './script';

function DenseIrregularTissue() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonBottomOffset, setButtonBottomOffset] = useState('20px');
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const connectiveTissueTypes = [
    "/AdiposeTissue",
    "/DenseRegularTissue",
    "/DenseIrregularTissue",
    "/LooseConnectiveTissue"
  ];


  const currentIndex = connectiveTissueTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(connectiveTissueTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < connectiveTissueTypes.length - 1) {
      navigate(connectiveTissueTypes[currentIndex + 1]);
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
          <h1>Dense Irregular Connective Tissue</h1>
        </div>
        <hr className="divider" />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
            <img alt= ""  src="/assets/Images/Connective Tissue/dense_irregular_highpow.jpeg" />
            <button className="AllButtons" data-tooltip="Collagen Fibres" id="DenseIbtn1" data-popup="popup1" onClick={() => openPopup1("/assets/Images/Connective Tissue/Dense Irregular High Magnification.jpg")}>1</button>
            <button className="AllButtons" data-tooltip="Fibroblasts" id="DenseIbtn2" data-popup="popup2" onClick={() => openPopup1("/assets/Images/Connective Tissue/Dense Irregular High Magnification.jpg")}>2</button>
            <button className="AllButtons" data-tooltip="Capiliary" id="DenseIbtn3" data-popup="popup3">3</button>
          </div>
        </div>

        <div className="navigation-buttons">
        <button
          className="nav-button prev-button"
          data-tooltip="Dense Regular Connective Tissue"
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
          data-tooltip="Loose Connective Tissue"
          onClick={handleNext}
          disabled={currentIndex === connectiveTissueTypes.length - 1}
        >
          <FaArrowRight />
        </button>
      </div>

        <div className="Container2">
          <a className="image-cell" onClick={() => openPopup1("/assets/Images/Connective Tissue/dense_irregular_pencil.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Dense Irregular Tissue</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
            <li>Collagen and elastic fibres with connective tissue cells dispersed randomly.</li>
          </ul>
          <h2 style={{ textDecoration: 'underline' }}>Examples:</h2>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
            <li>Dermis of Skin.</li>
          </ul>

        </div>

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup()}>&times;</button>
          <div className="popup-content">
            <div id="popupImageWrapper" className="popup-image-wrapper">
              <img alt= ""  id="popupImage" className="popup-image" src="" />
              <div id="additionalButtons" className="additional-buttons">
                <a className="image-cell" onClick={() => openPopup('/assets/Images/Connective/Fibroblasts Diagram.jpg')} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Fibroblasts Diagram</u></strong></a>
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
      </div>
      <Footer />
    </>
  );
}

export default DenseIrregularTissue;