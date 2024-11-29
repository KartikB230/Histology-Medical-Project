import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function HyalineCartilage() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [activeTheory, setActiveTheory] = useState('Hyaline'); // Track the active theory
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const cartilageTypes = [
    "/HyalineCartilage",
    "/ElasticCartilage",
    "/WhiteFibrousCartilage"
  ];


  const currentIndex = cartilageTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(cartilageTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < cartilageTypes.length - 1) {
      navigate(cartilageTypes[currentIndex + 1]);
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
          <h1>Hyaline Cartilage</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1"  onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div style={{ position: 'relative' }}>
          <img src="/assets/Images/Cartilage/Hyaline Cartilage Low Magnification1.jpeg" alt="Hyaline Cartilage" />
            <button className="AllButtons" data-tooltip="Territorial Matrix" id="Hyalinebtn1" data-popup="popup1" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Cartilage High Magnification1.jpg", '#', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Inter-territorial Matrix" id="Hyalinebtn2" data-popup="popup2" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Cartilage High Magnification1.jpg", '#', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Lacunae" id="Hyalinebtn3" data-popup="popup3" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Cartilage High Magnification1.jpg", '#', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Chondrocytes" id="Hyalinebtn4" data-popup="popup4" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Cartilage High Magnification1.jpg", '#', '#')}>4</button>
            <button className="AllButtons" data-tooltip="Perichondrium" id="Hyalinebtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Cartilage/Hyaline Perichondrium1.jpg', '#', '#')}>5</button>
            <button className="AllButtons" data-tooltip="Cell nests" id="Hyalinebtn6" data-popup="popup6" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Cartilage High Magnification1.jpg", '#', '#')}>6</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Disabled"
            onClick={handlePrev}
            disabled={currentIndex === 0}
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
            data-tooltip="Elastic Cartilage"
            onClick={handleNext}
            disabled={currentIndex === cartilageTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="Container2">
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Hyaline Cartilage</u></strong></a>
          {/* Buttons to switch between Hyaline and Articular Cartilage */}
          <div className="theory-switch-buttons">
            <button
              className={activeTheory === 'Hyaline' ? 'active' : ''}
              onClick={() => setActiveTheory('Hyaline')}
            >
              Typical Hyaline Cartilage
            </button>
            <button
              className={activeTheory === 'Articular' ? 'active' : ''}
              onClick={() => setActiveTheory('Articular')}
            >
              Articular Cartilage
            </button>
          </div>
          {/* Conditionally render content based on the active theory */}
          {activeTheory === 'Hyaline' ? (
            <ul className='epithelium-introduction-list'>
              <li>Perichondrium is usually present in the inner cellular layer of perichondrium may not be clearly apparent.</li>
              <li>The cells are larger towards centre, arranged in groups called cell nests.</li>
              <li>The cells are numerous and close together.</li>
              <li>A large number of elastic fibres are seen in the matrix. Since the elastic fibres are present, the tissues macroscopically have a light yellow appearance and hence are called yellow elastic tissue.</li>
              <li>The presence of yellow elastic tissue makes this variety of cartilage very pliable.</li>
              <li>It readily recovers shape after being deformed.</li>
              <li>Sites where Elastic cartilage is present: Ear pinna, wall of medial part of eustachian tube, epiglottis, corniculate and cuneiform cartilages of the larynx, apical parts of arytenoid cartilage.</li>
            </ul>
          ) : (
            <div>
              <p>The perichondrium is not seen in articular cartilage. (Articular cartilage is seen lining the bones taking part in joint formation. So for painless movements, perichondrium is absent because Perichondrium is pain sensitive.)</p>
              <p>The cartilage cells are arranged in 3 layers:</p>
              <ul className='epithelium-introduction-list'>
                <li><strong>Outer Horizontal</strong> (The cells in outer layer are small and flattened. The lacunae are horizontally arranged)</li>
                <li><strong>Middle Oblique</strong> (The cells in middle layer are larger, rounded, presently singly or in groups. The lacunae are arranged in oblique rows.)</li>
                <li><strong>Inner Vertical Layer</strong> (The innermost layer contains relatively larger cells. The lacunae are vertically oriented. The innermost layer contains calcified matrix.)</li>
              </ul>
            </div>
          )}
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
            <div id="additionalButtons" className="additional-buttons"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HyalineCartilage;
