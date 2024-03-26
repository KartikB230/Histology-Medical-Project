import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

function BCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  

  return (    
    <div>
    <Carousel  activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
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
      </Carousel.Item>


      <Carousel.Item>
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
      </Carousel.Item>


      <Carousel.Item>
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
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="/assets/Carouse/Img4.jpeg"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Cortex</h3>
          
        </Carousel.Caption>
      </Carousel.Item>      
      
    </Carousel>
    </div>
  );
}

export default BCarousel
