import React, { useState } from 'react';
import Navbar from './Navbar';
import { openPopup1, closePopup, toggleButtons } from './script';

function ElasticCartilage() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [activeTheory, setActiveTheory] = useState('Hyaline'); // Track the active theory

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Elastic Cartilage</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Cartilage/Elastic Cartilage Low Magnification.jpg" alt="Elastic Cartilage" />
            <button className="AllButtons" data-tooltip="Perichondrium" id="Elasticbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Cartilage/Elastic Perichondrium.png', '#', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Matrix with Elastic Fibres" id="Elasticbtn2" data-popup="popup2">2</button>
            <button className="AllButtons" data-tooltip="Lacunae" id="Elasticbtn3" data-popup="popup3">3</button>
            <button className="AllButtons" data-tooltip="Chondrocytes" id="Elasticbtn4" data-popup="popup4">4</button>
          </div>
        </div>

        <div className="Container2">
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Cartilage/Elastic Pencil.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Elastic Cartilage</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Cartilage/Elastic Cartilage High Magnification.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Elastic Cartilage</u></strong></a>
          {/* Buttons to switch between Hyaline and Articular Cartilage */}
          <div className="theory-switch-buttons">
            <button
              className={activeTheory === 'Hyaline' ? 'active' : ''}
              onClick={() => setActiveTheory('Hyaline')}
            >
              Typical Hyaline Cartilage
            </button>
            <button
              className={activeTheory === 'Articular' ? 'active' : ''}
              onClick={() => setActiveTheory('Articular')}
            >
              Articular Cartilage
            </button>
          </div>
          {/* Conditionally render content based on the active theory */}
          {activeTheory === 'Hyaline' ? (
            <ul>
              <li>Perichondrium is usually present in the inner cellular layer of perichondrium may not be clearly apparent.</li>
              <li>The cells are larger towards centre, arranged in groups called cell nests.</li>
              <li>The cells are numerous and close together.</li>
              <li>A large number of elastic fibres are seen in the matrix. Since the elastic fibres are present, the tissues macroscopically have a light yellow appearance and hence are called yellow elastic tissue.</li>
              <li>The presence of yellow elastic tissue makes this variety of cartilage very pliable.</li>
              <li>It readily recovers shape after being deformed.</li>
              <li>Sites where Elastic cartilage is present: Ear pinna, wall of medial part of eustachian tube, epiglottis, corniculate and cuneiform cartilages of the larynx, apical parts of arytenoid cartilage.</li>
            </ul>
          ) : (
            <div>
              <p>The perichondrium is not seen in articular cartilage. (Articular cartilage is seen lining the bones taking part in joint formation. So for painless movements, perichondrium is absent because Perichondrium is pain sensitive.)</p>
              <p>The cartilage cells are arranged in 3 layers:</p>
              <ul>
                <li><strong>Outer Horizontal</strong> (The cells in outer layer are small and flattened. The lacunae are horizontally arranged)</li>
                <li><strong>Middle Oblique</strong> (The cells in middle layer are larger, rounded, presently singly or in groups. The lacunae are arranged in oblique rows.)</li>
                <li><strong>Inner Vertical Layer</strong> (The innermost layer contains relatively larger cells. The lacunae are vertically oriented. The innermost layer contains calcified matrix.)</li>
              </ul>
            </div>
          )}
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

export default ElasticCartilage;
