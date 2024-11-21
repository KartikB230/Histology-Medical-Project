import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';

const Cartilage = () => {
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
    { name: 'Hyaline Cartilage', img: '/assets/Images/Cartilage/Hyaline Cartilage Low Magnification.jpg', link: '/HyalineCartilage', keywords: [] },
    { name: 'Elastic Cartilage', img: '/assets/Images/Cartilage/Elastic Cartilage Low Magnification.jpg', link: '/ElasticCartilage', keywords: [] },
    { name: 'White Fibrous Cartilage', img: '/assets/Images/Cartilage/White Fibrous Cartilage Low Magnification.jpg', link: '/WhiteFibrousCartilage', keywords: [] }
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { question: "What is hyaline cartilage?", options: ["A type of muscle tissue", "A type of cartilage that provides flexibility and support", "A type of bone tissue", "None of the above"], correct: 1 },
    { question: "Where is hyaline cartilage commonly found?", options: ["In the ear", "In the intervertebral discs", "At the ends of long bones", "In tendons"], correct: 2 },
    { question: "What is a key characteristic of hyaline cartilage?", options: ["It contains a lot of elastic fibers", "It is rich in collagen fibers and is glass-like", "It is highly vascular", "It is primarily composed of adipose cells"], correct: 1 },
    { question: "What is the main function of white fibrous cartilage?", options: ["To provide shock absorption and resist compression", "To facilitate smooth movement at joints", "To maintain the shape of soft structures", "To assist in oxygen transport"], correct: 0 },
    { question: "Where is white fibrous cartilage found?", options: ["In the nose", "In the intervertebral discs and menisci", "In the trachea", "In the external ear"], correct: 1 },
    { question: "What distinguishes white fibrous cartilage from other types?", options: ["It contains densely packed collagen fibers", "It is highly flexible", "It lacks any fibers", "It is found only in the respiratory system"], correct: 0 },
    { question: "What is elastic cartilage?", options: ["A type of muscle tissue", "A type of cartilage that provides flexibility to certain body structures", "A type of nervous tissue", "None of the above"], correct: 1 },
    { question: "Where can elastic cartilage be found?", options: ["In the external ear and epiglottis", "In the intervertebral discs", "In the long bones", "In the heart valves"], correct: 0 },
    { question: "What is a defining feature of elastic cartilage?", options: ["It has a high density of elastic fibers, making it flexible", "It contains more collagen fibers than hyaline cartilage", "It is involved in red blood cell production", "It is the hardest and least flexible of all cartilage types"], correct: 0 },
    { question: "Which of the following is a shared function of hyaline, white fibrous, and elastic cartilage?", options: ["Providing structure and support to body parts", "Aiding in muscle contraction", "Carrying electrical impulses", "None of the above"], correct: 0 }
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
      {/* Section 1: Comparison of Cartilage Types */}
      <div className="cartilage-section">
        <h2 className="epithelium-title">Comparison of Cartilage Types</h2>
        <div className="table-responsive">
          <table className="cartilage-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Hyaline Cartilage</th>
                <th>Elastic Cartilage</th>
                <th>White Fibrocartilage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Appearance</td>
                <td>Glass-like, homogenous, amorphous</td>
                <td>Light yellow due to elastic fibers</td>
                <td>Feathery appearance due to collagen bundles</td>
              </tr>
              <tr>
                <td>Perichondrium</td>
                <td>Present in typical hyaline cartilage; absent in articular cartilage</td>
                <td>Usually present</td>
                <td>Absent</td>
              </tr>
              <tr>
                <td>Matrix Composition</td>
                <td>Basophilic, glass-like with territorial and interterritorial matrix</td>
                <td>Contains numerous elastic fibers, pliable</td>
                <td>Basophilic, filled with Type I collagen bundles</td>
              </tr>
              <tr>
                <td>Cell Arrangement</td>
                <td>Cell nests (isogenous cell nests)</td>
                <td>Larger cells in groups (cell nests)</td>
                <td>Fewer small lacunae with chondrocytes, no cell nests</td>
              </tr>
              <tr>
                <td>Fibers</td>
                <td>Type II collagen fibers, glass-like matrix</td>
                <td>Elastic fibers (yellow elastic tissue)</td>
                <td>Type I collagen fibers</td>
              </tr>
              <tr>
                <td>Site Examples</td>
                <td>Costal cartilages, articular cartilages, thyroid, cricoid, arytenoid, tracheal rings, bronchi, nasal septum, epiphyseal plates</td>
                <td>Ear pinna, eustachian tube, epiglottis, laryngeal cartilages, apical parts of arytenoid</td>
                <td>Secondary cartilaginous joints, articular discs, glenoidal labrum, acetabular labrum, intervertebral discs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Cartilage Components */}
      <div className="cartilage-section">
        <h2 className="epithelium-title">Cartilage Components</h2>
        <div className="table-responsive">
          <table className="cartilage-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cells</td>
                <td>Chondroblasts, Chondrocytes</td>
              </tr>
              <tr>
                <td>Fibers</td>
                <td>Collagen (Type II except Fibrocartilage which has Type I)</td>
              </tr>
              <tr>
                <td>Ground Substance</td>
                <td>Elastic, Chondroitin Sulphate, Water, Electrolytes</td>
              </tr>
              <tr>
                <td>Matrix</td>
                <td>Ground Substance + Fibers</td>
              </tr>
              <tr>
                <td>Perichondrium</td>
                <td>Outer fibrous layer, Inner cellular layer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Section 3: Types of Cartilage - Diagram */}
      <div className='cartilage-section'>
        <div className='epithelium-title'>Types of Cartilage</div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        
          <img 
            src="assets/Images/Cartilage/Diagram1.png" 
            className='epithelium-image' 
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} 
            alt="Description" 
          />
        </div>
      </div>
    </div>
    
  );


      case 'Types of Cartilage':
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
        <button className="tab-button" onClick={() => handleTabChange('Types of Cartilage')}>Slides of Cartilage</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default Cartilage;
