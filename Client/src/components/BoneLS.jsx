import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons, openPopup } from './script';

function BoneLS() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Ground Bone LS - Haversian Canal</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Bone/Ground Bone LS Low Magnification.jpg" alt="Dense Regular Tissue" />
            <button className="AllButtons" data-tooltip="Volkmann's Canal" id="LSbtn1" data-popup="popup1">1</button>
            <button className="AllButtons" data-tooltip="Haversian Canal" id="LSbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Bone/Haversian Canal LS.jpg','<p><strong><span style="text-decoration: underline;">Haversian System:</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Central – Haversian canal through which nerves and vessels traverse.</li><li>Concentric lamellae surround the Haversian canal.</li><li>In between the lamellae, the osteocytes get trapped within lacunae.</li><li>Osteocytes have canaliculi which are processes to connect with the neighboring osteocytes.<br/>They connect the haversian canals to the dependent osteocytes, endosteal lamella and interstitial lamellae</li><li>Long axis of osteon is parallel to the long axis of the bone.</li><li>Canals connecting two haversian canals are called as Volkmann’s canals.</li></ul>','')}>2</button>
            <button className="AllButtons" data-tooltip="Lamellae" id="LSbtn3" data-popup="popup3">3</button>
            <button className="AllButtons" data-tooltip="Osteocyte" id="LSbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Bone/Osteocyte LS.jpg','<p><strong><span style="text-decoration: underline;">Osteocytes:</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>lies in lacunae.</li><li>show radiating processes called canaliculi.</li><li>Smaller in size than osteoblasts.</li><li>Have the ability to synthesize the matrix.</li></ul>','')}>4</button>
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

        <div className="Container2">
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Bone/Ground Bone LS Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <strong><u>Click Here to view Pencil Diagram of Ground Bone LS</u></strong>
          </a>

          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
            <li>Longitudinally running haversian canals.</li>
            <li>Concentric lamellae surround the Haversian canal.</li>
            <li>Within lamellae are osteocytes present within lacunae.</li>
            <li>Canaliculi seen connecting the osteocytes and haversian canal.</li>
            <li>Volkmann’s canals are present connecting the haversian canals.</li>
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
        <Footer />
      </div>
    </>
  );
}

export default BoneLS;
