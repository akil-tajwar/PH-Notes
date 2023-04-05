import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, phone, id} = props.friend
    return (
        <div className='friend'>
            <h3>name : {name}</h3>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            <p><Link to={`/friend/${id}`}>Details</Link></p>
        </div>
    );
};

export default Friend;