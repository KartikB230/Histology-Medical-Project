import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function SmoothMuscle() {
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
          
          <h1>Smooth Muscle</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Muscle/Smooth Muscle Low Magnification.jpg" alt="Smooth Muscle" />
            
            <button className="AllButtons" data-tooltip="Nucleus" id="Smoothbtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Muscle Fibre" id="Smoothbtn2" data-popup="popup2" >2</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Skeletal Muscle LS"
            onClick={handlePrev}
            disabled={false}
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
            data-tooltip="Cardiac Muscle"
            onClick={handleNext}
            disabled={currentIndex === MuscleTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className= 'Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Muscle/Smooth Muscle High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Smooth Muscle</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Muscle/Smooth Muscle Super High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Super High Magnification of Smooth Muscle</u></strong></a>
          <ol className="epithelium-introduction-list" style = {{fontSize: "20px"}}>
            <li>Spindle shaped cells with central nucleus.</li>
            <li>No striations.</li>
            <li>Smooth muscles have no T tubule system.</li>
          </ol>
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

export default SmoothMuscle;
