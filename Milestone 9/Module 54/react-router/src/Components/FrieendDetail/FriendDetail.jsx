import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>everything about {friend.username} is here</h1>
        </div>
    );
};

export default FriendDetail;