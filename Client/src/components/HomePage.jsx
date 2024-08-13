import React, { useRef } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
// import Carousel from './Carousel';

function HomePage() {
    const carouselRef = useRef(null);

    const scrollToCarousel = () => {
        if (carouselRef.current) {
            window.scrollTo({
                top: carouselRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <Navbar scrollToCarousel={scrollToCarousel} />
            <Home />
            <div ref={carouselRef}>
                {/* <Carousel /> */}
            </div>
            
        </div>
    );
}

export default HomePage;
