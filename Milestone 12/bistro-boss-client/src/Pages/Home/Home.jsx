import React from 'react';
import Banner from './Components/Banner';
import Category from './Components/Category';
import Details from './Components/Details';
import PopularMenu from './Components/PopularMenu';
import CallUs from './Components/CallUs';
import ChefRecommends from './Components/ChefRecommends';
import FeaturedItem from './Components/FeaturedItem';
import Testimonials from './Components/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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