import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css';

const Epithelium = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Theory');
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (activeTab === 'Types of Epithelium' && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [activeTab]);

  const tiles = [
    { name: 'Simple Squamous Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Squamous _low.jpeg', link: '/SquamousEpithelium', keywords: [] },
    { name: 'Simple Cuboidal Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Cuboidal_low.jpeg', link: '/SimpleCuboidalEpithelium', keywords: ['cuboidal', 'simple', 'epithelium'] },
    { name: 'Simple Columnar Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Columnar_low.jpeg', link: '/SimpleColumnarEpithelium', keywords: ['columnar', 'simple', 'epithelium'] },
    { name: 'Pseudostratified Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Pseudo _low.jpg', link: '/PseudostratifiedEpithelium', keywords: ['pseudostratified', 'epithelium'] },
    { name: 'Transitional Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Trans_low.jpeg', link: '/TransitionalEpithelium', keywords: ['transitional', 'epithelium'] },
    { name: 'Stratified Squamous Keratinised Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Strat_ker_low.jpeg', link: '/StratifiedSquamousKeratinisedEpithelium', keywords: ['stratified', 'squamous', 'keratinised', 'epithelium'] },
    { name: 'Stratified Squamous Non-Keratinised Epithelium', img: '/assets/Images/Epithelium/Unlabelled/Strat_non_ker_low.jpg', link: '/StratifiedSquamousNonKeratinisedEpithelium', keywords: ['stratified', 'squamous', 'non-keratinised', 'epithelium'] }
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
            <div className='epithelium-image-box'>
            <h2 className="epithelium-title">Specific Learning Objectives</h2>
            <ol className="epithelium-list">
              <li>Define epithelial tissue.</li>
              <li>Enumerate the common features of epithelial tissue.</li>
              <li>Enlist the functions of epithelial tissue.</li>
              <li>Classify epithelial tissues and give examples of each variety.</li>
              <li>Differentiate between Cilia, Stereocilia, and Microvilli.</li>
              <li>Differentiate between Basal membrane and Basal Lamina.</li>
              <li>Identify various types of epithelia under a light microscope.</li>
            </ol>
            </div>
            
            <div className='epithelium-image-box'>
            <h2 className="epithelium-title">Introduction</h2>
            <ul className="epithelium-list">
              <li>Epithelial tissue forms the lining of general body surfaces, passages and cavities within the body.</li>
              <li>The tissue is composed of closely packed cells which are adherent to each other through junctional complexes of various kinds.</li>
              <li>Basement membrane connects the epithelium to the underlying subepithelial tissues.</li>
              <li>The important functions of the tissue include protection, absorption, secretion, excretion, sensory perception, chemoreception, prevention of wear and tear and conservation of moisture.</li>
              <li>Classification of epithelial tissue is based on the shape of cells, number of cell layers and special modifications seen on cells.</li>
              <li>Individual epithelial cells or groups of such cells which are specialised to secrete specific products are called Glands</li>
            </ul>
            </div>
            

          
            <div className="epithelium-image-box" >
              <img src="/assets/Images/Epithelium/Diagram1.png" alt="Image 1" className="epithelium-image image-1" />
              <img src="/assets/Images/Epithelium/Diagram2.png" alt="Image 2" className="epithelium-image image-2" />
              <ul className="epithelium-list">
                <strong>
                <li>Various cells attached to each other with various types of cell junctions - Zona Occludens, Zona Adherens, Macula Adherens and Gap Junctions.</li>
                <li>The basic function of every epithelium is protection.</li>
                <li>The cells of epithelium rest on basement membrane.</li>
                </strong>
              </ul>
            </div>
            
            
            <div className="epithelium-image-box">
            <h2 className="epithelium-title">Modifications of Epithelial Cells</h2>
              <img src="/assets/Images/Epithelium/Diagram4.jpg" alt="Image 4" className="epithelium-image image-4" />
            </div>
           <br/>
            <div className="epithelium-image-box">
              <img src="/assets/Images/Epithelium/Diagram3.jpg" alt="Image 3" className="epithelium-image image-3" />
            </div>
          </div>
        );
      case 'Types of Epithelium':
        return (
          <div className="types-content">
            <div className="search-bar">
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
        <button className="tab-button" onClick={() => setActiveTab('Theory')}>Theory</button>
        <button className="tab-button" onClick={() => setActiveTab('Types of Epithelium')}>Types of Epithelium</button>
        <button className="tab-button" onClick={() => setActiveTab('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Epithelium;
