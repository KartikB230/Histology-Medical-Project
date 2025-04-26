import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';

const LymphoidTissue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Theory');
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [score, setScore] = useState(null);
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
    { name: 'Lymph Node', img: '/assets/Images/Connective Tissue/Adipose Low Magnification.jpg', link: '/LymphNode', keywords: [] },
    { name: 'Spleen', img: '/assets/Images/Connective Tissue/Dense Regular Low Magnification.jpg', link: '/Spleen', keywords: [] },
    { name: 'Thymus', img: '/assets/Images/Connective Tissue/Dense Irregular Low Magnification.jpg', link: '/Thymus', keywords: [] },
    { name: 'Tonsil', img: '/assets/Images/Connective Tissue/Loose Connective Tissue Low Magnification.jpg', link: '/Tonsil', keywords: [] }
    
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { question: "What is the main function of areolar tissue?", options: ["Structural strength", "Support and nourishment", "Heat production", "Storehouse of energy"], correct: 1 },
    { question: "Which of the following is an example of dense regular connective tissue?", options: ["Dermis of skin", "Tendons", "Areolar tissue", "Lymphoid organs"], correct: 1 },
    { question: "What type of connective tissue contains adipocytes?", options: ["Reticular tissue", "Mucoid tissue", "Adipose tissue", "Elastic tissue"], correct: 2 },
    { question: "Which connective tissue has irregularly arranged fibers?", options: ["Dense regular", "Dense irregular", "Reticular tissue", "Elastic tissue"], correct: 1 },
    { question: "What is the function of dense regular connective tissue?", options: ["Support and nourishment", "Heat production", "Attaching muscles to bones", "Protection"], correct: 2 },
    { question: "Where is reticular connective tissue commonly found?", options: ["Lymphoid organs", "Tendons", "Perinephric fat", "Wharton’s jelly"], correct: 0 },
    { question: "What characterizes dense irregular connective tissue?", options: ["Loosely arranged fibers", "Irregularly arranged fibers", "Regularly arranged fibers", "Single lipid droplet"], correct: 1 },
    { question: "What is the primary function of adipose tissue?", options: ["Nourishment", "Heat production", "Structural support", "Storehouse of energy"], correct: 3 },
    { question: "Which connective tissue is rich in elastic fibers?", options: ["Lymphoid tissue", "Elastic tissue", "Dense regular tissue", "Reticular tissue"], correct: 1 },
    { question: "What is an example of mucoid connective tissue?", options: ["Perinephric fat", "Wharton’s jelly", "Lymphoid organs", "Ligamentum flavum"], correct: 1 }
   ];


  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  const handleReset = () => {
    setAnswers(Array(10).fill(null));
    setScore(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Theory':
  return (
    <div className="epithelium-container">
      {/* Section 5: Final Image */}
      <div className="cartilage-section">
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
        
        
      </div>
    </div>
  );

      case 'Slides of Lymphoid Tissue':
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
                  <label key={i}>
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
            <button onClick={handleSubmit} className="quiz-button">Submit</button>
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
        <button className="tab-button" onClick={() => handleTabChange('Slides of Lymphoid Tissue')}>Slides of Lymphoid Tissue</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default LymphoidTissue;
