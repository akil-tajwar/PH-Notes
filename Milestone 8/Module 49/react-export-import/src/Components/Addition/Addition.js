import React from 'react';
import { add } from '../Utilities/Utilities';

const Addition = () => { 
    const first = 4;
    const second = 5;
    const result = add(first, second)
    return (
        <div>
            <h3>result of addition is: {result}</h3>
        </div>
    );
};

export default Addition;