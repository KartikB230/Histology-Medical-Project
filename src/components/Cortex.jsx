import React, { useState } from 'react';
import Navbar from './Navbar';

function Thyroid() {

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


  // Toggle Button

  function toggleButtons() {
    document.querySelectorAll('.AllButtons').forEach(button => {    
        button.style.display = button.style.display === 'none' ? 'block' : 'none';
    });
    setButtonClicked(!buttonClicked); // Toggle the state of buttonClicked
}


  return (
    <>
      <Navbar />
      <div className='box'>
        <div className="heading">
          <h1>Kidney Cortex</h1>
        </div>
        <hr style={{"height":"10px"}}/>

        <div className="Container1" id="container1"> {/* Add id to the parent container */}
          <div style={{ position: 'relative' }}> {/* Ensure relative positioning for parent container */}
            
            <img src="/assets/Images/Kidney/Cortex.png" alt="Thyroid"/>
            <button className="AllButtons" data-tooltip="Capsule" id="Cortexbtn1" data-popup="popup1">1</button>
            <button className="AllButtons" data-tooltip="Glomerulus" id="Cortexbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Kidney/Glomerulus.png', '<strong><u>Glomerulus: </u></strong>The Glomerulus consists of anastomosing tuft of capillaries which appears as a round cellular mass. The endothelial lining of the capillaries is fenestrated. Supporting cells called Mesangial cells lie amongst the capillaries along with their secreted matrix, Mesangium. In addition to support, mesangial cells phagocytose trapped residues and clear the glomerular basement membrane. Mesangial cells respond to both vasoconstrictors like Angiotensin II and vasodilators like Atriopeptides and thus regulate blood flow through the glomerulus. The glomerulus is surrounded by Bowman’s capsule.<br/> <strong><u>Bowmans Capsule: </strong></u>Bowmans capsule has two layers, an outer parietal layer and an inner visceral layer. The visceral layer is in contact with the glomerular capillaries. The visceral layer of Bowman’s capsule is lined by special cells called Podocytes because they have feet like processes or pedicels extending to the wall of capillaries. The parietal layer of Bowman’s capsule is lined by simple squamous flattened epithelium. The glomerulus receives blood through the afferent arteriole and the filtered blood leaves via efferent arteriole located at the vascular pole. The efferent arteriole has a narrower lumen and thicker wall than the afferent arteriole', '/assets/Audios/Kidney/Glomerulus.m4a', '/assets/Audios/Kidney/Bowman_capsule .m4a')}>2</button>
            <button className="AllButtons" data-tooltip="PCT" id="Cortexbtn3" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Kidney/PCT_DCT.png', '<strong><u>Proximal convoluted tubule (PCT):</u></strong> In sections, they appear transversely cut with large and irregularly oval outline. The lining epithelium is simple cuboidal with microvilli. They are darkly stained. As microvilli are present,  the lumen is small and not very clearly seen', '/assets/Audios/Kidney/Pct.m4a')}>3</button>
            <button className="AllButtons" data-tooltip="DCT" id="Cortexbtn4" data-popup="popup4"  onClick={() => openPopup1('/assets/Images/Kidney/PCT_DCT.png', '<strong><u>Distal convoluted tubule (DCT):</u></strong> As compared to the PCT section, they are smaller in size, the lining epithelium is simple cuboidal, and appear lightly stained with a vesicular nucleus. The tubules have a clear cut lumen.', '/assets/Audios/Kidney/Dct.m4a')}>4</button>
            <button className="AllButtons" data-tooltip="Capillaries" id = "Cortexbtn5" data-popup="popup5">5</button>
          
          </div>
        </div>

        <div className="Container2">
        <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Kidney/Kidney_Panaromic.png")} style={{"display":"flex","justifyContent":"center","marginBottom":"10px"}}><strong><u>Click Here to view Panaromic view of Kidney</u></strong></a>
          <p>
          Cortex is the dark coloured outer portion of the kidney. The cortex or the Cortical labrynth consists of Glomerulus, Bowman’s Capsule, PCT and DCT.
                These elements give the cortex a granular appearance. There are striations seen in the outer part of cortex called Medullary rays.
                Medullary rays are extensions (or projections) of inner medulla into the outer cortex. Medullary rays contain collecting tubules and therefore have striated appearance.
          </p>
        </div>
        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={toggleButtons}>
              {buttonClicked ? <img src="/assets/on-1.png" alt="afterClick" /> : <img src="/assets/off-1.png" alt="beforeClick" />}
            </button> 

        {/* < Pop-up overlay */}
        <div id="overlay" className="overlay" >
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
export default Thyroid;
