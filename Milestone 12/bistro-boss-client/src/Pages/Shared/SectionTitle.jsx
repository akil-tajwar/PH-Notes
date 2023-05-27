import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='text-center pb-10'>
            <p className='text-[#D99904] mb-2'>--- {subHeading} ---</p>
            <h1 className='text-4xl font-semibold uppercase border-y-2 border-white w-fit mx-auto py-3 px-8'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;