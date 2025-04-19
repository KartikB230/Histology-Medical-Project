import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function SkeletalMuscleLS() {
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
          
          <h1>Skeletal Muscle LS</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Muscle/Skeletal Muscle LS Low Magnification.jpg" alt="Skeletal Muscle LS" />
            <button className="AllButtons" data-tooltip="Endomysium" id="SkeletalLSbtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Penimysium" id="SkeletalLSbtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Muscle Fibre" id="SkeletalLSbtn3" data-popup="popup3" >3</button>
            <button className="AllButtons" data-tooltip="Fascicles" id="SkeletalLSbtn4" data-popup="popup4" >4</button>
            <button className="AllButtons" data-tooltip="Arteriole" id="SkeletalLSbtn5" data-popup="popup5" >5</button>
            
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Skeletal Muscle"
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
            data-tooltip="Smooth Muscle"
            onClick={handleNext}
            disabled={currentIndex === MuscleTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className= 'Container2'>
          {/* <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Thyroid/Thyroid Pencil diagram without labels.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Skeletal Muscle</u></strong></a> */}
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Muscle/Skeletal Muscle LS High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Skeletal Muscle LS</u></strong></a>
          <ol className="epithelium-introduction-list" style = {{fontSize: "20px"}}>
          <li>The fibres are elongated, measuring 1-4 cm in length, cylindrical. </li>
          <li>The fibres are arranged parallel to each other and are multinucleate.</li>
          <li>Nuclei are present in the peripheral part of the cytoplasm (also called as sarcoplasm).</li>
          <li>The muscle fibres are typically striated - alternate light and dark bands run across the fibres because of regular arrangements of actin and myosin filaments. </li>
          <li>Light bands are called as I band or isotropic bands. The dark bands are called as “A” bands or anisotropic bands.</li>
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

export default SkeletalMuscleLS;
