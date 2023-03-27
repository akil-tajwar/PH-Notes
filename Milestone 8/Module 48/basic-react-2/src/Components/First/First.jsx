import React from 'react';
import Second from '../Second/Second';
import './First.css'

const First = () => {
    return (
        <div className='first'>
            <p>First Element</p>
            <Second></Second>
        </div>
    );
};

export default First;