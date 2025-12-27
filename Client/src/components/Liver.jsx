import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function Liver() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);


  const HepatobiliaryTypes = [
    "/Pancreas",
    "/GallBladder",
    "/Liver"
  ];



  const currentIndex = HepatobiliaryTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(HepatobiliaryTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < HepatobiliaryTypes.length - 1) {
      navigate(HepatobiliaryTypes[currentIndex + 1]);
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

          <h1>Liver</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Hepatobiliary System/Liver Low Magnification.jpg" alt="Liver" />
            <button className="AllButtons" data-tooltip="Capsule" id="Liverbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Liver Capsule.jpg', 'Capsule is called the Glisson’s capsule— sends connective tissue septae, dividing the liver into hepatic lobules', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Portal Triad" id="Liverbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Liver Portal Triad & Lipocytes.jpg', '<b>Portal triad</b><ul style="list-style-type:disc;margin-left:20px;"><li>Consists of hepatic artery, bile duct and portal vein.</li></ul><b>Portal vein</b><ul style="list-style-type:disc;margin-left:20px;"><li>Thin walled.</li><li>Collapsed lumen.</li><li>No muscle tissue.</li><li>Largest structure in the portal triad.</li></ul><b>The hepatic artery</b><ul style="list-style-type:disc;margin-left:20px;"><li>Small lumen.</li><li>A prominent muscle layer.</li><li>Internal elastic lamina is clearly visible.</li></ul><b>The bile duct</b><ul style="list-style-type:disc;margin-left:20px;"><li>An intermediate size.</li><li>Lined by cuboidal or low columnar epithelium.</li><li>The cytoplasm is clear.</li></ul>', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Hepatic Lobule" id="Liverbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Liver Hepatic Lobule.jpg', '<b>Hepatic lobules</b><ul style="list-style-type:disc;margin-left:20px;"><li>Hexagonal block consists of rows of anastomosing cells.</li><li>At the center – large central vein into which the liver sinusoids drain.</li><li>Rows of cells radiate out from the central vein to the periphery.</li><li>At the corners of the polygonal block are the portal triads.</li></ul>', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Hepatocytes" id="Liverbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Liver Hepatocytes.jpg', '<b>Hepatocytes or the hepatic cells</b><ul style="list-style-type:disc;margin-left:20px;"><li>Large, polygonal or polyhedral cells.</li><li>About 20 microns in diameter.</li><li>Usually show six surfaces.</li><li>They are arranged in 1 or 2 cell layers.</li><li>The hepatocytes have acidophilic cytoplasm as the cells contain a large amount of rough endoplasmic reticulum, smooth endoplasmic reticulum, mitochondria, golgi apparatus, peroxisomes, lipid droplets and glycogen deposits.</li><li>Nuclei are round, vesicular, centrally placed.</li><li>The plates of hepatocytes are separated by sinusoidal capillaries.</li></ul><b>Sinusoids</b><ul style="list-style-type:disc;margin-left:20px;"><li>Large, irregular structures lined by a thin discontinuous endothelium.</li><li>Lined by endothelial cells –<ul style="list-style-type:circle;margin-left:20px;"><li>Flattened squamous cells.</li><li>Large fenestrae are present in the endothelial cells to facilitate exchange of metabolites.</li></ul></li><li>Von Kuppfer cells are seen within the sinusoids.<ul style="list-style-type:circle;margin-left:20px;"><li>Derived from monocytes.</li><li>They are stationary macrophages within the lumen.</li><li>The cells are large and irregular with multiple cytoplasmic processes.</li><li>Their nucleus is round and vesicular.</li></ul></li></ul>', '#')}>4</button>
            <button className="AllButtons" data-tooltip="Central Vein" id="Liverbtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Liver Central Vein.jpg', '<b>Central vein</b><ul style="list-style-type:disc;margin-left:20px;"><li>At the center of a hepatic lobule – large vein into which the liver sinusoids drain.</li><li>Rows of cells radiate out from the central vein to the periphery.</li></ul>', '#')}>5</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Gall Bladder"
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
            disabled={currentIndex === HepatobiliaryTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Liver/Liver_Pencil_Diagram.jpeg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Liver</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <ol className="feature-list">
            <li>The Liver is a large gland which is concerned with extensive endocrine and exocrine functions. Hepatic lobules are hexagonal areas of liver tissue with a central vein and peripherally placed portal triads.</li>
            <li>Covered by a capsule called the Glisson's capsule.</li>
            <li>Within the capsule are numerous hexagonal hepatic lobules.</li>
            <li>The lobules are separated by connective tissue septae.</li>
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
        <Footer />
      </div>
    </>
  );
}

export default Liver;
