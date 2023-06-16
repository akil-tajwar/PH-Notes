import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='w-3/4 mx-auto mt-12 text-center mb-20'>
            <div>
                <img className='rounded-lg' src="/src/assets/home/01.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img className='rounded-lg' src="/src/assets/home/02.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img className='rounded-lg' src="/src/assets/home/03.png" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img className='rounded-lg' src="/src/assets/home/04.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="/src/assets/home/05.png" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="/src/assets/home/06.png" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;



