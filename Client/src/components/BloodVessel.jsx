import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import { handleQuizSubmission } from './script';
import '../App.css';

const BloodVessel = () => {
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
    { name: 'Large Elastic Artery', img: '/assets/Images/Blood Vessel/Elastic Artery Low Magnification.jpg', link: '/ElasticArtery', keywords: [] },
    { name: 'Medium Muscular Artery', img: '/assets/Images/Blood Vessel/Muscular Artery Low Magnification.jpg', link: '/MuscularArtery', keywords: [] },
    { name: 'Arteriole', img: '/assets/Images/Blood Vessel/Arteriole Low Magnification.jpg', link: '/Arteriole', keywords: [] },
    { name: 'Vein', img: '/assets/Images/Blood Vessel/Vein Low Magnification.jpg', link: '/Vein', keywords: [] },
    { name: 'Sinusoid', img: '/assets/Images/Blood Vessel/Sinusoid Low Magnification.jpg', link: '/Sinusoid', keywords: [] },
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { question: "Which type of blood vessel carries blood away from the heart?", options: ["Veins", "Arteries", "Capillaries", "Sinusoids"], correct: 1 },
    { question: "What is the primary function of capillaries?", options: ["Transport oxygenated blood only", "Facilitate the exchange of gases and nutrients", "Prevent backflow of blood", "Store blood"], correct: 1 },
    { question: "Which layer of a blood vessel is primarily responsible for regulating blood flow and pressure?", options: ["Tunica intima", "Tunica media", "Tunica adventitia", "Endothelium"], correct: 1 },
    { question: "What is a distinguishing feature of veins compared to arteries?", options: ["Thicker walls", "Presence of valves", "Higher pressure", "Circular lumen"], correct: 1 },
    { question: "What type of blood vessel directly connects arteries to veins?", options: ["Arterioles", "Venules", "Capillaries", "Sinusoids"], correct: 2 },
    { question: "Which of the following blood vessels has the largest lumen size?", options: ["Capillaries", "Venules", "Veins", "Arteries"], correct: 2 },
    { question: "What is the primary structural component of the tunica media in arteries?", options: ["Elastic fibers and smooth muscle", "Collagen fibers", "Endothelial cells", "Connective tissue"], correct: 0 },
    { question: "Which type of blood vessel is known for being elastic and maintaining blood pressure during diastole?", options: ["Capillaries", "Medium muscular arteries", "Large elastic arteries", "Veins"], correct: 2 },
    { question: "Where are sinusoidal capillaries commonly found?", options: ["Lungs", "Spleen, liver, and bone marrow", "Kidney glomeruli", "Skin"], correct: 1 },
    { question: "What is the role of the endothelial lining in blood vessels?", options: ["Providing structural support", "Preventing clot formation and regulating vascular tone", "Generating pressure for blood flow", "Absorbing nutrients"], correct: 1 },
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
      
      <div className="epithelium-section">
        <h2 className="epithelium-title">Identification points</h2>
        <ol className="epithelium-introduction-list" style = {{fontSize: "20px"}}>
        <li><strong>Arteries</strong>- Circular lumen</li>
        <li><strong>Vein</strong>- Lumen is collapsed, often contains blood clot.</li>
        </ol>
      </div>
    </div>
  );

      case 'Slides of Blood Vessels':
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
        <button className="tab-button" onClick={() => handleTabChange('Slides of Blood Vessels')}>Slides of Blood Vessels</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default BloodVessel;
