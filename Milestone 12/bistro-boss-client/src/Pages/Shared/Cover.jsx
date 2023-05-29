import React from 'react';

const Cover = ({heading, text, background}) => {
    return (
        <div className={`${background} rounded-lg h-fit bg-no-repeat bg-center bg-cover w-3/4 mx-auto mt-12 mb-20`}>
            <div className='text-center p-36'>
                <div className='bg-black bg-opacity-80 rounded-lg p-24'>
                    <h1 className='text-7xl pb-5 font-semibold'>{heading}</h1>
                    <p className='w-3/4 mx-auto'>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;