import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function CardiacMuscle() {
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
          
          <h1>Cardiac Muscle</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Muscle/Cardiac Muscle Low Magnification.jpg" alt="Thyroid" />
            <button className="AllButtons" data-tooltip="Arteriole" id="Cardiacbtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Nucleus" id="Cardiacbtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Micro Fibre" id="Cardiacbtn3" data-popup="popup3" >3</button>
            
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Smooth Muscle"
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
            data-tooltip="Disabled"
            onClick={handleNext}
            disabled={currentIndex === MuscleTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className= 'Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Muscle/Cardiac Muscle High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Cardiac Muscle</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Muscle/Cardiac Muscle Super High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Super High Magnification of Cardiac Muscle</u></strong></a>
          <ol className="epithelium-introduction-list" style = {{fontSize: "20px"}}>
          <li>Cylindrical muscle cell with central 1 or 2 nuclei.</li>

          <li>Light striations present not as prominent as in skeletal muscle.</li>

          <li>Intercalated discs are the characteristic feature of cardiac muscles. The discs have two      components. The transverse component is made of fascia adherens and the lateral components are formed of gap junctions. Macula adherens (desmosomes) are common to both. They prevent the cardiac muscles cells from being pulled apart during repeated contractions.  Fascia adherens help the cardiac muscle cells to bind end on. Gap junctions help to create a functional syncytium by providing ionic continuity between adjacent cells.</li>

          <li>The smooth endoplasmic reticulum in cardiac muscles and striated muscles is arranged in the form of a network of tubules called the T tubules. Each sarcomere contains a single T tubule.</li>
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

export default CardiacMuscle;
