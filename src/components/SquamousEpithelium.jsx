import React, { useState } from 'react';
import Navbar from './Navbar';
import { openPopup1, closePopup, toggleButtons } from './script';

function SquamousEpithelium() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
    <div>
      <Navbar />
        <div className="heading">
          
          <h1>Squamous Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Squamous/simple_squamous_epithelium1.png" alt="SquamousEpithelium" />
            <button className="AllButtons" data-tooltip="Squamous Cells" id="Squamousbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Squamous/Simple squamous pencil diagram.png', 'Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium', '/assets/Audios/Squamous/h1_76 squamous epithelium (1).wav')}>1</button>
          </div>
        </div>

        <div className= 'Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Squamous/Simple squamous pencil diagram.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Squamous Epithelium</u></strong></a>
          <p>Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium
          </p>
        </div>
        <div className="audio-container">
              <audio
                src="/assets/Audios/Squamous/h1_76 squamous epithelium (1).wav"
                controls
                autoPlay={false}
                loop={false}
              />
        </div>

        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={toggleButtons}>
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
          </div>
        </div>

        
      </div>
    </>
  );
}

export default SquamousEpithelium;
