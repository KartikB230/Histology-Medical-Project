import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';

const Bone = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Theory');
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [score, setScore] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [buttonClicked, setButtonClicked] = useState(false);

  // Disable right-click and direct image download
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault(); // Prevent right-click context menu
    };

    const disableImageDownload = (e) => {
      // Prevent image download by blocking the right-click on images
      if (e.target && e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Add event listeners for right-click and image downloads
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('mousedown', disableImageDownload); // Disable right-click on images

    // Cleanup event listeners on component unmount
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
    { name: 'Ground Bone TS', img: '/assets/Images/Bone/Ground Bone TS Low Magnification.jpg', link: '/BoneTS', keywords: [] },
    { name: 'Ground Bone LS', img: '/assets/Images/Bone/Ground Bone LS Low Magnification.jpg', link: '/BoneLS', keywords: [] },
    { name: 'Osteon', img: '/assets/Images/Bone/Osteon Low Magnification.jpg', link: '/Osteon', keywords: [] },
    
    
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { question: "What is the main function of the periosteum in bone?", options: ["Protection and nourishment", "Production of red blood cells", "Heat regulation", "Fat storage"], correct: 0 },
    { question: "What are Sharpey's fibers?", options: ["Cells in bone marrow", "Collagen fibers connecting periosteum to bone", "Fibers in the spongy bone", "Fibers in tendons"], correct: 1 },
    { question: "Which layer of the periosteum contains osteoprogenitor cells?", options: ["Outer fibrous layer", "Inner cellular layer", "Trabecular layer", "Compact layer"], correct: 1 },
    { question: "What type of tissue is the periosteum made of?", options: ["Cartilage", "Adipose tissue", "Dense connective tissue", "Epithelial tissue"], correct: 2 },
    { question: "Where are osteoprogenitor cells primarily located in bone?", options: ["Bone marrow", "Periosteum", "Endosteum", "Haversian canal"], correct: 1 },
    { question: "What is the function of collagen fibers in the periosteum?", options: ["Storing minerals", "Attaching tendons and ligaments to bone", "Transporting blood", "Producing red blood cells"], correct: 1 },
    { question: "What is the primary role of osteoprogenitor cells?", options: ["Produce collagen", "Form osteoblasts", "Store fat", "Produce red blood cells"], correct: 1 },
    { question: "The periosteum is attached to bones by which type of fibers?", options: ["Elastic fibers", "Collagen fibers", "Reticular fibers", "Sharpey's fibers"], correct: 3 },
    { question: "What is the outer layer of the periosteum made of?", options: ["Elastic tissue", "Fibrous connective tissue", "Bone tissue", "Cartilage"], correct: 1 },
    { question: "How are collagen fibers in the periosteum arranged?", options: ["At random angles", "Parallel to the bone surface", "In circular patterns", "None of the above"], correct: 1 }
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
    <h2 className="epithelium-title">Bone Structure and Types</h2>
    <div className="cartilage-section">
        <table className="cartilage-table">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>Compact Bone (Dense Bone)</th>
                    <th>Spongy Bone (Cancellous Bone)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Architecture</td>
                    <td>Definite, organized structure</td>
                    <td>Sponge-like with thin trabeculae (spicules forming a meshwork)</td>
                </tr>
                <tr>
                    <td>Bone Type</td>
                    <td>Mostly lamellar bone</td>
                    <td>Can be woven or lamellar bone</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>Outer layer of bones</td>
                    <td>Interior of bones (ends of long bones, interior of flat bones)</td>
                </tr>
                <tr>
                    <td>Arrangement of Tissue</td>
                    <td>Dense and compact</td>
                    <td>Arranged in trabeculae or spicules</td>
                </tr>
                <tr>
                    <td>Osteons</td>
                    <td>Present throughout</td>
                    <td>Present if trabeculae are thick enough</td>
                </tr>
                <tr>
                    <td>Strength</td>
                    <td>Strong and dense</td>
                    <td>Lighter and less dense</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  );

      case 'Slides of Bone':
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
        <button className="tab-button" onClick={() => handleTabChange('Slides of Bone')}>Slides of Bone</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default Bone;
