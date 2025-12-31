import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import { useQuizLogic } from './script';

const Muscle = () => {
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
    { name: 'Skeletal Muscle', img: '/assets/Images/Muscle/Skeletal Muscle Low Magnification.jpg', link: '/SkeletalMuscle', keywords: [] },
    { name: 'Skeletal Muscle LS', img: '/assets/Images/Muscle/Skeletal Muscle LS Low Magnification.jpg', link: '/SkeletalMuscleLS', keywords: [] },
    { name: 'Smooth Muscle', img: '/assets/Images/Muscle/Smooth Muscle Low Magnification.jpg', link: '/SmoothMuscle', keywords: [] },
    { name: 'Cardiac Muscle', img: '/assets/Images/Muscle/Cardiac Muscle Low Magnification.jpg', link: '/CardiacMuscle', keywords: [] }
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { 
        question: "What is the main function of muscle tissue?", 
        options: ["Transmission of nerve impulses", "Contraction and movement", "Support and protection", "Production of hormones"], 
        correct: 1 
    },
    { 
        question: "Which of the following correctly describes a sarcomere?", 
        options: ["The contractile unit between two Z lines", "The site of nerve-muscle interaction", "The entire muscle fiber", "The connective tissue surrounding muscle bundles"], 
        correct: 0 
    },
    { 
        question: "Which type of muscle shows prominent cross-striations and peripheral nuclei?", 
        options: ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "None of the above"], 
        correct: 2 
    },
    { 
        question: "What distinguishes cardiac muscle from skeletal muscle?", 
        options: ["Lack of striations", "Presence of peripheral nuclei", "Presence of intercalated discs and branching fibers", "Multinucleate fibers"], 
        correct: 2 
    },
    { 
        question: "Which connective tissue surrounds individual muscle fibers?", 
        options: ["Endomysium", "Epimysium", "Myomysium", "Perimysium"], 
        correct: 0 
    },
    { 
        question: "What is a unique identifying feature of cardiac muscle?", 
        options: ["Striations and intercalated discs", "Lack of T tubules", "Peripheral nuclei", "Spindle-shaped fibers"], 
        correct: 0 
    },
    { 
        question: "Which muscle type lacks striations and has spindle-shaped cells?", 
        options: ["Cardiac muscle", "All of the above", "Smooth muscle", "Skeletal muscle"], 
        correct: 2 
    },
    { 
        question: "Red and white muscle fibers differ based on what component?", 
        options: ["Type of connective tissue", "Presence of collagen", "Amount of myoglobin", "Quantity of mitochondria"], 
        correct: 2 
    },
    { 
        question: "In skeletal muscle, what causes the striated appearance?", 
        options: ["Presence of nuclei", "Alternating A and I bands", "High amount of connective tissue", "Random arrangement of fibers"], 
        correct: 1 
    },
    { 
        question: "Which of the following best describes smooth muscle under a light microscope?", 
        options: ["Striated and cylindrical fibers", "Multinucleated peripheral nuclei", "Branched fibers with intercalated discs", "Spindle-shaped fibers with central nuclei"], 
        correct: 3 
    }
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
      {/* Section 1: Comparison of Cartilage Types */}
      <div className='cartilage-section'>
        <h2 className='epithelium-title'>Specific Learning Objectives</h2>
        At the end of this topic, you should be able to:-<br/>
        <br/><ol className="epithelium-objectives-list">
            <li>Define Muscle Tissue.</li>
            <li>Describe the structure of muscle tissue.</li>
            <li>Differentiate between Muscle fasciculi, Muscle fibres, and Myofibrils.</li>
            <li>Describe the sarcomere.</li>
            <li>Enumerate the differentiating features of Skeletal muscle, Smooth muscle and Cardiac Muscle.</li>
            <li>Differentiate between Red and White types of Skeletal Muscle fibres.</li>
            <li>Identify sections of Skeletal muscle, Smooth muscle, and Cardiac muscle under a light microscope.</li>
            </ol>
      </div>

      <div className='cartilage-section'>
        <h2 className='epithelium-title'>Introduction</h2>
        <br/><ol className="epithelium-objectives-list">
            <li>Muscle tissue is a specialized tissue which shows the property of contractility. It is responsible for movements of the body and its various body parts.</li>
            <li>Muscles are mesodermal in development.</li>
            <li>Muscles are structurally made of muscle fibres which are bound into bundles (fascicule) by connective tissue. Muscle fibres are also called as muscle cells. Muscle fibres are made of numerous Muscle Fibrils(Myofibril). Each Myofibril has numerous sarcomeres.</li>
            <li>A sarcomere is the smallest functional subunit of a muscle fibre.</li>
            </ol>
      </div>

      {/* Section 2: Cartilage Components */}
      <div className="cartilage-section">
        <h2 className="epithelium-title">Types of Muscles</h2>
        <div className="table-responsive">
          <table className="cartilage-table">
            <thead>
              <tr>
                <th>Skeletal muscle</th>
                <th>Cardiac muscle</th>
                <th>Smooth muscle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Elongated, cylindrical fibres</td>
                <td>Elongated, prism shaped fibres</td>
                <td>Spindle shaped fibres</td>
              </tr>
              <tr>
                <td>10-40 mm in length, 100 microns in width</td>
                <td>9-22 microns</td>
                <td>20-200 microns in length and 3-8 microns in width</td>
              </tr>
              <tr>
                <td>Muscle fibres are arranged parallel to each other</td>
                <td>Fibres are arranged in anastamosing fashion</td>
                <td>Fibres are arranged with the broadest parts alternating</td>
              </tr>
              <tr>
                <td>Nucleus is peripheral</td>
                <td>Central nucleus</td>
                <td>Central nucleus, located in the broadest part</td>
              </tr>
              <tr>
                <td>Striations seen</td>
                <td>Striations seen</td>
                <td>Striations not seen</td>
              </tr>
              <tr>
                <td>T tubules are seen</td>
                <td>T tubules are seen</td>
                <td>T tubules are absent</td>
              </tr>
              <tr>
                <td>Adult cells do not divide</td>
                <td>Do not divide</td>
                <td>Can divide</td>
              </tr>
              <tr>
                <td>Spontaneous contractions are absent</td>
                <td>Spontaneous contractions are present, regulated by autonomic stimuli</td>
                <td>Spontaneous contractions present, stimulated by autonomic and hormonal stimuli.</td>
              </tr>
              <tr>
                <td>Under control of spinal nerves</td>
                <td>Under control of autonomic nervous system</td>
                <td>Under control of autonomic nervous system</td>
              </tr>
              <tr>
                <td>Voluntary</td>
                <td>Involuntary</td>
                <td>Involuntary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="cartilage-section">
        <h2 className="epithelium-title">Comparison of Muscle Types</h2>
        <div className="table-responsive">
          <table className="cartilage-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Red Muscle fibres</th>
                <th>White Muscle fibres</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Type</td>
                <td>Type I , Aerobic</td>
                <td>Type II, Anaerobic</td>
              </tr>
              <tr>
                <td>Myoglobin and cytochrome content</td>
                <td>High</td>
                <td>Less</td>
              </tr>
              <tr>
                <td>Mitochondria</td>
                <td>Many</td>
                <td>Few</td>
              </tr>
              <tr>
                <td>Enzyme</td>
                <td>Succinate dehydrogenase Myosin ATPase present</td>
                <td>Succinate dehydrogenase Myosin ATPase  absent</td>
              </tr>
              <tr>
                <td>Type of contraction</td>
                <td>Slow and continuous contractions, not easily fatigued</td>
                <td>Rapid and forceful contractions, easily fatigued.</td>
              </tr>
              <tr>
                <td>Diameter of fibres</td>
                <td>Smaller in diameter</td>
                <td>Larger in diameter</td>
              </tr>
              <tr>
                <td>Examples</td>
                <td>Postural muscles</td>
                <td>Extra-ocular muscles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='cartilage-section'>
  <h2 className='epithelium-title'>Identification Points</h2>
  <br />
  <ol className="epithelium-objectives-list">
    <li>
      Skeletal Muscle LS
      <ul className="custom-bullets">
        <li>Elongated cylindrical unbranched fibres</li>
        <li>Multinucleate, nuclei at the periphery</li>
      </ul>
    </li>
    <li>
      Skeletal Muscle TS
      <ul className="custom-bullets">
        <li>Transversely cut fibres with peripheral nuclei</li>
        <li>Endomysium, perimysium and epimysium seen</li>
      </ul>
    </li>
    <li>
      Smooth Muscle LS
      <ul className="custom-bullets">
        <li>Spindle shaped unbranched fibres</li>
        <li>Uninucleate, nucleus at the centre</li>
      </ul>
    </li>
    <li>
      Smooth Muscle TS
      <ul className="custom-bullets">
        <li>Transversely cut fibres with peripheral nuclei</li>
        <li>Endomysium, perimysium and epimysium seen</li>
      </ul>
    </li>
    <li>
      Cardiac Muscle
      <ul className="custom-bullets">
        <li>Elongated cylindrical branched fibres</li>
        <li>Uninucleate or binucleate, nuclei at the centre</li>
      </ul>
    </li>
  </ol>
