import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import { useQuizLogic } from './script';


const HepatobiliarySystem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Theory');
  const navigate = useNavigate();
  const location = useLocation();
  

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
    
    const state = location.state;
    if (state && state.activeTab) {
      setActiveTab(state.activeTab);
    }
  }, [location]);

  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(location.pathname, { state: { activeTab: tab } });
  };


  

  const tiles = [
    { name: 'Pancreas', img: '/assets/Images/Hepatobiliary System/Pancreas Low Magnification.jpg', link: '/Pancreas', keywords: [] },
    { name: 'Gall Bladder', img: '/assets/Images/Hepatobiliary System/Gall Bladder Low Magnification.jpg', link: '/GallBladder', keywords: [] },
    { name: 'Liver', img: '/assets/Images/Hepatobiliary System/Liver Low Magnification.jpg', link: '/Liver', keywords: [] }
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
  { question: "Which capsule covers the liver and sends connective tissue septae dividing it into lobules?", options: ["Bowman’s capsule", "Glisson’s capsule", "Fibrous capsule", "Adventitia"], correct: 1 },
  { question: "What structures are found at the corners of the hepatic lobule?", options: ["Central veins", "Kupffer cells", "Portal triads", "Sinusoids"], correct: 2 },
  { question: "Which of the following is the largest structure in the portal triad?", options: ["Hepatic artery", "Bile duct", "Portal vein", "Lymphatic vessel"], correct: 2 },
  { question: "Kupffer cells in the liver are:", options: ["Endothelial cells", "Stationary macrophages", "Fibroblasts", "Hepatocytes"], correct: 1 },
  { question: "The surface Hepatobiliary System of the gall bladder is:", options: ["Simple squamous Hepatobiliary System", "Stratified squamous Hepatobiliary System", "Simple columnar Hepatobiliary System with microvilli", "Transitional Hepatobiliary System"], correct: 2 },
  { question: "Which layer is absent in the gall bladder wall?", options: ["Mucosa", "Muscularis mucosa", "Fibromuscular stroma", "Serosa"], correct: 1 },
  { question: "The exocrine part of the pancreas mainly consists of:", options: ["Islets of Langerhans", "Serous acini", "Centroacinar cells", "Intralobular ducts"], correct: 1 },
  { question: "Which pancreatic cells make up the majority of the islets of Langerhans?", options: ["Alpha cells", "Beta cells", "Delta cells", "Polypeptide cells"], correct: 1 },
  { question: "What is the function of fenestrae in the sinusoidal endothelial cells of the liver?", options: ["Prevent blood leakage", "Facilitate exchange of metabolites", "Support hepatocytes structurally", "Block toxins"], correct: 1 },
  { question: "Which feature helps distinguish gall bladder mucosal folds from mucous glands?", options: ["Presence of cilia", "Presence of crypts", "Absence of muscularis mucosa", "Presence of goblet cells"], correct: 2 }
 ];


  const {
  answers,
  score,
  submitted,
  handleAnswerChange,
  handleSubmit,
  handleReset,
  getOptionClass
} = useQuizLogic(questions.length);


  const renderContent = () => {
    switch (activeTab) {
      case 'Theory':
  return (
    <div className="theory-content">
      <h2>Hepatobiliary System Theory</h2>
      </div>
  );

      case 'Slides of Hepatobiliary System':
        return (
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
        );
      case 'Quiz':
        return (
          <div className="quiz-content">
            {questions.map((question, index) => (
              <div key={index} className="quiz-question">
                <p>{index + 1}. {question.question}</p>
                {question.options.map((option, i) => (
                  <label key={i} className={getOptionClass(question, index, i)}>
                    <input
                      type="radio"
                      value={i}
                      checked={answers[index] === i}
                      onChange={() => handleAnswerChange(index, i)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button onClick={() => handleSubmit(questions)} className="quiz-button" disabled={submitted}>Submit</button>
            <button onClick={handleReset} className="quiz-button">Reset</button>
            {score !== null && <p>Your score is: {score} / {questions.length}</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="tab-container">
        <button className="tab-button" onClick={() => handleTabChange('Theory')}>Theory</button>
        <button className="tab-button" onClick={() => handleTabChange('Slides of Hepatobiliary System')}>Slides of Hepatobiliary System</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default HepatobiliarySystem;
