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

 
  const endocrineTypes = [
    "/Thyroid",
    "/Adrenal",
    "/Pituitary"
  ];
  


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
    <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      <Navbar />
        <div className="heading">
          
          <h1>Thyroid</h1>
        </div>
        <hr style={{ height: "10px" }} />

        <div className= "Container1"  id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Thyroid/Updated_thyroid.png" alt="Thyroid" />
            <button className="AllButtons" data-tooltip="Follicles" id="Thyroidbtn1" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Thyroid/Connective_Tissue_Septa.png', 'Follicles are the basic structural units of the thyroid gland. Each lobule contains many closely packed follicles of different size and shapes. The size of the follicle is approximately 150-200 microns. Follicles are round to oval in shape and are lined by simple squamous or cuboidal epithelium. The follicles are filled with colloid. ', '/assets/Audios/Endocrine/Follicles ( thyroid).m4a')}>1</button>
            <button className="AllButtons" data-tooltip="Connective Tissue septa" id="Thyroidbtn2" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Thyroid/Connective_Tissue_Septa.png', 'The gland shows a thin capsule. Thin septae extend from the capsule into the substance of the gland and divide it into lobules. ', '/assets/Audios/Endocrine/Connective tissue septa.m4a')}>2</button>
            <button className="AllButtons" data-tooltip="Blood Vessels" id="Thyroidbtn3" data-popup="popup3" onClick={() => openPopup1('#', 'There is very little interlobular connective tissue (follicles are packed). The interlobular and intralobular connective tissue is thin and contains many capillaries. ', '/assets/Audios/Endocrine/Blood vs ( thyroid).m4a')}>3</button>
            <button className="AllButtons" data-tooltip="Follicular cells (Simple cuboidal epithelium)" id="Thyroidbtn4" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Thyroid/Follicular_cells.jpg', 'The lining epithelium of the follicles shows cuboidal cells which stain eosinophilic. These cells have a vesicular round nucleus. They constitute the principal secretory cells of thyroid which synthesize thyroglobulin. ', '/assets/Audios/Endocrine/Follicular cells ( thyroid).m4a')}>4</button>
            <button className="AllButtons" data-tooltip="Parafollicular or C cells " id="Thyroidbtn5" data-popup="popup5" onClick={() => openPopup1('/assets/Images/Thyroid/Parafollicular_Cells.png', 'These cells constitute about 2% of the thyroid gland. The cells are called as clear cells because the cytoplasm is not stained. The cells are large and occur either singly or in groups of 2 or 3. They are usually situated between the basement membrane and the cubical epithelium. They secrete calcitonin.', '/assets/Audios/Endocrine/Clear cells ( thyroid).m4a ')}>5</button>
            <button className="AllButtons" data-tooltip="Colloid" id="Thyroidbtn6" data-popup="popup6" onClick={() => openPopup1('/assets/Images/Thyroid/Follicular_cells.jpg', 'The lumen of the thyroid follicle is large and contains colloid which is stained eosinophilic It is made of a glycoprotein complex, also known as thyroglobulin. The colloid stains with both acidic and basic dyes. It is strongly PAS positive. ', '/assets/Audios/Endocrine/Colloid ( thyroid)-1.m4a')}>6</button>
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
            data-tooltip="Adrenal Gland"
            onClick={handleNext}
            disabled={currentIndex === endocrineTypes.length - 1}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className= 'Container2'>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Thyroid/Thyroid_Pencil_Diagram.jpeg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Thyroid</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
            <ol className="feature-list">
              <li>Connective Tissue capsule sending in septae dividing gland into lobules.</li>
              <li>Parenchyma consists of large number of follicles lined by simple squamous epithelium (in resting follicles) to simple cuboidal epithelium (in active follicles).</li>
              <li>Colloid is present in the lumen of the follicles</li>
              <li>Parafollicular cells present outside the follicles</li>
            </ol>
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
