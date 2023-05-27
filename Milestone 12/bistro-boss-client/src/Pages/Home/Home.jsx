import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Details from './Details';
import PopularMenu from './PopularMenu';
import CallUs from './CallUs';
import ChefRecommends from './ChefRecommends';
import FeaturedItem from './FeaturedItem';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Details></Details>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;