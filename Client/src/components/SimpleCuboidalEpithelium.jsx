import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function SimpleCuboidalEpithelium() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
    <div>
      <Navbar />
        <div className="heading">
          
          <h1>Simple Cuboidal Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="assets/Images/Epithelium/Simple Cuboidal Epithelium.jpg" alt="Simple Cuboidal Epithelium" />
            <button className="AllButtons" data-tooltip="Simple Cuboidal - High Magnification" id="Cuboidalbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Simple Cuboidal Epithelium High Magnification.PNG', '#', '#')}>1</button>
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
            <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Simple Cuboidal Epithelium Pencil.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Simple Cuboidal Epithelium</u></strong></a>
            <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
              <li>It is made of single layer of cells whose height and width are equal. A round nucleus is located in the center of each cell. </li>
              <li>It has secretory role. </li>
              <li>Example: PCT and DCT of Kidney, Thyroid Follicles, Ducts of many glands, Germinal epithelium of ovary</li>
            </ul>
            </p>
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

export default SimpleCuboidalEpithelium;
