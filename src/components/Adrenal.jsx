import React, { useState } from 'react';
import '../thyroid.css'; // Import your CSS file
import Navbar from './Navbar';

function Adrenal() {

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
          <h1 style={{ "margin": "10px" }}>Adrenal Gland</h1><hr style={{ "height": "10px" }} />
        </div>

        <div id="labels" className="labels">

          <div className="img">
            <img src="/assets/Images/Adrenal/Adrenal_Gland.png" alt="adrenal" style={{ height: '617.6px', width: '1098.4px' }} />
            <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={toggleButtons}>
              {buttonClicked ? <img src="/assets/on.png" alt="afterClick" /> : <img src="/assets/off.png" alt="beforeClick" />}
            </button>
            <div className='description'>
              <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Adrenal/Adrenal_Pencil.png")} style={{ "display": "flex", "justifyContent": "center", "marginBottom": "10px" }}>
                <strong><u>Click Here to view Panaromic view of Adrenal Gland</u></strong>
              </a>
              <p>
                The adrenal gland is a small, triangular-shaped organ located on top of each kidney, responsible for producing hormones such as cortisol, adrenaline, and aldosterone, crucial for regulating metabolism, immune response, and stress response.
              </p>
            </div>
          </div>
          <div id="buttons">
            <button className="Adrenal button1" data-tooltip="Adrenal Medulla " data-popup="popup1" onClick={() => openPopup1('/assets/Images/Adrenal/Adrenal_Medulla.png', 'The medulla has an abundant number of large capillaries and sinusoids. The cells are large, pale staining, columnar with elongated nucleus. The base of the cell is aligned towards the capillary wall and the apex is aligned towards the sinusoids.  The cells contain secretory granules which secrete adrenaline and noradrenaline. ', '#')}>1</button>
            <button className="Adrenal button2" data-tooltip="Zona Reticularis" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Reticularis.png', 'The cells are arranged in anastamosing cords. These cords branch and anastamose. In between the cords, there are plenty of sinusoidal capillaries. The cells of zona reticularis are small, polygonal and dark eosinophilic. The nuclei are very much condensed and dark - described as shrunken - pyknotic-nuclei. The zona reticularis was earlier referred to as the ‘graveyard of the cortex’ due to the presence of these pyknotic nuclei.Zona reticularis secretes sex corticoids - mainly androgens.', '#')}>2</button>
            <button className="Adrenal button3" data-tooltip="Zona Fasciculata" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Fasciculata.png', 'The capillaries in this layer are longitudinally placed. The cells are arranged in longitudinal columns - usually two cell thick. The cells are large, pale, polygonal cells. The nucleus is in the central part of the cell and is vesicular. The cells contain an abundant amount of lipid droplets which disappear during processing and hence the cells give a vacuolated appearance. The cells in zona fasciculata are also called as spongioblasts. Zona fasciculata secretes glucocorticoids concerned with carbohydrate metabolism. ', '#')}>3</button>
            <button className="Adrenal button4" data-tooltip="Zona Glomerulosa" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Adrenal/Zona_Glomerulose.png', ' The cells are arranged in cords in the form of arcades. These arcades are inverted U shaped. The cells are low columnar, light eosinophilic or basophilic. Nucleus is round and dark. In between these arcades, there are capillaries. These cells  secrete mineralocorticoids, the main potent component being Aldosterone. It influences the Na+, K+ and water balance, therefore it is important for maintenance of blood pressure', '#')}>4</button>
            <button className="Adrenal button5" data-tooltip="Capsule" data-popup="popup5">5</button>

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
export default Adrenal;



