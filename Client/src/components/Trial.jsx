import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import Navbar from './Navbar';

const Trial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const tiles = [
    { name: 'Squamous Epithelium', img: '/assets/Images/Squamous/Simple squamous pencil diagram button.png', link: '/SquamousEpithelium', keywords: [] },
    { name: 'Thyroid', img: '/assets/Images/Thyroid/Updated_thyroid.png', link: '/Thyroid', keywords: [] },
    { name: 'Medulla', img: '/assets/Images/Kidney/Medulla.jpg', link: '/Medulla', keywords: ['kidney'] },
    { name: 'Cortex', img: '/assets/Images/Kidney/Cortex.png', link: '/Cortex', keywords: ['kidney'] },
    { name: 'Adrenal Gland', img: '/assets/Images/Adrenal/Adrenal_Pencil.png', link: '/Adrenal', keywords: [] },
    { name: 'Pituitary Gland', img: '/path/to/image6.jpg', link: '/Pituitary', keywords: [] },
    { name: 'Cartilage', img: '/path/to/image7.jpg', link: '/Cartilage', keywords: []}, 
    { name: 'Epithelium', img: '/assets/Images/Epithelium/Epithelium.jpg', link: '/Epithelium', keywords: []}
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
        <Navbar/>
        <div className="trial-container">
        <div className="search-bar">
            <input
            type="text"
            placeholder="Start Typing to Search...."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            ref={searchInputRef} // Ref for focusing
            className="search-input"
            />
        </div>
        <div className="tiles-wrapper">
            {filteredTiles.map(tile => (
            <Link to={tile.link} key={tile.name} className="tile">
                <div className="tile-content">
                <img src={tile.img} alt={tile.name} className="tile-image" />
                <div className="tile-name">{tile.name}</div>
                </div>
            </Link>
            ))}
        </div>
        </div>
    </>
  );
}

export default Trial;