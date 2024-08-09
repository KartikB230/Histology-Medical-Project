import React, { useState } from 'react';
import Navbar from './Navbar';
import { openPopup1, closePopup, toggleButtons } from './script';

function PseudostratifiedEpithelium() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Pseudostratified Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="assets\Images\Epithelium\Pseudostratified Epithelium Low Magnification.png" alt="Pseudostratified Epithelium Low Magnification" />
            <button className="AllButtons" data-tooltip="Pseudostratified Epithelium - High Magnification" id="Pseudobtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Pseudostratified Epithelium High Magnification.PNG', '#', '#')}>1</button>
          </div>
        </div>
        <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Pseudostratified Epithelium Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Pseudostratified Epithelium</u></strong></a>
        <p>
          <ul className='epithelium-list' style={{ marginTop: '40px' }}>
          <li>The epithelium consists of a single layer of cells. </li>
          <li>The cells are of varying heights and their nuclei are placed at different levels. This epithelium therefore appears stratified which it actually is not.</li>
          <li>It consists of two cell types a) Tall columnar cells b) Short basal cells. </li>
          <li>Basal cells are overlaid by tall superficial cells which maintain their connection with the basement membrane through thin processes. </li>
          <li>Basal cells are stem cells which give rise to other cells.</li>
          <li>It has secretory role. </li>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;<strong>With cilia- </strong>Trachea, Bronchus (Respiratory system) <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<strong>With stereocilia – </strong>Epididymis, Vas Deferens (Male reproductive system)
            </p>
          </ul>
        </p>
        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
          {buttonClicked ? <img src="/assets/on-1.png" alt="afterClick" /> : <img src="/assets/off-1.png" alt="beforeClick" />}
        </button>

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
            <div id="additionalButtons" className="additional-buttons"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PseudostratifiedEpithelium;
