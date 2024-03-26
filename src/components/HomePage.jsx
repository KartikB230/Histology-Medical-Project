import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

import Footer from './Footer';
import Carousel from './Carousel';


function HomePage() {
    

    return (
        <div>

            <Navbar />
            <Home />
            <Carousel/>
            <Footer/>
        </div>
    );
}

export default HomePage;
