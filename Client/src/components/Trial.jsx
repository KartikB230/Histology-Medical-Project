import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import Navbar from './Navbar';

const Trial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showKidneyDetails, setShowKidneyDetails] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    
    if (window.innerWidth > 1000) {
      searchInputRef.current.focus();
    }
  }, []);

  const toggleKidneyDetails = () => {
    setShowKidneyDetails(prevState => !prevState);
  };

  const tiles = [
    { name: 'Thyroid', img: '/assets/Images/Thyroid/Updated_thyroid.png', link: '/Thyroid', keywords: [] },
    {
      name: 'Kidney',
      img: '/assets/Images/Kidney/Kidney_Panaromic.png',
      link: '#',
      keywords: ['kidney'],
      onClick: toggleKidneyDetails
    },
    { name: 'Adrenal Gland', img: '/assets/Images/Adrenal/Adrenal_Gland.png', link: '/Adrenal', keywords: [] },
    { name: 'Pituitary Gland', img: '/assets/Images/Pituitary/Pituitary Low Magnification.png', link: '/Pituitary', keywords: [] },
    { name: 'Cartilage', img: '/assets/Images/Cartilage/Elastic Cartilage Low Magnification.jpg', link:  '/Cartilage', keywords: ['Hyaline Cartilage','Elastic Cartilage','White Fibrous Cartilage'] },
    { name: 'Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Squamous _low.jpeg', link: '/Epithelium', keywords: ['Simple Squamous Epithelium','Simple Cuboidal Epithelium','Simple Columnar Epithelium','Pseudostratified Epithelium', 'Transitional Epithelium', 'Stratified Squamous Keratinised Epithelium', 'Stratified Squamous Non-Keratinised Epithelium']}
  ];

  const kidneyDetails = [
    { name: 'Medulla', img: '/assets/Images/Kidney/Medulla.jpg', link: '/Medulla', keywords: ['kidney'] },
    { name: 'Cortex', img: '/assets/Images/Kidney/Cortex.png', link: '/Cortex', keywords: ['kidney'] }
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
              {/* <div className="tile" onClick={toggleKidneyDetails}>
                <div className="tile-content">
                  <div className="tile-name">Back</div>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Trial;
