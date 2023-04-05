import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {body, id} = post;
    console.log(post);

    const navigate = useNavigate();
    const goBackNavigate = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>Post Details of {id}</h2>
            <p>{body}</p>
            <button onClick={goBackNavigate}>Go back</button>
        </div>
    );
};

export default PostDetail;