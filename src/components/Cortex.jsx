import React, { useState } from 'react';
import '../thyroid.css'; // Import your CSS file
import Navbar from './Navbar';

function Cortex() {

  const [buttonClicked, setButtonClicked] = useState(false);


function openPopup1(imagePath, descriptionText, audioPath) {
    // Reset the popup content
    resetPopup();

    // Set the source of the pop-up image if a valid imagePath is provided
    if (imagePath && imagePath !== '#') {
        document.getElementById('popupImage').src = imagePath;
        document.getElementById('popupImage').style.display = 'block'; // Show the image container
    }

    // Set the description text if provided and not equal to '#'
    if (descriptionText && descriptionText !== '#') {
        document.getElementById('popupInfo').innerHTML = descriptionText;
        document.getElementById('popupInfo').style.display = 'block'; // Show the description container
    }

    // Set the source of the pop-up audio if a valid audioPath is provided
    if (audioPath && audioPath !== '#') {
        document.getElementById('popupAudio').src = audioPath;
        document.getElementById('popupAudio').style.display = 'block'; // Show the audio container
    }

    // Display the overlay
    document.getElementById('overlay').style.display = 'flex';
}

function resetPopup() {
    // Reset the image source
    document.getElementById('popupImage').src = '';
    // Reset the description text
    document.getElementById('popupInfo').innerHTML = '';
    // Reset the audio source
    document.getElementById('popupAudio').src = '';

    // Hide all components initially
    document.getElementById('popupImage').style.display = 'none';
    document.getElementById('popupInfo').style.display = 'none';
    document.getElementById('popupAudio').style.display = 'none';
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
      <Navbar />
      <div className='box'>
        <div class="heading">
          <h1 style={{"margin":"10px"}}>Kidney-Cortex</h1><hr style={{"height":"10px"}}/>
        </div>

        <div id="labels" className="labels">

          <div className="img">
            <img src="/assets/Images/Kidney/Cortex.png" alt="Thyroid" />
            <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={toggleButtons}>
              {buttonClicked ? <img src="/assets/on.png" alt="afterClick" /> : <img src="/assets/off.png" alt="beforeClick" />}
            </button>
            <div className='description'>
            <a href = '#' className="image-cell" onClick={() => openPopup1("/assets/Images/Thyroid/Thyroid Pencil diagram without labels.jpg")} style={{"display":"flex","justifyContent":"center","marginBottom":"10px"}}>
              <strong><u>Click Here to view Pencil Diagram of Thyroid</u></strong>
            </a>
              <p>
              Cortex is the dark coloured outer portion of the kidney. The cortex or the Cortical labrynth consists of Glomerulus, Bowman’s Capsule, PCT and DCT. 
              These elements give the cortex a granular appearance. There are striations seen in the outer part of cortex called Medullary rays.  
              Medullary rays are extensions (or projections) of inner medulla into the outer cortex. Medullary rays contain collecting tubules and therefore have striated appearance. 

              </p>
            </div>
          </div>
          <div id="buttons">
            <button className="button1" data-tooltip="Follicles" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Thyroid/Connective_Tissue_Septa.png', 'Follicles are the basic structural units of the thyroid gland. Each lobule contains many closely packed follicles of different size and shapes. The size of the follicle is approximately 150-200 microns. Follicles are round to oval in shape and are lined by simple squamous or cuboidal epithelium. The follicles are filled with colloid. ', '/assets/Audios/Thyroid/Thyroid_Follicles.wav')}>1</button>
            <button className="button2" data-tooltip="Connective Tissue septa" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Thyroid/Connective_Tissue_Septa.png', 'The gland shows a thin capsule. Thin septae extend from the capsule into the substance of the gland and divide it into lobules. ', '/assets/Audios/Thyroid/Connective_tissue_septa.wav')}>2</button>
            <button className="button3" data-tooltip="Blood Vessels" data-popup="popup3" onClick={() => openPopup1('#', 'There is very little intralobular connective tissue (follicles are packed). The interlobular and intralobular connective tissue is thin and contains many capillaries.', '#')}>3</button>
            <button className="button4" data-tooltip="Follicular cells (Simple cuboidal epithelium)" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Thyroid/Follicular_cells.png', 'The lining epithelium of the follicles shows cuboidal cells which stain eosinophilic. These cells have a vesicular round nucleus. They constitute the principal secretory cells of thyroid which synthesize thyroglobulin.', '/assets/Audios/Thyroid/Follicular_cells.wav')}>4</button>
            <button className="button5" data-tooltip="Parafollicular or C cells " data-popup="popup5" onClick={() => openPopup1('/assets/Images/Thyroid/Parafollicular_Cells.png', 'These cells constitute about 2% of the thyroid gland. The cells are called as clear cells because the cytoplasm is not stained. The cells are large and occur either singly or in groups of 2 or 3. They are usually situated between the basement membrane and the cubical epithelium. They secrete calcitonin.', '/assets/Audios/Thyroid/Parafollicular_cells.wav')}>5</button>
            
          </div>
        </div>


        {/* < Pop-up overlay */}
        <div id="overlay" class="overlay" >
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
export default Cortex;


