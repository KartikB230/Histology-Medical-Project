import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, initPopupHistory } from './script';

function Spleen() {
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

          <h1>Spleen</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img alt= ""  src="/assets/Images/Lymphoid Tissue/Spleen Low Magnification.jpg" />
            <button className="AllButtons" data-tooltip="Capsule" id="Spleenbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Spleen Capsule.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li><strong>Capsule</strong>- a thick capsule from which thick trabeculae or septa enter the parenchyma of the gland.</li><li><strong>Reticular fibres</strong> form the supporting network.</li></ul>", '#')}>1</button>
            <button className="AllButtons" data-tooltip="Trabeculae" id="Spleenbtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Splenic cords (red pulp)" id="Spleenbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Spleen Red Pulp.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li><strong>Red Pulp</strong> – contains medullary cords and sinuses</li><li>Medullary cords / Cords of Bilroth are cords of lymphocytes, macrophages, other cells of connective tissue with reticular fibres present around the blood sinusoids present in spleen.</li><li>Medullary sinuses are spaces filled with blood lined by tall endothelial cells.</li><li>These endothelial cells resemble the wooden staves of a barrel and hence are called as stave cells.</li></ul>", '#')}>3</button>
            <button className="AllButtons" data-tooltip="Lymphatic nodule(white pulp)" id="Spleenbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Lymphoid Tissue/Spleen White Pulp.jpg', "<ul style='list-style-type: disc; padding-inline-start: 20px; margin-left: 5px; margin-top: 10px;'><li><strong>White pulp/Malphigian corpuscle</strong> -  Contains lymphoid follicles with central arteriole</li><li>When exposed to an antigen, the follicle starts developing germinal centre due to proliferation of lymphocytes and hence, the central arteriole is pushed to periphery becoming eccentric in position.</li><li>Macrophages and plasma cells are interspersed.</li><li>There is a sheath of T- lymphocytes around the arteriole called as Peri-arteriolar lymphatic sheath (PALS).</li></ul>", '#')}>4</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Lymph Node"
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
            data-tooltip="Thymus"
            onClick={handleNext}
            disabled={currentIndex === LymphoidTissueTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='Container2'>
          {/* <ae="image-cell" onClick={() => openPopup1("/assets/Images/Lymphoid Tissue/Spleen Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Spleen</u></strong></a> */}
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginTop: '10px' }}>
            <li><strong>Spleen</strong> is the largest lymphoid organ in the body.</li>
            <li>Located in the upper left quadrant of abdomen.</li>
            <li>Functions in the filtration of senescent red blood cells.</li>
            <li>Also designed for response to antigens in the blood. </li>
          </ul>
          <p>It has no afferent lymphatic channels but has efferent lymphatic channels.</p>
          <p><strong>Structure of Spleen</strong> :<br /> Spleen is comprised of connective tissue which includes capsule and reticular fibres and parenchyma which is made of white pulp and red pulp.
          </p>

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

export default Spleen;
