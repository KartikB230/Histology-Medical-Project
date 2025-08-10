import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';
import { useQuizLogic } from './script';

const Endocrine = () => {
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
    { name: 'Thyroid', img: '/assets/Images/Thyroid/Thyroid Low magnification.tif', link: '/Thyroid', keywords: [] },
    { name: 'Adrenal Gland', img: '/assets/Images/Adrenal/Adrenal_Gland.png', link: '/Adrenal', keywords: [] },
    { name: 'Pituitary Gland', img: '/assets/Images/Pituitary/Pituitary Low Magnification.png', link: '/Pituitary', keywords: [] }
  ];

  const filteredTiles = tiles.filter(tile =>
    tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tile.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const questions = [
    { question: "The structural and functional unit of the thyroid gland is the:", options: ["Acinus", "Follicle", "Sinusoid", "Cord"], correct: 1 },
    
    { question: "The anterior pituitary (adenohypophysis) develops from:", options: ["Neural crest", "Oral ectoderm (Rathke’s pouch)", "Diencephalon", "Surface ectoderm"], correct: 1 },
    
    { question: "Which layer of the adrenal cortex secretes glucocorticoids?", options: ["Zona glomerulosa", "Zona fasciculata", "Zona reticularis", "Zona medullaris"], correct: 1 },
    
    { question: "Which part of the adrenal gland shows polygonal, lightly stained cells arranged in cords and surrounded by sinusoidal capillaries?", options: ["Zona glomerulosa", "Zona reticularis", "Zona fasciculata", "Medulla"], correct: 2 },
    
    { question: "Follicular cells of the thyroid gland secrete:", options: ["Calcitonin", "Parathormone", "T3 and T4", "Cortisol"], correct: 2 },
    
    { question: "Which cell type secretes growth hormone in the anterior pituitary?", options: ["Basophils", "Chromaffin cells", "Acidophils", "Follicular cells"], correct: 2 },
    
    { question: "During histological examination of the pituitary, which region shows unmyelinated axons and Herring bodies?", options: ["Pars distalis", "Pars intermedia", "Pars nervosa", "Infundibulum"], correct: 2 },
    
    { question: "Which cells of the thyroid gland secrete calcitonin?", options: ["Follicular cells", "C cells", "Acidophils", "Cortical cells"], correct: 1 },
    
    { question: "In a histological section of the thyroid gland, what is the appearance of the colloid inside the follicles?", options: ["Homogeneous and pale-staining", "Granular and basophilic", "Darkly eosinophilic and clumpy", "Clear with vacuolated spaces"], correct: 0 },
    
    { question: "Which of the following best describes the histological structure of the anterior pituitary (adenohypophysis)?", options: ["It contains cuboidal cells arranged in columns and interspersed with blood vessels", "It consists mainly of large cells with abundant secretory granules", "It has a meshwork of unmyelinated axons and Herring bodies", "It is composed of dense clusters of neurosecretory cells with few blood vessels"], correct: 0 }
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
            <div className='cartilage-section'>
              <h2 className='epithelium-title'>Specific Learning Objectives</h2>
              At the end of this topic, you should be able to:-<br />
              <br /><ol className="epithelium-objectives-list">
                <li>Enumerate the characteristic features of Endocrine glands.</li>
                <li>Enumerate the differences between Adenohypophysis and Neurohypophysis of pituitary.</li>
                <li>Comment of Hypothalamo-Hypophyseal tract.</li>
                <li>Comment on Thyroid Follicles, Colloid within follicles & Parafollicular cells.</li>
                <li>Enumerate the differences between Cortex and Medulla of Suprarenal gland.</li>
                <li>Identify sections of pituitary, thyroid and adrenal glands under light microscope and list out identifying features of each.</li>
              </ol>
            </div>

            <div className='cartilage-section'>
              <h2 className='epithelium-title'>Introduction</h2>
              <ol className="epithelium-objectives-list">
                <li>Endocrine glands do not have a duct system. They pour their specialized secretions directly into the blood stream. Microscopic pictures of these tissues, therefore, show a large number of blood vessels and sinusoids.</li>
                <li>Thyroid, Parathyroid, Pituitary and Suprarenal glands are fairly large anatomical structures which can be seen by the unaided eye. The Liver also has certain endocrine functions.</li>
                <li>Certain other tissues of the body possess endocrine functions. These much smaller structures, which cannot be seen by the naked eye, include the islets of Langerhans in Pancreas, Interstitial cells of Leydig in the testis, Ovarian follicles and Corpus Luteum of Ovary.</li>
                <li>Sections of Thyroid, Pituitary and Suprarenal glands show characteristic features and can be easily differentiated under the light microscope.</li>
              </ol>
            </div>

            <div className="cartilage-section">
              <h2 className="epithelium-title">Adrenal Gland Regions Comparison</h2>
              <div className="table-responsive">
                <table className="cartilage-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Zona Glomerulosa</th>
                      <th>Zona Fasciculata</th>
                      <th>Zona Reticularis</th>
                      <th>Adrenal Medulla</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Location</td>
                      <td>Outer layer (beneath capsule)</td>
                      <td>Middle and widest cortical layer</td>
                      <td>Innermost cortical layer</td>
                      <td>Innermost region of adrenal gland</td>
                    </tr>
                    <tr>
                      <td>Cell Arrangement</td>
                      <td>Rounded clusters or arches</td>
                      <td>Long straight cords</td>
                      <td>Irregular networks or cords</td>
                      <td>Chromaffin cells in clusters</td>
                    </tr>
                    <tr>
                      <td>Cell Appearance</td>
                      <td>Small, densely packed</td>
                      <td>Large, foamy (lipid-rich)</td>
                      <td>Small, compact</td>
                      <td>Large, basophilic chromaffin cells</td>
                    </tr>
                    <tr>
                      <td>Cytoplasm</td>
                      <td>Eosinophilic, less lipid</td>
                      <td>Pale due to lipid</td>
                      <td>Acidophilic, less lipid</td>
                      <td>Basophilic with secretory granules</td>
                    </tr>
                    <tr>
                      <td>Main Hormones Produced</td>
                      <td>Mineralocorticoids (aldosterone)</td>
                      <td>Glucocorticoids (cortisol)</td>
                      <td>Androgens (DHEA)</td>
                      <td>Catecholamines (epinephrine, norepinephrine)</td>
                    </tr>
                    <tr>
                      <td>Stimulated By</td>
                      <td>Renin-angiotensin system</td>
                      <td>ACTH</td>
                      <td>ACTH (lesser extent)</td>
                      <td>Sympathetic nervous system</td>
                    </tr>
                    <tr>
                      <td>Vascularization</td>
                      <td>Moderate</td>
                      <td>Rich capillary network</td>
                      <td>Rich capillary network</td>
                      <td>Very rich vascular network</td>
                    </tr>
                    <tr>
                      <td>Function</td>
                      <td>Regulates Na⁺/K⁺ balance</td>
                      <td>Regulates metabolism, stress response</td>
                      <td>Contributes to sex hormone production</td>
                      <td>Fight or flight response</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="cartilage-section">
              <h2 className="epithelium-title">Pituitary Gland Regions Comparison</h2>
              <div className="table-responsive">
                <table className="cartilage-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Pars Anterior (Anterior Pituitary)</th>
                      <th>Pars Intermedia</th>
                      <th>Pars Nervosa (Posterior Pituitary)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Location</td>
                      <td>Front portion of the pituitary gland</td>
                      <td>Thin zone between pars anterior and pars nervosa</td>
                      <td>Rear portion of the pituitary gland</td>
                    </tr>
                    <tr>
                      <td>Major Cell Types</td>
                      <td>Chromophils (acidophils, basophils), chromophobes</td>
                      <td>Basophilic cells, colloid-filled cysts</td>
                      <td>Pituicytes (glial-like cells), unmyelinated axons</td>
                    </tr>
                    <tr>
                      <td>Function</td>
                      <td>Produces and secretes tropic hormones (GH, ACTH, TSH, LH, FSH, PRL)</td>
                      <td>Produces small amounts of MSH (melanocyte-stimulating hormone)</td>
                      <td>Stores and releases hypothalamic hormones (ADH, oxytocin)</td>
                    </tr>
                    <tr>
                      <td>Histological Appearance</td>
                      <td>Densely cellular; acidophils and basophils stain differently</td>
                      <td>Thin layer; colloid-filled cysts; fewer cells</td>
                      <td>Appears as neural tissue; fewer cells, more fibers</td>
                    </tr>
                    <tr>
                      <td>Staining Characteristics</td>
                      <td>Cells stain strongly (due to granules in chromophils)</td>
                      <td>Intermediate staining; presence of cystic spaces</td>
                      <td>Poorly staining; pituicytes and nerve fibers</td>
                    </tr>
                    <tr>
                      <td>Direct Hypothalamic Connection</td>
                      <td>No (connected via portal system)</td>
                      <td>No (functionally related to anterior lobe)</td>
                      <td>Yes (direct axonal connection)</td>
                    </tr>
                    <tr>
                      <td>Hormone Storage</td>
                      <td>No (hormones synthesized and released on demand)</td>
                      <td>Minor hormone storage (MSH in cysts)</td>
                      <td>Yes (hormones synthesized in hypothalamus, stored in nerve endings)</td>
                    </tr>
                    <tr>
                      <td>Structural Density</td>
                      <td>Highly cellular</td>
                      <td>Moderately cellular with cysts</td>
                      <td>Low cellularity; fibrous appearance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="cartilage-section">
              <h2 className="epithelium-title">Thyroid Follicles Comparison</h2>
              <div className="table-responsive">
                <table className="cartilage-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Active Thyroid Follicles</th>
                      <th>Passive Thyroid Follicles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Follicle Size</td>
                      <td>Small</td>
                      <td>Large</td>
                    </tr>
                    <tr>
                      <td>Colloid Amount</td>
                      <td>Scanty (less colloid)</td>
                      <td>Abundant (more colloid)</td>
                    </tr>
                    <tr>
                      <td>Colloid Appearance</td>
                      <td>Vacuolated or scalloped (due to resorption activity)</td>
                      <td>Homogeneous and dense</td>
                    </tr>
                    <tr>
                      <td>Follicular Cell Shape</td>
                      <td>Columnar or cuboidal</td>
                      <td>Flattened or squamous</td>
                    </tr>
                    <tr>
                      <td>Epithelial Height</td>
                      <td>Tall (indicating high metabolic activity)</td>
                      <td>Low (indicating low metabolic activity)</td>
                    </tr>
                    <tr>
                      <td>Thyroid Activity Status</td>
                      <td>Active (synthesizing and secreting thyroid hormones)</td>
                      <td>Inactive or resting</td>
                    </tr>
                    <tr>
                      <td>TSH Influence</td>
                      <td>High TSH stimulation</td>
                      <td>Low TSH stimulation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='cartilage-section'>
              <h2 className='epithelium-title'>Summary</h2>
              <ol className="epithelium-objectives-list">
                <li>A section through the Pituitary gland shows cellular pars anterior and pars posterior predominantly made of nerve fibres. Pars anterior show acidophils, basophils and chromophobes. The vestigial pars intermedia is placed between pars anterior and pars posterior and shows colloid filled vesicles.</li>
                <li>The Thyroid gland shows large number of follicles filled with a pink staining colloid. Parafollicular cells are occasionally seen interspersed between the follicles.</li>
                <li>The Suprarenal gland consists of an outer cortex and an inner medulla. The cortex consists of three layers, namely Zona glomerulosa, Zona fasciculate and Zona reticularis. In Zona glomerulosa, the cells are arranged in the shape of inverted U shaped balls. In Zona fasciculata, cells are arranged in the form of straight columns. In Zona reticularis, the cells are arranged in form of branching and anastamosing cords. The medulla contains large numbers of cells, sinusoids and some sympathetic neurons.</li>
              </ol>
            </div>
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
        <button className="tab-button" onClick={() => handleTabChange('Slides of Endocrine')}>Slides of Endocrine</button>
        <button className="tab-button" onClick={() => handleTabChange('Quiz')}>Quiz</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

export default Endocrine;
