import React, { useState } from 'react';
import Navbar from './Navbar';
import { openPopup1, closePopup, toggleButtons } from './script';

function HyalineCartilage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
    <div>
      <Navbar />
        <div className="heading">
          
          <h1>Hyaline Cartilage</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Cartilage/Hyaline Cartilage Low Magnification.jpg" alt="Hyaline Cartilage" />
            <button className="AllButtons" data-tooltip="Territorial Matrix" id="Hyalinebtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Inter-territorial Matrix" id="Hyalinebtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Lacunae" id="Hyalinebtn3" data-popup="popup3" >3</button>
            <button className="AllButtons" data-tooltip="Chondrocytes" id="Hyalinebtn4" data-popup="popup4" >4</button>
            <button className="AllButtons" data-tooltip="Perichondrium" id="Hyalinebtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Cartilage/Hyaline Perichondrium.jpg', '#', '#')}>5</button>
            <button className="AllButtons" data-tooltip="Cell nests" id="Hyalinebtn6" data-popup="popup6" >6</button>
          </div>
        </div>

        <div className= 'Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Hyaline Cartilage</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Cartilage/Hyaline Cartilage High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Hyaline Cartilage</u></strong></a>
          <ul>
            <li>Glass like in appearance.</li>
            <li>Groups of cells are seen together in a single lacuna - that are called isogenous cell nests.</li>
            <li>Distinct Perichondrium is seen.</li>
            <li>Basophilic, homogenous, amorphous and glass like matrix is seen</li>
            <li>The matrix immediately adjacent to cell nests is newly formed and stains deep blue and is called Territorial matrix.</li>
            <li>Interstitial matrix separating the cell nests is pale staining.</li>
            <li>Hyaline cartilage ossifies in old age.</li>
        </ul>
        </div>
       
        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
          {buttonClicked ? <img src="/assets/on-1.png" alt="afterClick" /> : <img src="/assets/off-1.png" alt="beforeClick" />}
        </button>

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
    </>
  );
}

export default HyalineCartilage;
