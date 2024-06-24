import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import Navbar from './Navbar';

const Epithelium = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const tiles = [
    { name: 'Simple Cuboidal Epithelium', img: '/assets/Images/Epithelium/Simple Cuboidal Epithelium Pencil.png', link: '/SimpleCuboidalEpithelium', keywords: [] },
    { name: 'Simple Columnar Epithelium', img: '/assets/Images/Epithelium/Simple Columnar Pencil.png', link: '/SimpleColumnarEpithelium', keywords: [] },
    { name: 'Ciliated Columnar Epithelium', img: '/assets/Images/Epithelium/Ciliated Columnar Epithelium Pencil.jpg', link: '/CiliatedColumnarEpithelium', keywords: [] },
    { name: 'Pseudostratified Epithelium', img: '/assets/Images/Epithelium/Pseudostratified Epithelium Pencil.jpg', link: '/PseudostratifiedEpithelium', keywords: [] },
    { name: 'Transitional Epithelium', img: '/assets/Images/Epithelium/Transitional Epithelium Streched Pencil.jpg', link: '/TransitionalEpithelium', keywords: [] },
    { name: 'Stratified Squamous Non-Keratinised Epithelium', img: '/assets/Images/Epithelium/Stratified Squamous Non-Keratinised Pencil.jpg', link: '/StratifiedSquamousNonKeratinisedEpithelium', keywords: [] },
    { name: 'Stratified Squamous Keratinised Epithelium', img: '/assets/Images/Epithelium/Stratified Squamous Keratinised Epithelium Pencil.jpg', link: '/StratifiedSquamousKeratinisedEpithelium', keywords: [] }
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

export default Epithelium;
