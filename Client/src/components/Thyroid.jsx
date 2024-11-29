import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { openPopup1, closePopup, toggleButtons } from './script';

function Thyroid() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);

 
  const endocrineTypes = [];
  


  const currentIndex = endocrineTypes.indexOf(window.location.pathname);


  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(endocrineTypes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < endocrineTypes.length - 1) {
      navigate(endocrineTypes[currentIndex + 1]);
    }
  };
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX && endX) {
      const distance = startX - endX;
      if (distance > 50) {
        handleNext(); // Swipe left
      } else if (distance < -50) {
        handlePrev(); // Swipe right
      }
    }
    setStartX(null);
    setEndX(null);
  };

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
          
          <h1>Thyroid</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Thyroid/Updated_thyroid.png" alt="Thyroid" />
            <button className="AllButtons" data-tooltip="Follicles" id="Thyroidbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Thyroid/Connective_Tissue_Septa.png', 'Follicles are the basic structural units of the thyroid gland. Each lobule contains many closely packed follicles of different size and shapes. The size of the follicle is approximately 150-200 microns. Follicles are round to oval in shape and are lined by simple squamous or cuboidal epithelium. The follicles are filled with colloid. ', '/assets/Audios/Thyroid/Thyroid_Follicles.wav')}>1</button>
            <button className="AllButtons" data-tooltip="Connective Tissue septa" id="Thyroidbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Thyroid/Connective_Tissue_Septa.png', 'The gland shows a thin capsule. Thin septae extend from the capsule into the substance of the gland and divide it into lobules. ', '/assets/Audios/Thyroid/Connective_tissue_septa.wav')}>2</button>
            <button className="AllButtons" data-tooltip="Blood Vessels" id="Thyroidbtn3" data-popup="popup3" onClick={() => openPopup1('#', 'There is very little interlobular connective tissue (follicles are packed). The interlobular and intralobular connective tissue is thin and contains many capillaries. ', '#')}>3</button>
            <button className="AllButtons" data-tooltip="Follicular cells (Simple cuboidal epithelium)" id="Thyroidbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Thyroid/Follicular_cells.png', 'The lining epithelium of the follicles shows cuboidal cells which stain eosinophilic. These cells have a vesicular round nucleus. They constitute the principal secretory cells of thyroid which synthesize thyroglobulin. ', '/assets/Audios/Thyroid/Follicular_cells.wav')}>4</button>
            <button className="AllButtons" data-tooltip="Parafollicular or C cells " id="Thyroidbtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Thyroid/Parafollicular_Cells.png', 'These cells constitute about 2% of the thyroid gland. The cells are called as clear cells because the cytoplasm is not stained. The cells are large and occur either singly or in groups of 2 or 3. They are usually situated between the basement membrane and the cubical epithelium. They secrete calcitonin.', '/assets/Audios/Thyroid/Parafollicular_cells.wav')}>5</button>
            <button className="AllButtons" data-tooltip="Colloid" id="Thyroidbtn6" data-popup="popup6" onClick={() => openPopup1('/assets/Images/Thyroid/Follicular_cells.png', 'The lumen of the thyroid follicle is large and contains colloid which is stained eosinophilic It is made of a glycoprotein complex, also known as thyroglobulin. The colloid stains with both acidic and basic dyes. It is strongly PAS positive. ', '/assets/Audios/Thyroid/Colloid.wav')}>6</button>
          </div>
        </div>
        
        <div className="navigation-buttons">
          <button
            className="nav-button prev-button"
            data-tooltip="Disabled"
            onClick={handlePrev}
            disabled={true}
          >
           <FaArrowLeft /> 
          </button>
          
          <div className="toggle-button-container">
            <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
              {buttonClicked ? (<img src="/assets/on-1.png" alt="afterClick" className="toggle-image" />) : 
              (<img src="/assets/off-1.png" alt="beforeClick" className="toggle-image" />)}</button>
          
          </div>
          <button
            className="nav-button next-button"
            data-tooltip="Disabled"
            onClick={handleNext}
            disabled={true}
          >
            <FaArrowRight />
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

export default Thyroid;
