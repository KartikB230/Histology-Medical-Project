import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, initPopupHistory } from './script';

function SkeletalMuscle() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);


  const MuscleTypes = [
    "/SkeletalMuscle",
    "/SkeletalMuscleLS",
    "/SmoothMuscle",
    "/CardiacMuscle"
  ];



  const currentIndex = MuscleTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(MuscleTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < MuscleTypes.length - 1) {
      navigate(MuscleTypes[currentIndex + 1]);
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

          <h1>Skeletal Muscle</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img alt= ""  src="/assets/Images/Muscle/Skeletal Muscle Low Magnification.jpg" />
            <button className="AllButtons" data-tooltip="Nucleus" id="Skeletalbtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Muscle Fibre" id="Skeletalbtn2" data-popup="popup2" >2</button>

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
              {buttonClicked ? (<img alt= ""  src="/assets/on-1.png" className="toggle-image" />) :
                (<img alt= ""  src="/assets/off-1.png" className="toggle-image" />)}</button>

          </div>
          <button
            className="nav-button next-button"
            data-tooltip="Skeletal Muscle LS"
            onClick={handleNext}
            disabled={currentIndex === MuscleTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='Container2'>
          <a className="image-cell" onClick={() => openPopup1("/assets/Images/Muscle/Skeletal Muscle High Magnification.jpg", "")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Skeletal Muscle</u></strong></a>

          <ol className="epithelium-introduction-list" style={{ fontSize: "20px" }}>
            <li>Generally fast acting muscles. </li>
            <li>Abundant mitochondria and a pigment called myoglobin. </li>
            <li>Myoglobin is similar to haemoglobin in that it binds to oxygen. </li>
            <li>Myoglobin gives the reddish brown colour of muscle. </li>
            <li>On the basis of quantity of myoglobin present, striated muscle fibres are classified into red fibres, white fibres and intermediate fibres.</li>
          </ol>
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

export default SkeletalMuscle;
