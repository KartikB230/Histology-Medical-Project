import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function LymphNode() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const endocrineTypes = [
    "/LymphNode",
    "/Adrenal",
    "/Pituitary"
  ];
  


  const currentIndex = endocrineTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(endocrineTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < endocrineTypes.length - 1) {
      navigate(endocrineTypes[currentIndex + 1]);
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
    <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      <Navbar />
        <div className="heading">
          
          <h1>Lymph Node</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Lymphoid Tissue/Lymph Node Low Magnification.jpg" alt="LymphNode" />
            <button className="AllButtons" data-tooltip="Capsule" id="LymphNodebtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Lymph Node Subcapsular Sinus.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li>Capsule which sends in septa called trabeculae.</li><li>Subcapsular sinus into which the afferent lymph vessels drain.</li><li>Subcapsular sinus continues along the trabeculae as trabecular sinus to the medullary sinus.</li></ul>", '#')}>1</button>
            <button className="AllButtons" data-tooltip="Sub Capsular Sinus" id="LymphNodebtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Lymph Node Subcapsular Sinus.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li>Capsule which sends in septa called trabeculae.</li><li>Subcapsular sinus into which the afferent lymph vessels drain.</li><li>Subcapsular sinus continues along the trabeculae as trabecular sinus to the medullary sinus.</li></ul>", '#')}>2</button>
            <button className="AllButtons" data-tooltip="Cortex" id="LymphNodebtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Lymph Node Cortex.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li>Cortex – made up of lymphoid follicles made up of B lymphocytes.</li><li>Lymphoid follicles without germinal centre – not sensitized to any antigen – primary follicle.</li><li>Lymphoid follicles with germinal centre – sensitized to some antigen – secondary follicle – central pale are lymphoblasts, peripheral dark are lymphocytes.</li></ul>", '#')}>3</button>
            <button className="AllButtons" data-tooltip="Medulla" id="LymphNodebtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Lymph Node Medulla.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li>Medulla – contains medullary cords and sinuses.</li><li>Medullary cords are B lymphocytes present around the medullary sinuses.</li><li>Macrophages and plasma cells are interspersed.</li><li>Medullary sinuses are lined by endothelium and continue into efferent lymphatics.</li></ul>", '#')}>4</button>
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
              {buttonClicked ? (<img src="/assets/on-1.png" alt="afterClick" className="toggle-image" />) : 
              (<img src="/assets/off-1.png" alt="beforeClick" className="toggle-image" />)}</button>
          
          </div>
          <button
            className="nav-button next-button"
            data-tooltip="Adrenal Gland"
            onClick={handleNext}
            disabled={currentIndex === endocrineTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className= 'Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Lymphoid Tissue/Lymph Node Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Lymph Node</u></strong></a>
                    <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
                    <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
                      <li>Lymph nodes are kidney shaped structures found along the course of lymphatics.</li>
                    </ul>
                    <p><strong>Structure of Lymph Node</strong> - Lymph node consists of two components:</p>
                    <ol style={{ listStyleType: 'numbers', paddingInlineStart: '20px', marginLeft: '20px' }}>
                      <li><strong>Connective tissue</strong>- includes capsule and subcapsular sinus.</li>
                      <li><strong>Parenchyma</strong> - includes cortex, paracortex and medulla.</li>
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

export default LymphNode;
