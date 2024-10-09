import React, { useState } from 'react'; 
import Navbar from './Navbar';
import { openPopup1, closePopup, toggleButtons } from './script';

function Adrenal() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <Navbar />
      <div className='box'>
        <div className="heading">
          <h1>Adrenal Gland</h1>
        </div>
        <hr style={{"height":"10px"}}/>

        <div className="Container1" id="container1"> {/* Add id to the parent container */}
          <div style={{ position: 'relative' }}> {/* Ensure relative positioning for parent container */}
            
            <img src="/assets/Images/Adrenal/Adrenal_Gland.png" alt="Thyroid" />
            <button className="AllButtons" data-tooltip="Zona Glomerulosa" id="Adrenalbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Glomerulose.png', 'Follicles are the basic structural units of the thyroid gland. Each lobule contains many closely packed follicles of different size and shapes. The size of the follicle is approximately 150-200 microns. Follicles are round to oval in shape and are lined by simple squamous or cuboidal epithelium. The follicles are filled with colloid. ', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Zona Fasciculata" id="Adrenalbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Fasciculata.png', 'The gland shows a thin capsule. Thin septae extend from the capsule into the substance of the gland and divide it into lobules. ', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Zona Reticularis" id="Adrenalbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Reticularis.png', 'There is very little interlobular connective tissue (follicles are packed). The interlobular and intralobular connective tissue is thin and contains many capillaries. ', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Capsule" id="Adrenalbtn4" data-popup="popup4" onClick={() => openPopup1('#', 'The lining epithelium of the follicles shows cuboidal cells which stain eosinophilic. These cells have a vesicular round nucleus. They constitute the principal secretory cells of thyroid which synthesize thyroglobulin. ', '#')}>4</button>
            <button className="AllButtons" data-tooltip="Medulla" id="Adrenalbtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Adrenal/Adrenal_Medulla.png', 'These cells constitute about 2% of the thyroid gland. The cells are called as clear cells because the cytoplasm is not stained. The cells are large and occur either singly or in groups of 2 or 3. They are usually situated between the basement membrane and the cubical epithelium. They secrete calcitonin.', '/assets/Audios/Thyroid/Parafollicular_cells.wav')}>5</button>
          </div>
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
        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
          {buttonClicked ? <img src="/assets/on-1.png" alt="afterClick" /> : <img src="/assets/off-1.png" alt="beforeClick" />}
        </button> 

        {/* < Pop-up overlay */}
        <div id="overlay" className="overlay" >
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
      </div>
    </>
  );
}

export default Adrenal;
