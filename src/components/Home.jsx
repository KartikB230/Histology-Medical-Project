import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='homediv' style={{ position: 'relative' }}>
      <img
        className="homeimg"
        src="https://img.freepik.com/premium-photo/group-indian-medical-doctors-male-female-standing-isolated-white-background-selective-focus_466689-33683.jpg"
        alt="Home Image"
        style={{ opacity: 0.5 }}
      />
      <h3
  className="span"
  style={{
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '50px',
  }}
>
  Discover the Microscopic Wonders<br></br>
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
        loop={5}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </b>
  </span>
</h3>
v
    </div>
  );
};

export default Home;
