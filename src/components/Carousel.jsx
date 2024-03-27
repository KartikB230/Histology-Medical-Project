import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" interval={2000}>
      <Carousel.Item>
        <Link to="/SquamousEpithelium">
          <div className='caimag'>
            <img
              className="d-block"
              src="/assets/Carouse/Img1.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Squamous Epithelium</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/Thyroid">
          <div className='caimag'>
            <img
              className="d-block"
              src="/assets/Carouse/Img2.tif"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Thyroid</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/Medulla">
          <div className='caimag'>
            <img
              className="d-block"
              src="/assets/Carouse/Img3.png"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Medulla</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/Cortex">
          <div className='caimag'>
            <img
              className="d-block"
              src="/assets/Carouse/Img4.jpeg"
              alt="Fourth slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Cortex</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/Adrenal">
          <div className='caimag'>
            <img
              className="d-block"
              src="/assets/Carouse/Img5.png"
              alt="Fifth slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Adrenal Gland</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
