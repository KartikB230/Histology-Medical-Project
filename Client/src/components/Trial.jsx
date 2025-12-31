import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaList, FaThLarge, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Trial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showKidneyDetails, setShowKidneyDetails] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const [listView, setListView] = useState(() => {
    const savedView = localStorage.getItem('viewMode');
    return savedView === 'list' ? true : false;
  });

  const searchInputRef = useRef(null);

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableImageDownload = (e) => {
      if (e.target && e.target.tagName === 'IMG') e.preventDefault();
    };
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('mousedown', disableImageDownload);
    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('mousedown', disableImageDownload);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1000) searchInputRef.current.focus();
  }, []);

  const handleToggleView = () => {
    setListView((prev) => {
      const newView = !prev;
      localStorage.setItem('viewMode', newView ? 'list' : 'tiles');
      return newView;
    });
  };

  const toggleKidneyDetails = () => {
    setShowKidneyDetails(prev => !prev);
  };

  const toggleExpand = (tileName) => {
    setExpandedItems(prev => ({
      ...prev,
      [tileName]: !prev[tileName]
    }));
  };

  const tiles = [
    { 
      name: 'Epithelium', 
      img: '/assets/Images/Epithelium/Unlabelled/Squamous _low.jpeg', 
      link: '/Epithelium', 
      keywords: ['Simple Squamous Epithelium', 'Simple Cuboidal Epithelium', 'Simple Columnar Epithelium', 'Pseudostratified Epithelium', 'Transitional Epithelium', 'Stratified Squamous Keratinised Epithelium', 'Stratified Squamous Non-Keratinised Epithelium'],
      subItems: [
    { name: 'Simple Squamous Epithelium', link: '/SquamousEpithelium'},
    { name: 'Simple Cuboidal Epithelium', link: '/SimpleCuboidalEpithelium'},
    { name: 'Simple Columnar Epithelium', link: '/SimpleColumnarEpithelium'},
    { name: 'Pseudostratified Epithelium', link: '/PseudostratifiedEpithelium'},
    { name: 'Transitional Epithelium', link: '/TransitionalEpithelium'},
    { name: 'Stratified Squamous Non-Keratinised Epithelium', link: '/StratifiedSquamousNonKeratinisedEpithelium'},
    { name: 'Stratified Squamous Keratinised Epithelium', link: '/StratifiedSquamousKeratinisedEpithelium'}
    ]
    },
    { 
      name: 'Connective Tissue', 
      img: '/assets/Images/Connective Tissue/Dense Regular Low Magnification.jpg', 
      link: '/ConnectiveTissue', 
      keywords: ['Adipose Tissue', 'Dense Connective Tissue', 'Dense Regular Connective Tissue', 'Dense Irregular Connective Tissue'],
      subItems: [
        { name: 'Adipose Tissue', link: '/AdiposeTissue' },
        { name: 'Dense Regular Connective Tissue', link: '/DenseRegularTissue' },
        { name: 'Dense Irregular Connective Tissue', link: '/DenseIrregularTissue' },
        { name: 'Loose Connective Tissue', link: '/LooseConnectiveTissue' }
      ]
    },
    { 
      name: 'Cartilage', 
      img: '/assets/Images/Cartilage/Elastic Cartilage Low Magnification1.jpeg', 
      link: '/Cartilage', 
      keywords: ['Hyaline Cartilage', 'Elastic Cartilage', 'White Fibrous Cartilage'],
      subItems: [
        { name: 'Hyaline Cartilage', link: '/HyalineCartilage' },
        { name: 'Elastic Cartilage', link: '/ElasticCartilage' },
        { name: 'White Fibrous Cartilage', link: '/WhiteFibrousCartilage' }
      ]
    },
    { 
      name: 'Bone', 
      img: '/assets/Images/Bone/Ground Bone LS Low Magnification.jpg', 
      link: '/Bone', 
      keywords: ['TS Ground Bone', 'LS Ground Bone'],
      subItems: [
        { name: 'Ground Bone TS', link: '/BoneTS' },
        { name: 'Ground Bone LS', link: '/BoneLS' },
        { name: 'Osteon (Haversian System)', link: '/Osteon' }
      ]
    },
    { 
      name: 'Blood Vessels', 
      img: '/assets/Images/Blood Vessel/Elastic Artery Low Magnification.jpg', 
      link: '/BloodVessel', 
      keywords: ['Elastic Artery', 'Muscular Artery', 'Arteriole', 'Vein'],
      subItems: [
        { name: 'Large Elastic Artery', link: '/ElasticArtery' },
        { name: 'Medium Muscular Artery', link: '/MuscularArtery' },
        { name: 'Arteriole', link: '/Arteriole' },
        { name: 'Vein', link: '/Vein' },
        { name: 'Sinusoid', link: '/Sinusoid' }
      ]
    },
    { 
      name: 'Endocrine System', 
      img: '/assets/Images/Adrenal/Adrenal_Gland.png', 
      link: '/Endocrine', 
      keywords: ['Adrenal Gland', 'Thyroid', 'Pituitary Gland'],
      subItems: [
        { name: 'Thyroid', link: '/Thyroid' },
        { name: 'Adrenal Gland', link: '/Adrenal' },
        { name: 'Pituitary Gland', link: '/Pituitary' }
      ]
    },
    { 
      name: 'Kidney', 
      img: '/assets/Images/Kidney/Kidney_Panaromic.png', 
      link: '#', 
      keywords: ['kidney', 'Cortex', 'Medulla'], 
      onClick: toggleKidneyDetails,
      subItems: [
        { name: 'Cortex', link: '/Cortex' },
        { name: 'Medulla', link: '/Medulla' }
      ]
    },
    { 
      name: 'Muscular Tissue', 
      img: '/assets/Images/Muscle/Skeletal Muscle Low Magnification.jpg', 
      link: '/Muscle', 
      keywords: ['Skeletal Muscle LS', 'Skeletal Muscle TS', 'Smooth Muscle', 'Cardiac Muscle'],
      subItems: [
        { name: 'Skeletal Muscle', link: '/SkeletalMuscle' },
        { name: 'Skeletal Muscle LS', link: '/SkeletalMuscleLS' },
        { name: 'Smooth Muscle', link: '/SmoothMuscle' },
        { name: 'Cardiac Muscle', link: '/CardiacMuscle' }
      ]
    },
    { 
      name: 'Lymphoid Tissue', 
      img: '/assets/Images/Lymphoid Tissue/Lymph Node Low Magnification.jpg', 
      link: '/LymphoidTissue', 
      keywords: ['Lymph Node', 'Spleen', 'Tonsil', 'Thymus'],
      subItems: [
        { name: 'Lymph Node', link: '/LymphNode' },
        { name: 'Spleen', link: '/Spleen' },
        { name: 'Tonsil', link: '/Tonsil' },
        { name: 'Thymus', link: '/Thymus' }
      ]
    },
    { 
      name: 'Urinary System', 
      img: '/assets/Images/Urinary System/Urinary Bladder Low Magnification.jpg', 
      link: '/UrinarySystem', 
      keywords: ['Urinary Bladder', 'Urine', 'Ureter'],
      subItems: [
        { name: 'Urinary Bladder', link: '/UrinaryBladder' },
        { name: 'Ureter', link: '/Ureter' }
      ]
    },
    { 
      name: 'Salivary Gland', 
      img: '/assets/Images/Salivary Gland/Mixed Salivary Gland Low Magnification.jpg', 
      link: '/Salivary Gland', 
      keywords: ['Saliva', 'Mixed Salivary Gland', 'Serous Salivary Gland', 'Mucous Salivary Gland'],
      subItems: [
        { name: 'Mixed Salivary Gland', link: '/MixedSalivaryGland' },
        { name: 'Serous Salivary Gland', link: '/SerousSalivaryGland' },
        { name: 'Mucous Salivary Gland', link: '/MucousSalivaryGland' }
      ]
    },
    { 
      name: 'Hepatobiliary System', 
      img: '/assets/Images/Hepatobiliary System/Pancreas Low Magnification.jpg', 
      link: '/HepatobiliarySystem', 
      keywords: ['Liver', 'Gall Bladder', 'Pancreas'],
      subItems: [
        { name: 'Pancreas', link: '/Pancreas' },
        { name: 'Gall Bladder', link: '/GallBladder' },
        { name: 'Liver', link: '/Liver' }
      ]
    }
  ];

  const kidneyDetails = [
    { name: 'Cortex', img: '/assets/Images/Kidney/Cortex.png', link: '/Cortex', keywords: ['kidney'] },
    { name: 'Medulla', img: '/assets/Images/Kidney/Medulla.jpg', link: '/Medulla', keywords: ['kidney'] }
  ];

  const filteredTiles = showKidneyDetails
    ? kidneyDetails.filter(detail =>
      detail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      detail.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    : tiles.filter(tile =>
      tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tile.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <>
      <Navbar />

      <div className="trial-container">
        <div className="search-bar">
          <div className="search-input-wrapper">
            <div className="search-icon"><FaSearch /></div>
            <input
              type="text"
              placeholder="Start Typing to Search...."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              ref={searchInputRef}
              className="search-input"
            />
          </div>

          <button
            className="view-toggle-button"
            onClick={handleToggleView}
            aria-label="Toggle View"
          >
            {listView ? <FaThLarge /> : <FaList />}
          </button>
        </div>

        {/* List View with Expandable Items */}
        {listView ? (
          <div className="list-view">
            {filteredTiles.map((tile, index) => (
              <div key={tile.name} className="list-item-wrapper">
                <div className="list-item-header">
                  <span className="list-item-bullet">{index + 1}</span>
                  <Link to={tile.link} className="list-item-main">
                    {tile.name}
                  </Link>
                  {tile.subItems && tile.subItems.length > 0 && (
                    <button 
                      className="list-expand-btn"
                      onClick={() => toggleExpand(tile.name)}
                      aria-label="Toggle submenu"
                    >
                      {expandedItems[tile.name] ? <FaChevronDown /> : <FaChevronRight />}
                    </button>
                  )}
                </div>
                
                {/* Sub-items dropdown */}
                {tile.subItems && expandedItems[tile.name] && (
                  <div className="list-sub-items">
                    {tile.subItems.map((subItem, subIndex) => (
                      <Link 
                        key={subItem.name} 
                        to={subItem.link} 
                        className="list-sub-item"
                      >
                        <span className="list-sub-bullet">•</span>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Tile View */
          <div className="tiles-wrapper">
            {!showKidneyDetails && filteredTiles.map(tile =>
              tile.name === 'Kidney' ? (
                <div key={tile.name} className="tile" onClick={tile.onClick}>
                  <div className="tile-content">
                    <img src={tile.img} alt={tile.name} className="tile-image" />
                    <div className="tile-name">{tile.name}</div>
                  </div>
                </div>
              ) : (
                <Link key={tile.name} to={tile.link} className="tile">
                  <div className="tile-content">
                    <img src={tile.img} alt={tile.name} className="tile-image" />
                    <div className="tile-name">{tile.name}</div>
                  </div>
                </Link>
              )
            )}

            {showKidneyDetails && filteredTiles.map(detail => (
              <Link key={detail.name} to={detail.link} className="tile">
                <div className="tile-content">
                  <img src={detail.img} alt={detail.name} className="tile-image" />
                  <div className="tile-name">{detail.name}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Trial;