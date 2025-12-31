import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, initPopupHistory } from './script';

function Pancreas() {
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
        handleNext();
      } else if (distance < -50) {
        handlePrev();
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
          <h1>Pancreas</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img alt= ""  src="/assets/Images/Hepatobiliary System/Pancreas Low Magnification.jpg" />
            <button className="AllButtons" data-tooltip="Serous Acini" id="Pancreasbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Pancreas Acini.jpg', '#', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Intralobular connective tissue septa" id="Pancreasbtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Islets" id="Pancreasbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Pancreas Islets.jpg', '<u>Islet cells</u><ul style="list-style-type:disc;margin-left:20px;"><li>The cells are polygonal, pale, eosinophilic in appearance with a central vesicular nucleus.</li><li>Special stains allow the classification of islets cells into alpha cells, beta cells, delta cells and polypeptide cells.</li></ul><u>Alpha cells:</u><ul style="list-style-type:disc;margin-left:20px;"><li>Comprise of about 20% of islet cells.</li><li>Situated in the periphery of the islet.</li></ul><u>Beta cells:</u><ul style="list-style-type:disc;margin-left:20px;"><li>Comprise of about 70–75% of islet cells.</li><li>Situated in the central parts of the islet.</li></ul><u>Delta cells:</u><ul style="list-style-type:disc;margin-left:20px;"><li>Comprise of about 5% of the islet cells.</li><li>Situated in the periphery of the islet.</li></ul>', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Intercalated duct" id="Pancreasbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Pancreas Small Duct.jpg', '<b>The intercalated ducts</b><ul style="list-style-type:disc;margin-left:20px;"><li>Lined by cuboidal epithelium.</li><li>Some intercalated ducts invaginate into the lumen of the acini.</li><li>Many intercalated ducts join to form intralobular ducts.</li><li>Many intralobular ducts unite to form interlobular ducts which finally join the main pancreatic duct.</li></ul>', '#', true)}>4</button>
            <button className="AllButtons" data-tooltip="Centroacinar cells" id="Pancreasbtn5" data-popup="popup5">5</button>
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
            data-tooltip="Gall Bladder"
            onClick={handleNext}
            disabled={currentIndex === HepatobiliaryTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='Container2'>
        </div>

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup()}>&times;</button>
          <div className="popup-content">
            <div id="popupImageWrapper" className="popup-image-wrapper">
              <img alt= ""  id="popupImage" className="popup-image" src="" />
              <div id="additionalButtons" className="additional-buttons">
                <button className="AllButtons" data-tooltip="Intralobular Duct" id="Pancreasbtn6" data-popup="popup6" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Gall Bladder Lamina Propria.jpg', '<b>Lamina propria</b><ul style="list-style-type:disc;margin-left:20px;"><li>It shows connective tissue, capillaries, veins and lymphatics.</li><li>No muscularis mucosa.</li></ul>', '#')}>1</button>
                <button className="AllButtons" data-tooltip="Islet Cells" id="Pancreasbtn7" data-popup="popup7" >2</button>
                <button className="AllButtons" data-tooltip="Capillary" id="Pancreasbtn8" data-popup="popup8">3</button>
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

export default Pancreas;