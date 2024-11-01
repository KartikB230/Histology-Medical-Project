import React, { useRef } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import CarouselComponent from './Carousel';
import Footer from './Footer';

function HomePage() {
    const carouselRef = useRef(null);
    const footerRef = useRef(null); // Create a reference for the Footer

    // Function to scroll to the carousel
    const scrollToCarousel = () => {
        if (carouselRef.current) {
            window.scrollTo({
                top: carouselRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // Function to scroll to the footer
    const scrollToFooter = () => {
        if (footerRef.current) {
            window.scrollTo({
                top: footerRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <Navbar scrollToCarousel={scrollToCarousel} scrollToFooter={scrollToFooter} />

            {/* Component above the carousel */}
            <div className="component-above-carousel">
                <Home />
            </div>

            {/* Carousel Component with ref */}
            <div id="carousel" ref={carouselRef}>
                <CarouselComponent />
            </div>


            {/* Component below the carousel */}
            <div ref={footerRef}> {/* Set ref for the Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
