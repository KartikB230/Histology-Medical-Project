import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, initPopupHistory } from './script';

function Osteon() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);


  const boneTypes = [
    "/BoneTS",
    "/BoneLS",
    "/Osteon"
  ];


  const currentIndex = boneTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(boneTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < boneTypes.length - 1) {
      navigate(boneTypes[currentIndex + 1]);
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
      <div>
        <Navbar />
        <div className="heading">
          <h1>Osteon(Haversian System)</h1>
        </div>
        <hr className="divider" />

        <div className="Container1" id="container1" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <img alt= "" src="/assets/Images/Bone/Osteon Low Magnification.jpg" />
          <button className="AllButtons" data-tooltip="Haversian Canal" id="Osteonbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Bone/Volkmann Canal TS.jpg', '<p><strong><span style="text-decoration: underline;">Volkmann\'s canal:</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Volkmann’s canals are perpendicular to haversian canals.</li><li>Blood vessels and nutrients from periosteum and endosteum travel through Volkmann’s canals to reach the Haversian canals.</li></ul>', '')}>1</button>
          <button className="AllButtons" data-tooltip="Lamellae" id="Osteonbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Bone/Osteon_lamellae.png', '')}>2</button>
          <button className="AllButtons" data-tooltip="Osteocyte in Lacuna" id="Osteonbtn3" data-popup="popup3" onClick={() => openPopup1("/assets/Images/Bone/TS_canaliculii.png")}>3</button>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Ground Bone LS - Haversian Canal"
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
            data-tooltip="Disabled"
            onClick={handleNext}
            disabled={currentIndex === boneTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="Container2">
          <a className="image-cell" onClick={() => openPopup1("/assets/Images/Bone/Osteon Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Osteon</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Haversian System -</h2>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
            <li>Central – Haversian canal through which nerves and vessels traverse.</li>
            <li>Concentric lamellae surround the Haversian canal.</li>
            <li>In between the lamellae, the osteocytes get trapped within lacunae.</li>
            <li>Osteocytes have canaliculi which are processes to connect with the neighbouring osteocytes.<br />They connect the Haversian canals to the dependent osteocytes, endosteal lamella and interstitial lamellae</li>
            <li>Long axis of osteon is parallel to the long axis of the bone.</li>
            <li>Canals connecting two Haversian canals are called as Volkmann’s canals.</li>
          </ul>
          <br />
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

export default Osteon;
