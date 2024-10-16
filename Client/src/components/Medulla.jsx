import React, { useState } from 'react'; 
import Navbar from './Navbar';
import { openPopup1, closePopup, toggleButtons } from './script';

function Medulla() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <Navbar />
      <div className='box'>
        <div className="heading">
          <h1>Kidney Medulla</h1>
        </div>
        <hr style={{"height":"10px"}}/>

        <div className="Container1" id="container1"> {/* Add id to the parent container */}
          <div style={{ position: 'relative' }}> {/* Ensure relative positioning for parent container */}
            
            <img src="/assets/Images/Kidney/Medulla_a.jpg" alt="Thyroid"/>
            <button className="AllButtons" id = "Medullabtn1" data-tooltip="Thick segments of Loop of Henle" data-popup="popup1" onClick={() => openPopup1('/assets/Images/Kidney/Loop_Of_Henle.png', 'In sections, the loops of henle appear as thick and thin segments. Thick segments are similar in structure to PCT and DCT and are lined by simple cuboidal epithelium. They are impermeable to water. The thin segments are lined by simple squamous epithelium. They are permeable to water and sodium. Four types of squamous cells (Type I to type IV) have been identified in the loop of Henle but these cannot be identified under a light microscope. ', '/assets/Audios/Kidney/Loop of Henle.m4a')}>1</button>
            <button className="AllButtons" id = "Medullabtn2" data-tooltip="Thin segments of Loop of Henle" data-popup="popup2" onClick={() => openPopup1('/assets/Images/Kidney/Loop_Of_Henle.png', 'In sections, the loops of henle appear as thick and thin segments. Thick segments are similar in structure to PCT and DCT and are lined by simple cuboidal epithelium. They are impermeable to water. The thin segments are lined by simple squamous epithelium. They are permeable to water and sodium. Four types of squamous cells (Type I to type IV) have been identified in the loop of Henle but these cannot be identified under a light microscope. ', '/assets/Audios/Kidney/Loop of Henle.m4a')}>2</button>
            <button className="AllButtons" id = "Medullabtn3" data-tooltip="Collecting Duct" data-popup="popup3" onClick={() => openPopup1('/assets/Images/Kidney/Collecting_Duct.png', 'They appear as the largest transversely cut sections with a round to oval lumen. They are lined by simple columnar epithelium with a central round nucleus. The base of the cell shows numerous infoldings. The cells show short spherical mitochondria in the apical part. The cells show a few microvilli and a single centrally placed cilium.. The columnar cells show a further change into transitional epithelium in the renal pelvis.', '#')}>3</button>
            <button className="AllButtons" id = "Medullabtn4" data-tooltip="Collecting Tubule" data-popup="popup4" onClick={() => openPopup1('/assets/Images/Kidney/Collecting_Tubule.png', 'Distal convoluted tubules drain into short connecting tubules located in the cortical substance (labyrinth). Connecting tubules, in tung, drain into cortical collecting tubules located in the medullary ray. They are lined by simple cuboidal epithelium.', '/assets/Audios/Kidney/Collecting Tubules.m4a')}>4</button>
          </div>
        </div>

        <div className="Container2">
        <a href='#' className="image-cell"  style={{"display":"flex","justifyContent":"center","marginBottom":"10px"}}><strong><u>Click Here to view Pencil Diagram of Kidney</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Kidney/Kidney_Panaromic.png")} style={{"display":"flex","justifyContent":"center","marginBottom":"10px"}}><strong><u>Click Here to view Panaromic view of Kidney</u></strong></a>
          <p>
            <strong>Medulla -</strong> It is the lighter coloured, inner part of the kidney. The medulla has a striated appearance due to the presence of straight portions of the descending limb and ascending limb, loops of Henle, and lower parts of collecting tubules. The areas between adjacent pyramids are called the Renal Columns of Bertini. Renal columns are continuation of the cortex into the medulla.
          </p>
        </div>
        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
          {buttonClicked ? <img src="/assets/on-1.png" alt="afterClick" /> : <img src="/assets/off-1.png" alt="beforeClick" />}
        </button> 

        {/* < Pop-up overlay */}
        <div id="overlay" className="overlay" >
          <button className="close-button" onClick={closePopup}>&times;</button>
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
            <div id="additionalButtons" className="additional-buttons"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Medulla;
