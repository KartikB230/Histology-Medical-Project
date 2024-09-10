import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='homediv' style={{ position: 'relative' }}>
      
      <h3
        className="span"
        style={{
          position: 'absolute',
          color: 'white',
          textAlign: 'left',
          top: '42%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          fontSize: '50px',
        }}
      >
        <strong>Discover the Microscopic Wonders,</strong><br />
        <span style={{ color: 'red' }}>
          <b>
            <Typewriter
              words={[
                ' "Unveiling the mysteries of cellular architecture."',
                ' "Histology: A journey into the unseen beauty of tissues."',
                ' "In the microscopic world, every cell tells a story."',
                ' "Exploring the intricate patterns of life through histology."',
                ' "Believe in the magic of stained slides and hidden details."',
              ]}
              loop={50}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </b>
        </span>
      </h3>
    </div>
  );
};

export default Home;
