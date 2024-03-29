import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {id, title} = props.post
    return (
        <div>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;