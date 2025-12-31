import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, initPopupHistory } from './script';

function Thymus() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);


  const LymphoidTissueTypes = [
    "/LymphNode",
    "/Spleen",
    "/Thymus",
    "/Tonsil"
  ];



  const currentIndex = LymphoidTissueTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(LymphoidTissueTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < LymphoidTissueTypes.length - 1) {
      navigate(LymphoidTissueTypes[currentIndex + 1]);
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

          <h1>Thymus</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img alt= ""  src="/assets/Images/Lymphoid Tissue/Thymus Low Magnification.jpg" />
            <button className="AllButtons" data-tooltip="Capsule" id="Thymusbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Thymus Capsule.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li><strong>Capsule</strong> which sends in incomplete septae dividing it into incomplete thymic lobules.</li><li>Supporting network is formed by star shaped <strong>epithelio-reticular cells</strong>.</li></ul>", '#')}>1</button>
            <button className="AllButtons" data-tooltip="Trabeculae" id="Thymusbtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Incomplete Thymic Lobules" id="Thymusbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Thymus incomplete thymic lobules.jpg', '#', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Hassal'S corpuscles" id="Thymusbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Thymus Hassal Corpuscles High Magnification.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><strong>Thymic / Hassal’s corpuscles</strong>- is made up from degenerating epithelioreticular cells. <br>Centrally, eosinophilic mass of dead epithelioreticular cells is present surrounded by degenerating cells like a rosette.", '#')}>4</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Spleen"
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
            data-tooltip="Tonsil"
            onClick={handleNext}
            disabled={currentIndex === LymphoidTissueTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="Container2">
          <a
            className="image-cell"
            onClick={() =>
              openPopup1("/assets/Images/Lymphoid Tissue/Thymus Pencil Diagram.jpg")
            }
            style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
          >
            <strong>
              <u>Click Here to view Pencil Diagram of Thymus</u>
            </strong>
          </a>
        </div>

        <div className='Container2'>
          {/* <ae="image-cell" onClick={() => openPopup1("/assets/Images/Lymphoid Tissue/Spleen Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Spleen</u></strong></a> */}
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginTop: '10px' }}>
            <li>The<strong> Thymus</strong> is a small, pyramidal, pinkish, asymmetric, well-encapsulated, bilobed structure located in anterior mediastinum.</li>
            <li>Its weighs 10-35 gms at birth and continues to grow till puberty, till it achieves largest size, thereafter it regresses and the lymphoid tissue gets replaced by fibrofatty tissue.</li>
            <li><strong>STRUCTURE OF THYMUS</strong> – contains only T lymphocytes Comprised of connective tissue and parenchyma.</li>
            <li><strong>Connective tissue </strong> consists of capsule and epithelio-reticular cells. </li>
            <li><strong>Parenchyma </strong>is divided into lobules, each of which has a cortex( outer dark area) and medulla(inner lighter area).</li>
          </ul>


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

export default Thymus;
