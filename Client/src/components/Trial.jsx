import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../App.css'; 
import Navbar from './Navbar';
import Footer from './Footer';

const Trial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showKidneyDetails, setShowKidneyDetails] = useState(false);
  const searchInputRef = useRef(null);
  

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

  useEffect(() => {
    
    if (window.innerWidth > 1000) {
      searchInputRef.current.focus();
    }
  }, []);

  const toggleKidneyDetails = () => {
    setShowKidneyDetails(prevState => !prevState);
  };

  const tiles = [
    { name: 'Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Squamous _low.jpeg', link: '/Epithelium', keywords: ['Simple Squamous Epithelium','Simple Cuboidal Epithelium','Simple Columnar Epithelium','Pseudostratified Epithelium', 'Transitional Epithelium', 'Stratified Squamous Keratinised Epithelium', 'Stratified Squamous Non-Keratinised Epithelium']},
    { name: 'Connective Tissue', img: '/assets/Images/Connective Tissue/Dense Regular Low Magnification.jpg', link: '/ConnectiveTissue', keywords: ['Adipose Tissue', 'Dense Connective Tissue', 'Dense Regular Connective Tissue', 'Dense Irregular Connective Tissue']},
    { name: 'Cartilage', img: '/assets/Images/Cartilage/Elastic Cartilage Low Magnification1.jpeg', link:  '/Cartilage', keywords: ['Hyaline Cartilage','Elastic Cartilage','White Fibrous Cartilage'] },
    { name: 'Bone', img: '/assets/Images/Bone/Ground Bone LS Low Magnification.jpg', link: '/Bone', keywords: []},
    { name: 'Blood Vessels', img: '/assets/Images/Blood Vessel/Elastic Artery Low Magnification.jpg', link: '/BloodVessel', keywords: []},
    { name: 'Endocrine System', img: '/assets/Images/Adrenal/Adrenal_Gland.png', link: '/Endocrine', keywords: ['Adrenal Gland', 'Thyroid', 'Pituitary Gland']},
    { name: 'Kidney', img: '/assets/Images/Kidney/Kidney_Panaromic.png', link: '#', keywords: ['kidney'], onClick: toggleKidneyDetails }
  ];

  const kidneyDetails = [
    { name: 'Cortex', img: '/assets/Images/Kidney/Cortex.png', link: '/Cortex', keywords: ['kidney'] },
    { name: 'Medulla', img: '/assets/Images/Kidney/Medulla.jpg', link: '/Medulla', keywords: ['kidney'] }
  ];

  const filteredTiles = showKidneyDetails
    ? kidneyDetails.filter(detail =>
        detail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        detail.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : tiles.filter(tile =>
        tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <>
      <Navbar />
      <div className="trial-container">
        <div className="search-bar">
        <div className="search-icon">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Start Typing to Search...."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            ref={searchInputRef}
            className="search-input"
          />
        </div>
        <div className="tiles-wrapper">
          {!showKidneyDetails && filteredTiles.map(tile => (
            tile.name === 'Kidney' ? (
              <div key={tile.name} className="tile" onClick={tile.onClick}>
                <div className="tile-content">
                  <img src={tile.img} alt={tile.name} className="tile-image" />
                  <div className="tile-name">{tile.name}</div>
                </div>
              </div>
            ) : (
              <Link to={tile.link} key={tile.name} className="tile">
                <div className="tile-content">
                  <img src={tile.img} alt={tile.name} className="tile-image" />
                  <div className="tile-name">{tile.name}</div>
                </div>
              </Link>
            )
          ))}

          {showKidneyDetails && (
            <>
              {filteredTiles.map(detail => (
                <Link to={detail.link} key={detail.name} className="tile">
                  <div className="tile-content">
                    <img src={detail.img} alt={detail.name} className="tile-image" />
                    <div className="tile-name">{detail.name}</div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Trial;
