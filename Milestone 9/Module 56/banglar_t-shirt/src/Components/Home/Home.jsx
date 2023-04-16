import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(typeof tshirts)
    return (
        <div>
            <h1>The number of t-shirts: {tshirts.length}</h1>
            <div>
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>)
                }
            </div>
        </div>
    );
};

export default Home;