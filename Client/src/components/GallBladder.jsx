import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function GallBladder() {
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

          <h1>Gall Bladder</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Hepatobiliary System/Gall Bladder Low Magnification.jpg" alt="Gall Bladder" />
            <button className="AllButtons" data-tooltip="Simple Columnar Epithelium" id="Gallbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Gall Bladder Epithelium.jpg', '<ul style="list-style-type:disc;margin-left:20px;"><li>Surface epithelium – simple columnar cells with irregular microvilli (Brush Border appearance).</li><li>Mucosal folds are deep and hence the gaps between the folds can be mistaken for mucous glands, which are present only in the neck.</li></ul>', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Mucosal Fold" id="Gallbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Gall Bladder Epithelium.jpg', '<b>Mucosa</b> – shows plenty of mucosal folds.', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Fibro Muscular Stroma" id="Gallbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Hepatobiliary System/Gall Bladder Fibromuscular Stroma.jpg', '<b>Fibromuscular layer - </b> Circularly arranged Smooth Muscle fibres interlace with white fibrous connective tissue.', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Serosa" id="Gallbtn4" data-popup="popup4" >4</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Pancreas"
            onClick={handlePrev}
            disabled={currentIndex === HepatobiliaryTypes.length - 1}
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
            data-tooltip="Liver"
            onClick={handleNext}
            disabled={currentIndex === HepatobiliaryTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Gall Bladder/Gall Bladder_Pencil_Diagram.jpeg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Gall Bladder</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <ul style={{ listStyleType: "disc" }}>
            <li>Gall bladder is a pear shaped structure which serves to store and concentrate bile.</li>
            <li>While all the layers of GIT are seen in the gland, columnar cells with microvilli and the absence of muscularis mucosae characterize the microscopic appearance of gall bladder.</li>
          </ul>

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

export default GallBladder;
