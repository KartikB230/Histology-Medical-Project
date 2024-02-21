import React from 'react';
import '../App.css'; // Import the CSS file
import { openPopup, closePopup, openModal, closeModal } from './script.js';
import { useState } from 'react';




function SquamousEpithelium() {
    
      
    return (
      <div>
        <div className="cd">
          <h1 className="main-title">Squamous Epithelium</h1>
        </div>
        <hr />

        {/* Image on the left */}
        <div className="image-container">
          <img
            src="/assets/simple_squamous_epithelium.jpg"
            className="imgg"
            alt="Simple Squamous Epithelium"
            onClick={() => openPopup('popup1')}
            data-popup="popup1"
          />

        </div>
        <p className="image-description">
          Fig 1.1 Simple Squamous Epithelium.{' '}
          <a href="#" style={{ color: 'blue' }}>
            Click on the figure to view High Powered Image.
          </a>
        </p>

        {/* Information and audio on the right */}
        <div className="info-container">
          <div className="info-content">
            <p>
              Simple squamous epithelium consists of a single layer of flattened cells with a slight bulge in the center because of the presence of the nucleus. Endothelium of blood vessels and alveoli of lungs are lined by simple squamous epithelium
            </p>
            <div className="audio-container">
              <audio
                src="/assets/Audios/h1_76 squamous epithelium (1).wav"
                controls
                autoPlay={false}
                loop={false}
              />
            </div>
            <a href="#" className="image-cell">
              <u>Click Here to view Pencil Diagram of Simple Squamous Epithelium</u>
            </a>
          </div>
        </div>


        {/* Popup */}
        <div id="popup1" className="popup">
          <button className="close-button" data-popup="popup1" onClick={(event) => closePopup(event.target)}>&times;</button>
          <img src="/assets/simple_squamous_epithelium_High_power.jpg" onClick={() => openModal('popup1', '/assets/simple_squamous_epithelium_High_power.jpg', 'Simple Squamous Epithelium Magnified')} height="500px" width="500px" alt="Simple Squamous Epithelium High Power" />
          <div className="description">Follicles are the basic structural units of the thyroid gland. Each lobule contains many closely packed follicles of different sizes and shapes. The size of the follicle is approximately 150-200 microns. Follicles are round to oval in shape and are lined by simple squamous or cuboidal epithelium. The follicles are filled with colloid.</div>
        </div>
      </div>
    );
  }


  export default SquamousEpithelium;