</div>


      <div className='cartilage-section'>
        <h2 className='epithelium-title'>Summary</h2>
        <br/><ol className="epithelium-objectives-list">
            <li>A longitudinal section of skeletal muscle shows broad and cylindrical muscle fibres. The fibres are arranged together in bundles. Bundles may branch but individual fibres do not branch. Each fibre shows many nuclei which are placed at the periphery. Muscle fibres show characteristic transverse striations. In a transverse section, cut muscle fibres are seen with peripherally placed nuclei.</li>
            <li>A longitudinal section of smooth muscle shows spindle shaped fibres. The fibres are thinner as compared to skeletal muscle fibres. Nucleus is present in the centre of the fibre. In a transverse section, fibres are seen as circular structures of varying width with nuclei in the centre.</li>
            <li>A longitudinal section of cardiac muscle shows cylindrical fibres. The fibres are thinner as compared to skeletal muscle fibres. The fibres branch into smaller fibres. Fibres show faint transverse striations. The nuclei are centrally placed and vesicular in nature. Intercalated discs are typically seen in cardiac muscle fibres.</li>
            </ol>
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
        <button className="tab-button" onClick={() => handleTabChange('Types of Cartilage')}>Slides of Muscle</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer/>
    </div>
  );
}

export default Muscle;
