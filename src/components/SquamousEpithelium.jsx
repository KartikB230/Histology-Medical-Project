import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar.jsx' ;
import { Cursor } from 'react-simple-typewriter';




function SquamousEpithelium() {

  const [buttonClicked, setButtonClicked] = useState(false);


  
  function openPopup1(imagePath, descriptionText, audioPath) 
  {
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
  function closePopup() 
  {
    // Hide the overlay
    document.getElementById('overlay').style.display = 'none';

    // Pause the audio when closing the pop-up
    document.getElementById('popupAudio').pause();
 }

      
    return (
      <div>
        <Navbar/>
        <div className="cd">
          <h1 style={{"margin":"10px"}}>Squamous Epithelium</h1>
        </div>
        <hr style={{"height":"10px"}}/>

        {/* Image on the left */}
        <div className="image-container">
          <img
            src="/assets/Images/Squamous/simple_squamous_epithelium.jpg"
            className="imgg"
            alt="Simple Squamous Epithelium"
            onClick={() => openPopup1("/assets/Images/Squamous/simple_squamous_epithelium_High_power.jpg", 'Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium', '/assets/Audios/Squamous/h1_76 squamous epithelium (1).wav')}
            data-popup="popup1"
          />

        </div>
        <strong>
        <p className="image-description">
          Fig 1.1 Simple Squamous Epithelium.{' '}
          <a href="#" style={{ color: 'blue' }}>
            Click on the figure to view High Powered Image.
          </a>
        </p>
        </strong>

        

        {/* Information and audio on the right */}
        <div className="info-container">
          <div className="info-content">
          <a className="image-cell" onClick={() => openPopup1("/assets/Images/Squamous/Simple squamous pencil diagram.jpg", 'Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium', '/assets/Audios/Squamous/h1_76 squamous epithelium (1).wav')}>
              <strong><u>Click Here to view Pencil Diagram of Simple Squamous Epithelium</u></strong>
            </a>
            <p style={{"margin":"10px"}}>
              Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium
            </p>
            <div className="audio-container">
              <audio
                src="/assets/Audios/Squamous/h1_76 squamous epithelium (1).wav"
                controls
                autoPlay={false}
                loop={false}
              />
            </div>
            
          </div>
        </div>

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
    );
  }


  export default SquamousEpithelium;
