import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function Arteriole() {
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
          
          <h1>Arteriole</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Blood Vessel/Arteriole Low Magnification.jpg" alt="Arteriole" />
            <button className="AllButtons" data-tooltip="Arteriole" id="Arteriolebtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Blood Vessel/Arteriole High Magnification.jpg', '#', '#')}>1</button>
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
          <ol style = {{textAlign : 'left', marginLeft : '20px'}}>
            <li><strong>Tunica Intima -</strong> The endothelium is similar, gap junctions are present between endothelial cells and smooth muscle cells of tunica media.</li>
            <li><strong>Tunica Media -</strong> Usually have 1-2 muscle layers.</li>
            <ul style = {{textAlign : 'left', listStyle : 'disc'}}>
              <li>The Internal elastic lamina may or may not be present.</li>
              <li>Elastic fibres are absent.</li>
            </ul>
            <li><strong>Tunica Adventitia -</strong> It is a thin, ill defined sheath of connective tissue that blends with the surrounding connective tissues.</li>
            </ol>
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
            <div id="additionalButtons" className="additional-buttons">
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Arteriole;
