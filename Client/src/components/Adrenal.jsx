import React, { useState, useEffect } from 'react'; 
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function Adrenal() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const endocrineTypes = [
    "/Thyroid",
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
    document.addEventListener('mousedown', disableImageDownload); // Disable right-click on images

 
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('mousedown', disableImageDownload);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      className='box'>
        <div className="heading">
          <h1>Adrenal Gland</h1>
        </div>
        <hr style={{"height":"10px"}}/>

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Adrenal/Adrenal_Gland.png" alt="Thyroid" />
            <button className="AllButtons" data-tooltip="Zona Glomerulosa" id="Adrenalbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Glomerulose.png', 'Zona Glomerulosa - The cells are arranged in cords in the form of arcades.These arcades are inverted U shaped.The cells are low columnar, light eosinophilic or basophilic.Nucleus is round and dark. In between these arcades, there are capillaries. These cells  secrete mineralocorticoids, the main potent component being Aldosterone. It influences the Na+, K+ and water balance, therefore it is important for maintenance of blood pressure ', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Zona Fasciculata" id="Adrenalbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Fasciculata.png', 'Zona Fasciculata - The capillaries in this layer are longitudinally placed. The cells are arranged in longitudinal columns – usually two cell thick. The cells are large, pale, polygonal cells. The nucleus is in the central part of the cell and is vesicular. The cells contain an abundant amount of lipid droplets which disappear during processing and hence the cells give a vacuolated appearance. The cells in zona fasciculata are also called as spongioblasts. Zona fasciculata secretes glucocorticoids concerned with carbohydrate metabolism.  ', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Zona Reticularis" id="Adrenalbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Reticularis.png', 'Zona reticularis- The cells are arranged in anastamosing cords. These cords branch and anastamose. In between the cords, there are plenty of sinusoidal capillaries. The cells of zona reticularis are small, polygonal and dark eosinophilic. The nuclei are very much condensed and dark – described as shrunken – pyknotic-nuclei. The zona reticularis was earlier referred to as the ‘graveyard of the cortex’ due to the presence of these pyknotic nuclei. Zona reticularis secretes sex corticoids – mainly androgens.', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Capsule" id="Adrenalbtn4" data-popup="popup4">4</button>
            <button className="AllButtons" data-tooltip="Medulla" id="Adrenalbtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Adrenal/Adrenal_Medulla.png', 'The medulla has an abundant number of large capillaries and sinusoids. The cells are large, pale staining, columnar with elongated nucleus. The base of the cell is aligned towards the capillary wall and the apex is aligned towards the sinusoids. The cells contain secretory granules which secrete adrenaline and noradrenaline. ', '#')}>5</button>
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Thyroid"
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
            data-tooltip="Pituitary Gland"
            onClick={handleNext}
            disabled={currentIndex === endocrineTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="Container2">
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Adrenal/Adrenal_Pencil.png")} style={{"display":"flex","justifyContent":"center","marginBottom":"10px"}}><strong><u>Click Here to view Pencil Diagram of Adrenal Gland</u></strong></a>
            <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
            <ol className="feature-list">
              <li>Connective Tissue Capsule</li>
              <li>Outer Cortex Shows 3 Zones:
              <ol className="nested-list">
                <li><strong>Zona Glomerulosa</strong> - inverted U-shaped cell arcades</li>
                <li><strong>Zona Fasciculata</strong> - vertical rows of cells, usually 2 rows thick</li>
                <li><strong>Zona Reticularis</strong> - anastomosing cords of cells</li>
              </ol>
              </li>
              <li>Inner Medulla – basophilic cells, pheochromocytes</li>
              <li>Large number of capillaries and sinusoids present</li>
            </ol>
        </div>

        {/* Pop-up overlay */}
        <div id="overlay" className="overlay">
          <button className="close-button" onClick={closePopup}>&times;</button>
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

export default Adrenal;
