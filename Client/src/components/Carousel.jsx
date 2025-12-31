import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  // Disable right-click and direct image download
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

  return (
    <div className="carousel-container d-flex justify-content-center">
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" interval={2000} slide={false}>
        <Carousel.Item>
          <Link to="/Epithelium">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Epithelium.jpg"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Epithelium</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/ConnectiveTissue">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Connective Tissue.jpg"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Connective Tissue</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/Cartilage">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Cartilage.jpg"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Cartilage</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/Bone">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse//Bone.jpg"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Bone</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/Adrenal">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Adrenal.png"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Adrenal Gland</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        
        <Carousel.Item>
          <Link to="/Pituitary">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Pituitary.png"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Pituitary Gland</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/Thyroid">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Thyroid.tif"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Thyroid</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/Medulla">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Kidney.jpg"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Kidney</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/BloodVessel">
            <div className='carousel-image'>
              <img alt= "" 
                className="d-block w-100"
                src="/assets/Images/Carouse/Blood Vessel.jpg"
               
              />
            </div>
            <Carousel.Caption>
              <h3>Blood Vessels</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
