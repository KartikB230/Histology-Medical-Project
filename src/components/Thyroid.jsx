import React, { useState } from 'react';
import '../thyroid.css'; // Import your CSS file
import Navbar from './Navbar';

function Thyroid() {
  // State variables for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [audioSrc, setAudioSrc] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  // Function to open modal
  function openModal(imagePath, desc, audioPath) {
    setModalOpen(true);
    setModalImage(imagePath);
    setModalDescription(desc);
    setAudioSrc(audioPath);
  }

  // Function to close modal
  function closeModal() {
    setModalOpen(false);
  }

  // Function to open popup
  function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
  }

  // Function to close popup
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }

  // Toggle button visibility
  function toggleButtons() {
    const buttonSet = document.getElementById('labels');
    buttonSet.style.display = buttonSet.style.display === 'none' ? 'block' : 'none';
    setButtonClicked(!buttonClicked); // Toggle the state of buttonClicked
  }

  function handleImageClick(event) {
    // Prevent default behavior (e.g., navigation) and event propagation
    // event.preventDefault();
    event.stopPropagation();
  }
  return (
    <>
    <Navbar/>
    <div class="heading">
      <h1>Thyroid</h1><hr/>
    </div>
    
    
    <div >
      
      <div id="labels" className="labels">

      <div className="img">
        <img className="img" src="/assets/Updated_thyroid.png" alt="Thyroid" />
      </div>
        <button className="button1" data-tooltip="Follicles" data-popup="popup1" onClick={() => openPopup('popup1')}>1</button>
        <button className="button2" data-tooltip="Connective Tissue septa" data-popup = "popup2" onClick={() => openPopup('popup2')}>2</button>
        <button className="button3" data-tooltip="Blood Vessels" data-popup = "popup3" onClick={() => openPopup('popup3')}>3</button>
        <button className="button4" data-tooltip="Follicular cells (Simple cuboidal epithelium)" data-popup = "popup4" onClick={() => openPopup('popup4')}>4</button>
        <button className="button5" data-tooltip="Parafollicular or C cells " data-popup = "popup5" onClick={() => openPopup('popup5')}>5</button>
        <button className="button6" data-tooltip="Colloid" data-popup = "popup6" onClick={() => openPopup('popup6')}>6</button>
        
      </div>

      
      <div id="popup1" className="popup">
        <button className="close-button" onClick={() => closePopup('popup1')}>&times;</button>
        <img src="/assets/Follicles_high_magnification.tif" onClick={() => openModal('/assets/Follicles_high_magnification.tif', 'Follicles', '/assets/Audios/Thyroid_Follicles.wav')} height="500px" width="500px" alt="Follicles" />
        <div className="description">Follicles are the basic structural units of the thyroid gland...</div>
        <audio controls>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div id="popup2" className="popup">
            <button className="close-button" onClick={() => closePopup('popup2')}>&times;</button>
            <img src="/assets/Connective_Tissue_Septa_Colloid.tif" onClick={() => openModal('popup2', '/assets/Connective_Tissue_Septa_Colloid.tif', 'Connective Tissue septa')} height="500px" width="500px" alt = "Connective Tissue septa"/>
            <div className="description">The gland shows a thin capsule. Thin septae extend from the capsule into the substance of the gland and divide it into lobules.</div>
            <audio controls>
                <source src="/assets/Audios/Connective_tissue _septa.wav" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
        <div id="popup3" className="popup">
            <button className="close-button" onClick={() => closePopup('popup3')}>&times;</button>
            {/* <img src="/assets/Follicles_high_magnification.tif" onClick="openModal('popup3', '/assets/Follicles_high_magnification.tif', 'Connective Tissue septa')" height="500px" width="500px"> */}
            <div className="description">There is very little intralobular connective tissue (follicles are packed). The interlobular and intralobular connective tissue is thin and contains many capillaries.</div>
            <audio controls>
                <source src="/assets/Audios/Connective_tissue _septa.wav" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
        <div id="popup4" className="popup">
            <button className="close-button" onClick={() => closePopup('popup4')}>&times;</button>
            <img src="/assets/Follicular_cells_parafollicular_cells.tif" onClick={() => openModal('popup4', '/assets/Follicular_cells_parafollicular_cells.tif', 'Follicular cells')} height="500px" width="500px" alt = "Follicular cells"/>
            <div className="description">The lining epithelium of the follicles shows cuboidal cells which stain eosinophilic. These cells have a vesicular round nucleus. They constitute the principal secretory cells of thyroid which synthesize thyroglobulin. </div>
            <audio controls>
                <source src="/assets/Audios/Follicular_cells.wav" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
        <div id="popup5" className="popup">
            <button className="close-button" onClick={() => closePopup('popup5')}>&times;</button>
            <img src="/assets/Follicular_cells_parafollicular_cells.tif" onClick={() => openModal('popup5', '/assets/Follicular_cells_parafollicular_cells.tif', 'Parafollicular Cells')} height="500px" width="500px" alt = "Parafollicular Cells"/>
            <div className="description">These cells constitute about 2% of the thyroid gland. The cells are called as clear cells because the cytoplasm is not stained. The cells are large and occur either singly or in groups of 2 or 3. They are usually situated between the basement membrane and the cubical epithelium. They secrete calcitonin.</div>
            <audio controls>
                <source src="/assets/Audios/Parafollicular_cells.wav" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
        <div id="popup6" className="popup">
            <button className="close-button" onClick={() => closePopup('popup6')}>&times;</button>
            <img src="/assets/Connective_Tissue_Septa_Colloid.tif" onClick={() => openModal('popup6', '/assets/Connective_Tissue_Septa_Colloid.tif', 'Colloid')} height="500px" width="500px" alt = "Colloid"/>
            <div className="description">The lumen of the thyroid follicle is large and contains colloid which is stained eosinophilic It is made of a glycoprotein complex, also known as thyroglobulin. The colloid stains with both acidic and basic dyes. It is strongly PAS positive. </div>
            <audio controls>
                <source src="/assets/Audios/Colloid.wav" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>



      
      
      {/* Modal */}
      {/* {modalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Modal" onClick={(e) => e.stopPropagation()}/>
          <div className="modal-description">{modalDescription}</div>
        </div> */}
      {/* )} */}
    </div>
    </>
  );
}

export default Thyroid;



/*{ <button id="toggleButton" className="toggle-button" onClick={toggleButtons}>
          {buttonClicked ? <img src="/assets/on.png" alt="afterClick" /> : <img src="/assets/off.png" alt="beforeClick" />}
      </button>
      }*/