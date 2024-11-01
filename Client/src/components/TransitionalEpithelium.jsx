import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function TransitionalEpithelium() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Transitional Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="assets\Images\Epithelium\Transitional Epithelium Low Magnification.jpg" alt="Transitional Epithelium Low Magnification" />
            <button className="AllButtons" data-tooltip="Transitional Epithelium - High Magnification" id="Transitionalbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Transitional Epithelium High Magnification.PNG', '#', '#')}>1</button>
          </div>
        </div>
        <div className="toggle-button-container">
          <button
            id="toggleButton"
            data-tooltip="Show/Hide labels"
            className="toggle-button"
            onClick={() => toggleButtons(buttonClicked, setButtonClicked)}
          >
            {buttonClicked ? (
              <img src="/assets/on-1.png" alt="afterClick" className="toggle-image" />
            ) : (
              <img src="/assets/off-1.png" alt="beforeClick" className="toggle-image" />
            )}
          </button>
        </div>
        <div className='Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Transitional Epithelium Relaxed Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Transitional Epithelium Relaxed</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Transitional Epithelium Streched Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Transitional Epithelium Streched</u></strong></a>
          <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
            <li>Transitional Epithelium also known as Urothelium as it is found lining most of the urinary system.</li>
            <li>It is a stratified epithelium having 3 types of cell layers:</li>
            <ol className='epithelium-list'>
              <li>Basal columnar or cuboidal cells</li>
              <li>Polyhedral cells (2-4 cell thick)</li>
              <li>Umbrella shaped cells (1 cell thick)- may be mononucleate or binucleate</li>
            </ol>
            <li> Special features: </li>
            <ol className='epithelium-list'>
              <li>It allows for considerable stretching without damage.</li>
              <li>The superficial cells are covered with special glycoproteins coat which make it impermeable to toxins.</li>
            </ol>
              <li>Examples: Ureter, Urinary bladder, part of urethra</li>
            </ul>
          </p>
        </div>
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
        <Footer/>
      </div>
    </>
  );
}

export default TransitionalEpithelium;
