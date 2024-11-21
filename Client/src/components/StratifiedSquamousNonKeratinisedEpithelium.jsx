import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function StratifiedSquamousNonKeratinisedEpithelium() {
  const [buttonClicked, setButtonClicked] = useState(false);

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
          <h1>Stratified Squamous Non - Keratinised Epithelium </h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="assets\Images\Epithelium\Stratified Squamous Non-Keratinised Low Magnification.png" alt="Stratified Squamous Keratinised Epithelium" />
            <button className="AllButtons" data-tooltip="Stratified Squamous Non-Keratinised Epithelium - High Magnification" id="NonKeratinisedbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Stratified Squamous Non-Keratinised High Magnification.PNG', '#', '#')}>1</button>
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
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Stratified Squamous Non-Keratinised Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Stratified Squamous Non - Keratinised Epithelium</u></strong></a>
          <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft: '20px' }}>
            <li>It is made up of many cell layers.</li>
            <li>There is a basal columnar cell layer, above which,  are cuboidal or polyhedral cells. As we proceed towards the surface, the cells get more and more flat. The superficial layer is made up of flat squamous cells.</li>
            <li><strong>Stratified Squamous Keratinised Epithelium - </strong>It has a layer of keratin(dead cells) above the cell   layers. The superficial cells die, loose their nuclei and form keratin.</li>
            <li>Present at places where there is friction, constant wear and tear going on.</li>
            <li>Example - Skin</li>

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

export default StratifiedSquamousNonKeratinisedEpithelium;
