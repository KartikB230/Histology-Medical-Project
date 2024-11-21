import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function SimpleColumnarEpithelium() {
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
          <h1>Simple Columnar Epithelium</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="assets/Images/Epithelium/Simple Columnar Low Magnification.jpg" alt="Simple Columnar Epithelium" />
            <button className="AllButtons" data-tooltip="Simple Columnar - High Magnification" id="Columnarbtn1" data-popup="popup1" onClick={() => openPopup1('assets/Images/Epithelium/Simple Columnar High Magnification.PNG', '#', '#')}>1</button>
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
          <a href='#' className="image-cell" onClick={() => openPopup1("assets/Images/Epithelium/Simple Columnar Pencil.png")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Simple Columnar Epithelium</u></strong></a>
          <p>
            <ul className='epithelium-list' style={{ listStyleType: 'disc', paddingInlineStart: '20px', marginLeft : '20px' }}>
              <li>It consists of a single layer of tall and elongated cells. The nucleus is located at the base of the cell. The nucleus is elongated vertically.</li>
              <li>It consists of a single layer of tall and elongated cells. The nucleus is located at the base of the cell. The nucleus is elongated vertically.</li>
              <li>The cells show the presence of microvilli at some locations. Microvilli might be regular giving it a striated border or might be irregular described as the brush border.</li>
              <li>Examples: </li>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>Simple columnar – </strong>Stomach fundus, Pylorus, large intestine<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>Simple columnar with regular microvilli (striated border) – </strong>Small intestine<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>Simple columnar with irregular microvilli (brush border) – </strong>Gall bladder.<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<strong>Simple columnar ciliated – </strong>Fallopian tube
              </p>
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

export default SimpleColumnarEpithelium;
