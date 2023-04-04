import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>This is blog section</h1>
        </div>
    );
};

export default Blogs;