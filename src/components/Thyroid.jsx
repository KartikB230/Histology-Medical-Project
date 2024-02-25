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

  
  function openPopup1(imagePath, descriptionText, audioPath) {
    // Set the source of the pop-up image
    document.getElementById('popupImage').src = imagePath;

    // Set the source of the pop-up audio
    document.getElementById('popupAudio').src = audioPath;

    console.log(descriptionText)
    // Set the description text
    document.getElementById('popupInfo').innerHTML = descriptionText;

    // Display the overlay
    document.getElementById('overlay').style.display = 'flex';
}


 
  // Function to close popup
  function closePopup() {
    // Hide the overlay
    document.getElementById('overlay').style.display = 'none';

    // Pause the audio when closing the pop-up
    document.getElementById('popupAudio').pause();
}


  // Toggle button visibility
  function toggleButtons() {
    const buttonSet = document.getElementById('buttons');
    buttonSet.style.display = buttonSet.style.display === 'none' ? 'block' : 'none';
    setButtonClicked(!buttonClicked); // Toggle the state of buttonClicked
  }
  
  return (
    <>
      <Navbar/>
      
      <div className='box'>
      <div class="heading">
        <h1>Thyroid</h1><hr/>
      </div>
        
        <div id="labels" className="labels">

          <div className="img">
              <img className="imgg" src="/assets/Updated_thyroid.png" alt="Thyroid" />
              <button id="toggleButton" data-tooltip = "Show/Hide labels" className="toggle-button" onClick={toggleButtons}>
                  {buttonClicked ? <img src="/assets/on.png" alt="afterClick" /> : <img src="/assets/off.png" alt="beforeClick" />}
              </button>
            <div className='description'>
                <p>
                  The thyroid, or thyroid gland, is an endocrine gland in vertebrates. In humans, it is in the neck and consists of two connected lobes. The lower two thirds of 
                  the lobes are connected by a thin band of tissue called the isthmus. The thyroid gland is a butterfly-shaped gland located in the neck below the Adam's apple. 
                  Microscopically, the functional unit of the thyroid gland is the spherical thyroid follicle, lined with follicular cells (thyrocytes), and occasional 
                  parafollicular cells that surround a lumen containing colloid.
                </p>
            </div>
          </div>
          <div id = "buttons">
            <button className="button1" data-tooltip="Follicles" data-popup="popup1" onClick={() => openPopup1('/assets/Connective_Tissue_Septa.png', 'Follicles are the basic structural units of the thyroid gland. Each lobule contains many closely packed follicles of different size and shapes. The size of the follicle is approximately 150-200 microns. Follicles are round to oval in shape and are lined by simple squamous or cuboidal epithelium. The follicles are filled with colloid. ','/assets/Audios/Thyroid_Follicles.wav')}>1</button>
            <button className="button2" data-tooltip="Connective Tissue septa" data-popup = "popup2" onClick={() => openPopup1('/assets/Connective_Tissue_Septa.png','The gland shows a thin capsule. Thin septae extend from the capsule into the substance of the gland and divide it into lobules. ','/assets/Audios/Connective_tissue_septa.wav')}>2</button>
            <button className="button3" data-tooltip="Blood Vessels" data-popup = "popup3" onClick={() => openPopup1('#','There is very little intralobular connective tissue (follicles are packed). The interlobular and intralobular connective tissue is thin and contains many capillaries.','#')}>3</button>
            <button className="button4" data-tooltip="Follicular cells (Simple cuboidal epithelium)" data-popup = "popup4" onClick={() => openPopup1('/assets/Follicular_cells.png','The lining epithelium of the follicles shows cuboidal cells which stain eosinophilic. These cells have a vesicular round nucleus. They constitute the principal secretory cells of thyroid which synthesize thyroglobulin.','/assets/Audios/Follicular_cells.wav' )}>4</button>
            <button className="button5" data-tooltip="Parafollicular or C cells " data-popup = "popup5" onClick={() => openPopup1('/assets/Parafollicular_Cells.png','These cells constitute about 2% of the thyroid gland. The cells are called as clear cells because the cytoplasm is not stained. The cells are large and occur either singly or in groups of 2 or 3. They are usually situated between the basement membrane and the cubical epithelium. They secrete calcitonin.','/assets/Audios/Parafollicular_cells.wav')}>5</button>
            <button className="button6" data-tooltip="Colloid" data-popup = "popup6" onClick={() => openPopup1('/assets/Follicular_cells.png','The lumen of the thyroid follicle is large and contains colloid which is stained eosinophilic It is made of a glycoprotein complex, also known as thyroglobulin. The colloid stains with both acidic and basic dyes. It is strongly PAS positive. ','/assets/Audios/Colloid.wav')}>6</button>
          </div>
        </div>
        
        
    {/* < Pop-up overlay */}
    <div id="overlay" class="overlay" >
    <button className="close-button" onClick={() => closePopup('overlay')}>&times;</button>
    <div className="popup-content">
        <img id="popupImage" className="popup-image" src="" alt="Pop-up Image"/>
        <div>
        <p id="popupInfo"></p>
        </div>
        <div className="audio-container">
         
            <audio controls id="popupAudio">
                <source src="" type="audio/wav"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</div>
</div>
    </>
  );
}

export default Thyroid;



