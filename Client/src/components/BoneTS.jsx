import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons, openPopup } from './script';

function BoneTS() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonBottomOffset, setButtonBottomOffset] = useState('20px');

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const toggleButton = document.getElementById('toggleButton');

      if (footer && toggleButton) {
        const footerRect = footer.getBoundingClientRect();
        const buttonHeight = toggleButton.offsetHeight;

        if (footerRect.top < window.innerHeight) {
          const offsetAboveFooter = footerRect.height + buttonHeight + 20;
          setButtonBottomOffset(`${offsetAboveFooter}px`);
        } else {
          setButtonBottomOffset('20px');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Ground Bone TS</h1>
        </div>
        <hr className="divider" />

        <div className="Container1" id="container1" style={{ position: 'relative', textAlign: 'center' }}>
          <img src="/assets/Images/Bone/Ground Bone TS Low Magnification.jpg" alt="Bone Tissue" />
          <button className="AllButtons" data-tooltip="Volkmann's Canal" id="TSbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Bone/Volkmann Canal TS.jpg','<p><strong><span style="text-decoration: underline;">Volkmann\'s canal:</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Volkmann’s canals are perpendicular to haversian canals.</li><li>Blood vessels and nutrients from periosteum and endosteum travel through Volkmann’s canals to reach the Haversian canals.</li></ul>','')}>1</button>
            <button className="AllButtons" data-tooltip="Periosteum" id="TSbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Bone/Periosteum TS.jpg',' <p><strong><span style="text-decoration: underline;">Periosteum:</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>a sheath of dense connective tissue</li><li>an outer fibrous layer</li><li>an inner cellular layer containing osteoprogenitor cells.</li><li>The collagen fibres are arranged parallel to the surface of bone.</li><li>When tendons and ligaments attach to bones, the collagen fibres from these structures extend directly but at an angle into the bone tissue, forming <strong>Sharpey’s fibres</strong>.</li></ul>','')}>2</button>
            <button className="AllButtons" data-tooltip="Circumferential lamellae" id="TSbtn3" data-popup="popup3">3</button>
            <button className="AllButtons" data-tooltip="Interstitial lamellae" id="TSbtn4" data-popup="popup4">4</button>
            <button className="AllButtons" data-tooltip="Haversian Canal" id="TSbtn5" data-popup="popup5">5</button>
            <button className="AllButtons" data-tooltip="Osteon (Haversian System)" id="TSbtn6" data-popup="popup6" onClick={() => openPopup1('/assets/Images/Bone/Osteon TS.jpg', '<p><strong><span style="text-decoration: underline;">Haversian System:</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Central – Haversian canal through which nerves and vessels traverse.</li><li>Concentric lamellae surround the Haversian canal.</li><li>In between the lamellae, the osteocytes get trapped within lacunae.</li><li>Osteocytes have canaliculi which are processes to connect with the neighbouring osteocytes. They connect the Haversian canals to the dependent osteocytes, endosteal lamella and interstitial lamellae.</li><li>Long axis of osteon is parallel to the long axis of the bone.</li><li>Canals connecting two Haversian canals are called as Volkmann’s canals.</li></ul>',true)}>6</button>
        </div>

        {/* Toggle Button positioned below the image and centered */}
        <div className="toggle-button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
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
        <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Bone/Ground Bone TS Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Ground Bone TS</u></strong></a>
        <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px', margin: '0' }}>
            <li>a sheath of dense connective tissue</li>
            <li>an outer fibrous layer</li>
            <li>an inner cellular layer containing osteoprogenitor cells.</li>
          </ul>
          <br/>
          <p><strong>Lamellae</strong> -  Collagen fibre bundles running parallel to each other but running in different directions hence giving great strength to the bone.</p>
          Types: 
          <ol style={{ listStyleType: 'numbers', paddingInlineStart: '20px', margin: '0' }}>
            <li><strong>Concentric</strong>- around the Haversian canals</li>
            <li><strong>Interstitial</strong> – between the 2 Haversian systems/ osteons – old lamellae</li>
            <li><strong>Circumferential</strong> –</li>
            <ul>
                <li>Outer – below the periosteum</li>
                <li>Inner – above the endosteum.</li>
            </ul>
          </ol>
        </div>

        <div id="overlay" className="overlay">
          <button className="close-button" onClick={() => closePopup('overlay')}>&times;</button>
          <div className="popup-content">
            <img id="popupImage" className="popup-image" src="" alt="Pop-up Image" />
            <div id="additionalButtons" className="additional-buttons">
              <a href="#" className="image-cell" onClick={() => openPopup('/assets/Images/Connective/Osteocytes Diagram.jpg')} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Osteocytes Diagram</u></strong></a>
            </div>
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
      <Footer />
    </>
  );
}

export default BoneTS;
