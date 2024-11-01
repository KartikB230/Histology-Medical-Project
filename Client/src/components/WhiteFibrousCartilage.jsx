import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function WhiteFibrousCartilage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
    <div>
      <Navbar />
        <div className="heading">
          
          <h1>White Fibrous Cartilage</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Cartilage/White Fibrous Cartilage Low Magnification.jpg" alt="White Fibrous Cartilage" />
            <button className="AllButtons" data-tooltip="Chondrocyte" id="Fibrousbtn1" data-popup="popup1" >1</button>
            <button className="AllButtons" data-tooltip="Matrix with Collagen Fibres" id="Fibrousbtn2" data-popup="popup2" >2</button>
            <button className="AllButtons" data-tooltip="Lacuna" id="Fibrousbtn3" data-popup="popup3" >3</button>
            
            
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
        <div className= 'Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Cartilage/White Fibrous Pencil.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of White Fibrous Cartilage</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Cartilage/White Fibrous Cartilage High Magnification.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of White Fibrous Cartilage</u></strong></a>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
          <li>The matrix is basophilic and filled with numerous Type-I collagen bundles.</li>
          <li>The collagen fibre bundles vary in thickness, the bundles branch and branches reunite with each other. This branching pattern gives a feathery appearance to the cartilage.</li>
          <li>Some fibroblasts are present in between bundles.</li>
          <li>Relatively fewer numbers of small lacunae with chondrocytes present between collagen fibre bundles.</li>
          <li>No cell nests are seen.</li>
          <li>The structural composition of this cartilage gives high tensile strength and elasticity to tissue.</li>
          <li>Sites where White Fibro cartilage is present -</li>
          Secondary Cartilaginous Joints, The Articular Discs of Joints, Glenoidal Labrum of shoulder joint, Acetabular labrum of Hip Joint, Intervertebral Discs.

        </ul>
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

export default WhiteFibrousCartilage;
