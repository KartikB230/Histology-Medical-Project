import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function ElasticArtery() {
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
          
          <h1>Large Elastic Artery</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Blood Vessel/Elastic Artery Low Magnification.jpg" alt="Thyroid" />
            <button className="AllButtons" data-tooltip="Tunica Intima" id="EAbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Blood Vessel/Elastic Artery Tunica Intima.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Intima</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Includes endothelium and subendothelial connective tissue. </li><li>The internal elastic lamina is present but not prominent (Tunica media contains elastic fibres, hence internal elastic lamina and external elastic lamina which also contain elastic fibres become indistinguishable).</li></ul>', '#')}>1</button>
            <button className="AllButtons" data-tooltip="Tunica Media" id="EAbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Blood Vessel/Elastic Artery Tunica Media.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Media</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>Thickest layer.</li><li>Thickness of Tunica media in comparison to Tunica adventitia is 3 : 1</li><li>Concentrically arranged layers of elastic fibres (almost 40-60 layers thick)</li><li>Scattered among them are some smooth muscle cells and reticular fibres.</li></ul>', '#')}>2</button>
            <button className="AllButtons" data-tooltip="Tunica Adventitia" id="EAbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Blood Vessel/Elastic Artery Tunica Adventitia.jpg', '<p><strong><span style="text-decoration: underline;">Tunica Adventitia</span></strong></p><ul style="list-style-type: disc; padding-left: 20px;"><li>External elastic lamina is present but not prominent. </li><li>Made of longitudinally arranged collagenous tissue and a few elastic fibres. </li><li>These components gradually merge into the loose connective tissue surrounding the vessels.</li><li>It contains vasa vasorum and nerve vascularis</li><li><strong>Examples:</strong> aorta, pulmonary trunk, their main branches – brachiocephalic trunk, common carotid, subclavian, common iliac arteries</li></ul>', '#')}>3</button>
            
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
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Thyroid/Thyroid Pencil diagram without labels.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Thyroid</u></strong></a>
          <p>
            The thyroid, or thyroid gland, is an endocrine gland in vertebrates. In humans, it is in the neck and consists of two connected lobes. The lower two thirds of
            the lobes are connected by a thin band of tissue called the isthmus. The thyroid gland is a butterfly-shaped gland located in the neck below the Adam's apple.
            Microscopically, the functional unit of the thyroid gland is the spherical thyroid follicle, lined with follicular cells (thyrocytes), and occasional
            parafollicular cells that surround a lumen containing colloid.
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
            <div id="additionalButtons" className="additional-buttons">
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default ElasticArtery;
