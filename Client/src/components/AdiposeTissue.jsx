import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { openPopup1, closePopup, toggleButtons } from './script';

function AdiposeTissue() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <div className="heading">
          <h1>Adipose Connective Tissue</h1>
        </div>
        <hr className="divider" />

        <div className="Container1" id="container1">
          <div style={{ position: 'relative' }}>
            <img src="/assets/Images/Connective Tissue/Adipose Low Magnification.jpg" alt="Adipose Tissue" />
            <button className="AllButtons" data-tooltip="Adipose Cells" id="Adiposebtn1" data-popup="popup1">1</button>
            <button className="AllButtons" data-tooltip="Connective Tissue Septa" id="Adiposebtn2" data-popup="popup2">2</button>
            <button className="AllButtons" data-tooltip="Capiliary" id="Adiposebtn3" data-popup="popup3">3</button>
          </div>
        </div>

        
        <div className="toggle-button-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button
            id="toggleButton"
            data-tooltip="Show/Hide labels"
            className="toggle-button"
            onClick={() => toggleButtons(buttonClicked, setButtonClicked)}
          >
            {buttonClicked ? (
              <img src="/assets/on-1.png" alt="afterClick" />
            ) : (
              <img src="/assets/off-1.png" alt="beforeClick" />
            )}
          </button>
        </div>

        <div className="Container2">
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Connective Tissue/Adipose Pencil Diagram.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view Pencil Diagram of Adipose Connective Tissue</u></strong></a>
          <a href='#' className="image-cell" onClick={() => openPopup1("/assets/Images/Connective Tissue/Adipose High Magnification.jpg")} style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}><strong><u>Click Here to view High Magnification of Adipose Connective Tissue</u></strong></a>
          <h2 style={{ textDecoration: 'underline' }}>Identifying Features</h2>
          <ol className="feature-list">
            <li>A thin rim of cytoplasm is seen at the periphery of the cell.</li>
            <li>Nucleus is pushed to the periphery.</li>
            <li>Fat inside the cell is washed off during processing such that the cell looks empty.</li>
            <li>The adipocytes show signet ring appearance.</li>
          </ol>
          <h2 style={{ textDecoration: 'underline' }}>Sites:</h2>
          <ol className="feature-list">
            <li>Panniculus adiposus</li>
            <li>Perinephric fat</li>
          </ol>

          <h2 style={{ textDecoration: 'underline' }}>Comparison of Yellow and Brown Adipocytes</h2>
          <div className="table-responsive">
            <table className="cartilage-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Yellow Adipocytes</th>
                  <th>Brown Adipocytes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Size and shape of cell</td>
                  <td>Larger and Rounded</td>
                  <td>Smaller and Polygonal</td>
                </tr>
                <tr>
                  <td>Number of lipid droplets</td>
                  <td>Single and Unilocular</td>
                  <td>Many, Multilocular</td>
                </tr>
                <tr>
                  <td>Nucleus</td>
                  <td>Flat, Peripherally placed</td>
                  <td>Spherical, peripherally placed</td>
                </tr>
                <tr>
                  <td>Mitochondria</td>
                  <td>Few</td>
                  <td>Many, with long cristae</td>
                </tr>
                <tr>
                  <td>Endoplasmic reticulum</td>
                  <td>Well developed</td>
                  <td>Not well developed</td>
                </tr>
                <tr>
                  <td>Vascularity</td>
                  <td>Less Vascular</td>
                  <td>Highly vascular</td>
                </tr>
                <tr>
                  <td>Distribution</td>
                  <td>Wide spread in adults</td>
                  <td>Limited, in Newborns</td>
                </tr>
                <tr>
                  <td>Function</td>
                  <td>Storehouse of energy</td>
                  <td>Production of Heat</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            <div id="additionalButtons" className="additional-buttons"></div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default AdiposeTissue;
