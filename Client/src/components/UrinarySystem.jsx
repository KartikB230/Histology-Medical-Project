import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import { useQuizLogic } from './script';

const UrinarySystem = () => {
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
    { name: 'Urinary Bladder', img: '/assets/Images/Urinary System/Urinary Bladder Low Magnification.jpg', link: '/UrinaryBladder', keywords: [] },
    { name: 'Ureter', img: '/assets/Images/Urinary System/Ureter Low Magnification.jpg', link: '/Ureter', keywords: [] }
    
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { question: "What type of epithelium lines the urinary bladder?", options: ["Stratified squamous", "Simple cuboidal", "Transitional epithelium", "Pseudostratified columnar"], correct: 2 },
    { question: "Which layer of the urinary bladder contains connective tissue, capillaries, and veins but no glands?", options: ["Mucosa", "Lamina propria", "Adventitia", "Serosa"], correct: 1 },
    { question: "What is the thick muscle layer of the urinary bladder called?", options: ["Muscularis externa", "Detrusor muscle", "Submucosa", "Muscularis mucosae"], correct: 1 },
    { question: "How many muscle layers are typically found in the detrusor muscle of the urinary bladder?", options: ["One", "Two", "Three", "Four"], correct: 2 },
    { question: "Which connective tissue layer covers most of the urinary bladder except its superior surface?", options: ["Lamina propria", "Serosa", "Adventitia", "Submucosa"], correct: 2 },
    { question: "The ureter is lined by which type of epithelium?", options: ["Simple cuboidal", "Stratified columnar", "Transitional epithelium", "Simple squamous"], correct: 2 },
    { question: "Which muscle arrangement is found in the ureter’s muscularis layer?", options: ["Inner circular, outer longitudinal", "Inner longitudinal, outer circular", "Three layers intermingled", "Only circular muscle"], correct: 1 },
    { question: "Which of the following is abundant in the lamina propria of the ureter?", options: ["Keratin fibers", "Elastic tissue", "Hyaline cartilage", "Goblet cells"], correct: 1 },
    { question: "What is unique about the mucosa of the ureter?", options: ["It has villi", "It contains glands", "It shows folds", "It has keratinized surface"], correct: 2 },
    { question: "The superior surface of the urinary bladder is covered by:", options: ["Adventitia", "Serosa", "Transitional epithelium", "Peritoneum only"], correct: 1 }
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
    <div className="epithelium-container">
      {/* Section 5: Final Image */}
      {/* <div className="cartilage-section">
      <h2 className='epithelium-title'>Types of Connective Tissues</h2>
        <img src="/assets/Images/Connective Tissue/Diagram 1.jpg" alt = "Cartilage Diagram" className="epithelium-image image-3" style={{"margin":"10px"}} />
        </div>
        <div className='cartilage-section'> 
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
        
        
      </div> */}
    </div> 
  );

      case 'Slides of Urinary System':
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
        <button className="tab-button" onClick={() => handleTabChange('Slides of Urinary System')}>Slides of Urinary System</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default UrinarySystem;
