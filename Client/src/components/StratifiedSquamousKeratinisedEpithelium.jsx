import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function StratifiedSquamousKeratinisedEpithelium() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Stratified Squamous Keratinised Epithelium </h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="assets\Images\Epithelium\Stratified Squamous Keratinised Epithelium Low Magnification.jpg" alt="Stratified Squamous Keratinised Epithelium" />
            <button className="AllButtons" data-tooltip="Stratified Squamous Keratinised Epithelium - High Magnification" id="Keratinisedbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Stratified Squamous Keratinised Epithelium High Magnification.png', '#', '#')}>1</button>
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
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Stratified Squamous Keratinised Epithelium Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Stratified Squamous Keratinised Epithelium</u></strong></a>
          <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
            <li>It is made up of many cell layers.</li>
            <li>There is a basal columnar cell layer, above which,  are cuboidal or polyhedral cells. As we proceed towards the surface, the cells get more and more flat. The superficial layer is made up of flat squamous cells. </li>
            <li>Stratified Squamous Non-Keratinised Epithelium - where only above mentioned cell layers are present. Keratin layer is absent. It is also known as moist epithelium.</li>
            <li>Present at places where there is friction, constant wear and tear is going on.</li>
            <li>Examples - Oral Mucosa, Lip, Oesophagus, Cornea</li>
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
      </div>
      <Footer/>
    </>
  );
}

export default StratifiedSquamousKeratinisedEpithelium;
