import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';

const Endocrine = () => {
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
    { name: 'Thyroid', img: '/assets/Images/Thyroid/Updated_thyroid.png', link: '/Thyroid', keywords: [] },
    { name: 'Adrenal Gland', img: '/assets/Images/Adrenal/Adrenal_Gland.png', link: '/Adrenal', keywords: [] },
    { name: 'Pituitary Gland', img: '/assets/Images/Pituitary/Pituitary Low Magnification.png', link: '/Pituitary', keywords: [] }
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { question: "What is epithelial tissue?", options: ["A type of muscle tissue", "A type of connective tissue", "A type of tissue that lines body surfaces", "None of the above"], correct: 2 },
    { question: "Which of the following is not a function of epithelial tissue?", options: ["Protection", "Absorption", "Secretion", "Contraction"], correct: 3 },
    { question: "What type of epithelial tissue forms the outer layer of the skin?", options: ["Simple squamous", "Simple cuboidal", "Stratified squamous", "Transitional"], correct: 2 },
    { question: "Where is simple cuboidal epithelium commonly found?", options: ["Lining of the heart", "Kidney tubules", "Alveoli of the lungs", "Outer layer of the skin"], correct: 1 },
    { question: "Which epithelial tissue is involved in absorption and secretion in the intestines?", options: ["Simple cuboidal", "Simple columnar", "Stratified squamous", "Transitional"], correct: 1 },
    { question: "What type of epithelial tissue lines the urinary bladder?", options: ["Simple squamous", "Stratified cuboidal", "Transitional", "Pseudostratified columnar"], correct: 2 },
    { question: "What characterizes pseudostratified columnar epithelium?", options: ["Single layer of flat cells", "Multiple layers of flat cells", "Single layer of cells of varying heights", "Multiple layers of cuboidal cells"], correct: 2 },
    { question: "Which epithelial tissue is found in the respiratory tract and contains cilia?", options: ["Simple squamous", "Stratified squamous", "Pseudostratified columnar", "Transitional"], correct: 2 },
    { question: "What is the main function of stratified squamous epithelium?", options: ["Diffusion", "Filtration", "Protection", "Absorption"], correct: 2 },
    { question: "Which type of epithelium is specialized for rapid diffusion?", options: ["Simple squamous", "Simple cuboidal", "Stratified columnar", "Transitional"], correct: 0 }
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

    </div>
  );

      case 'Slides of Endocrine':
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
        <button className="tab-button" onClick={() => handleTabChange('Slides of Endocrine')}>Slides of Endocrine</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default Endocrine;
