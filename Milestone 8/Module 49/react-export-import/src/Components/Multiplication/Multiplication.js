import React from 'react';
import { multiply } from '../Utilities/Utilities';

const Multiplication = () => {
    const first = 5;
    const second = 6;
    const result = multiply(first, second);
    return (
        <div>
            <h3>result of multiplication is: {result}</h3>
        </div>
    );
};

export default Multiplication;