import React, { useState, useRef, useEffect } from 'react';
import Navbar from './Navbar';
import { openPopup1, closePopup, toggleButtons } from './script';

function Pituitary() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const pituitaryImageRef = useRef(null);
  const parsDistalisImageRef = useRef(null);

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
            <button className="AllButtons" data-tooltip="Pars Intermedia" id="Pituitarybtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Pituitary/Pars Intermedia.png', 'The Pars Intermedia is rudimentary in human beings. <br/>It consists of colloid filled vesicles which are remnants of Rathke’s pouch. <br/>The vesicles are lined by low columnar basophilic epithelium. <br/>The vesicles contain an eosinophilic colloid of unknown function. <br/>In animals, Pars Intermedia is well developed and contains special type of Basophils called Melanotropes which secrete Melanotropic stimulating Hormone.', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Pars Distalis" id="Pituitarybtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Pituitary/Pars Distalis.png', 'The pars anterior is covered by a capsule which is derived from the inner layer of dura mater. <br/>It contains cords of cells which branch and anastomose. The cells are supported by a thin basement membrane which is made of reticular tissue. <br/>2 types of cells are found in pars anterior -<br/>a. Chromophobes make up 50% of the cell population of pars anterior.<br/>b. Chromophils - consists of two further subtypes of cells, acidophils (35%) and basophils (15%).', '#', true)}>3</button>
            <button className="AllButtons" data-tooltip="Acidophil" id="Pituitarybtn4" data-popup="popup4">4</button>
            <button className="AllButtons" data-tooltip="Basophil" id="Pituitarybtn5" data-popup="popup5">5</button>
            <button className="AllButtons" data-tooltip="Chromophobe" id="Pituitarybtn6" data-popup="popup6">6</button>
          </div>
        </div>

        <div className="Container2">
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Pituitary/")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Pituitary Gland</u></strong></a>
          
          <ol style = {{textAlign : 'left'}}>
            <strong><u>Identifying features:</u></strong>
            <li>Connective Tissue Capsule</li>
            <li>3 parts visualized -</li>
            Pars anterior - cords/ clumps of cells present (chromophils- acidophils, basophils and chromophobes)
            Pars Intermedia- colloid filled follicles lined by basophils.
            Pars Posterior - nerve fibers with pituicytes present
            Large number of capillaries and sinusoids present
            </ol>
        </div>
        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
          {buttonClicked ? <img src="/assets/on-1.png" alt="afterClick" /> : <img src="/assets/off-1.png" alt="beforeClick" />}
        </button>

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
              <button className="AllButtons" data-tooltip="Acidophil" id="Pituitarybtn7" data-popup="popup5">1</button>
              <button className="AllButtons" data-tooltip="Basophil" id="Pituitarybtn8" data-popup="popup6">2</button>
              <button className="AllButtons" data-tooltip="Chromophobe" id="Pituitarybtn9" data-popup="popup5">3</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pituitary;
