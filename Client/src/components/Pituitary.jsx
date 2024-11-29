import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons, openPopup } from './script';

function Pituitary() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const pituitaryImageRef = useRef(null);
  const parsDistalisImageRef = useRef(null);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const endocrineTypes = [];


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

  useEffect(() => {
    const adjustButtonPositions = () => {
      const pituitaryImage = pituitaryImageRef.current;
      const parsDistalisImage = parsDistalisImageRef.current;

      if (!pituitaryImage || !parsDistalisImage) return;

      const pituitaryRect = pituitaryImage.getBoundingClientRect();
      const parsDistalisRect = parsDistalisImage.getBoundingClientRect();

      const buttons = [
        { id: 'Pituitarybtn7', topPercent: 24, leftPercent: 67, imageRect: pituitaryRect },
        { id: 'Pituitarybtn8', topPercent: 52, leftPercent: 37, imageRect: pituitaryRect },
        { id: 'Pituitarybtn9', topPercent: 40, leftPercent: 55, imageRect: pituitaryRect },
        { id: 'ParsDistalisbtn1', topPercent: 20, leftPercent: 30, imageRect: parsDistalisRect },
      ];

      buttons.forEach(button => {
        const btn = document.getElementById(button.id);
        if (!btn) return;

        const top = (button.imageRect.height * button.topPercent) / 100;
        const left = (button.imageRect.width * button.leftPercent) / 100;

        btn.style.top = `${button.imageRect.top + top}px`;
        btn.style.left = `${button.imageRect.left + left}px`;
      });
    };

    window.addEventListener('resize', adjustButtonPositions);
    adjustButtonPositions(); // Initial call to set positions

    return () => window.removeEventListener('resize', adjustButtonPositions);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Pituitary Gland</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img
              src="/assets/Images/Pituitary/Pituitary Low Magnification.png"
              alt="Pituitary"
              id="pituitaryImage"
              ref={pituitaryImageRef}
              style={{ width: '100%', height: 'auto' }}
            />
            <button className="AllButtons" data-tooltip="Pars Nervosa" id="Pituitarybtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Pituitary/Pars Nervosa.png', 'The Hypothalamo-hypophyseal tract comprises of non-myelinated nerve fibres which extend from their cell bodies located in the supraoptic and paraventricular nuclei of hypothalamus to the hypophysis cerebri (pituitary gland). <br/>The supraoptic nucleus of hypothalamus produces Anti-diuretic Hormone while the paraventricular nucleus produces Oxytonin hormone. <br/>These hormones are termed neurosecretions.The secretions get accumulated at the terminal, bulb like enlargements called as Herring bodies, which cannot be identified in a Haematoxylin-Eosin stained slide.', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Pars Intermedia" id="Pituitarybtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Pituitary/Pars Intermedia.png', '<strong>The Pars Intermedia</strong> is rudimentary in human beings. It consists of colloid filled vesicles which are remnants of Rathke’s pouch. The vesicles are lined by low columnar basophilic epithelium. The vesicles contain an eosinophilic colloid of unknown function. In animals, Pars Intermedia is well developed and contains special type of Basophils called Melanotropes which secrete Melanotropic stimulating Hormone.', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Pars Distalis" id="Pituitarybtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Pituitary/Pars Distalis.png', 'The pars anterior is covered by a capsule which is derived from the inner layer of dura mater. <br/>It contains cords of cells which branch and anastomose. The cells are supported by a thin basement membrane which is made of reticular tissue. <br/>Two types of cells are found in pars anterior -<br/>&emsp;<strong>i. Chromophobes</strong> - It makes up 50% of the cell population of pars anterior.<br/><strong>&emsp;ii. Chromophils</strong> - consists of two further subtypes of cells, acidophils (35%) and basophils (15%).', '#', true)}>3</button>
            <button className="AllButtons" data-tooltip="Acidophil" id="Pituitarybtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Pituitary/Acidophils.png', '<strong>Acidophils</strong> as the name suggests take up a dark, eosinophilic stain. These are round cells occurring either singly or in groups. The cells show a dark, round and vesicular nucleus. They show coarse granules within the cytoplasm.<br/> Acidophils are of two further types -<br/>&emsp; <strong>i. Somatotropes</strong> - Somatotropes secrete growth hormone which is required for the growth of the body, especially the growth of bones. <br/>&emsp; <strong>ii. Mammotropes</strong> - Mammotropes secrete Prolactin which is required for growth of mammary gland and secretion of milk.', '#')}>4</button>
            <button className="AllButtons" data-tooltip="Basophil" id="Pituitarybtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Pituitary/Basophils.png', '<strong>Basophils</strong> are larger than acidophils. The cells are oval to round in shape and contain a central, vesicular nucleus. They take up basic stains. Their cytoplasm shows fine granules. Basophils are of three subtypes – Corticotropes, Thyrotropes and Gonadotropes. Corticotropes secrete Adrenocorticotrophic hormone, Thyrotropes secrete Thyroid stimulating hormone. Gonadotropes secrete Follicle stimulating hormone and Luteinising hormone.', '#')}>5</button>
            <button className="AllButtons" data-tooltip="Chromophobe" id="Pituitarybtn6" data-popup="popup6" onClick={() => openPopup1('/assets/Images/Pituitary/Chromophobe.png', '<strong>Chromophobes</strong> are so called as their cytoplasm do not stain with any classic dyes. The cells are very small in size and occur in groups.  The cells have distinct nuclei and scanty cytoplasm giving the appearance of “naked nuclei”. Chromophobes are considered to be precursors of chromophils. They are also considered as degranulated chromophil cells.', '#')}>6</button>
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
            data-tooltip="Elastic Cartilage"
            onClick={handleNext}
            disabled={true}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="Container2">
          <a href='#' className="image-cell"  style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Pituitary Gland</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Pituitary/Pituitary Panaromic.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Panaromic View of Pituitary Gland</u></strong></a>
          <ol style = {{textAlign : 'left', marginLeft : '20px'}}>
            <strong><u>Identifying features:</u></strong>
            <li>Connective Tissue Capsule</li>
            <li>Three parts visualized are :-</li>
            <strong>&emsp;Pars Anterior</strong> - cords/ clumps of cells present (chromophils- acidophils, basophils and chromophobes)<br/>
            <strong>&emsp;Pars Intermedia</strong>- colloid filled follicles lined by basophils.<br/>
            <strong>&emsp;Pars Posterior</strong> - nerve fibers with pituicytes present large number of capillaries and sinusoids present
            <li>Large number of capillaries and sinusoids are present</li>
            </ol>
            
        </div>

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup('overlay')}>&times;</button>
          <div className="popup-content">
            <img id="popupImage" className="popup-image" src="" alt="Pop-up Image" ref={parsDistalisImageRef} style={{ width: '100%', height: 'auto' }} />
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
              <button className="AllButtons" data-tooltip="Acidophils" id="Pituitarybtn7" data-popup="popup5" onClick={() => openPopup('/assets/Images/Pituitary/Acidophils.png', '<strong>Acidophils</strong> as the name suggests take up a dark, eosinophilic stain. These are round cells occurring either singly or in groups. The cells show a dark, round and vesicular nucleus. They show coarse granules within the cytoplasm.<br/> Acidophils are of two further types -<br/>&emsp; <strong>i. Somatotropes</strong> - Somatotropes secrete growth hormone which is required for the growth of the body, especially the growth of bones. <br/>&emsp; <strong>ii. Mammotropes</strong> - Mammotropes secrete Prolactin which is required for growth of mammary gland and secretion of milk.', '#')}>1</button>
              <button className="AllButtons" data-tooltip="Basophil" id="Pituitarybtn8" data-popup="popup6" onClick={() => openPopup('/assets/Images/Pituitary/Basophils.png', '<strong>Basophils</strong> are larger than acidophils. The cells are oval to round in shape and contain a central, vesicular nucleus. They take up basic stains. Their cytoplasm shows fine granules. Basophils are of three subtypes – Corticotropes, Thyrotropes and Gonadotropes. Corticotropes secrete Adrenocorticotrophic hormone, Thyrotropes secrete Thyroid stimulating hormone. Gonadotropes secrete Follicle stimulating hormone and Luteinising hormone.', '#')}>2</button>
              <button className="AllButtons" data-tooltip="Chromophobe" id="Pituitarybtn9" data-popup="popup7" onClick={() => openPopup('/assets/Images/Pituitary/Chromophobe.png', '<strong>Chromophobes</strong> are so called as their cytoplasm do not stain with any classic dyes. The cells are very small in size and occur in groups.  The cells have distinct nuclei and scanty cytoplasm giving the appearance of “naked nuclei”. Chromophobes are considered to be precursors of chromophils. They are also considered as degranulated chromophil cells.', '#')}>3</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Pituitary;
