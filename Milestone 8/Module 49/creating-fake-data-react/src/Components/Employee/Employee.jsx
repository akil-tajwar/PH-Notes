import React from 'react';
import './Employee.css'

const Employee = (props) => {
    console.log(props)
    const {picture, name, isActive, gender, age, email, about} = props.employee
    return (
        <div className='employee'>
            <div className='employee-img'>
                <img src={picture} alt="" />
            </div>
                <h2>{name}</h2>
            <div className='employee-info'>
                <p>Status: {isActive}</p>
                <p>Gender: {gender}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>description: {about}</p>
            </div>
            <button>Assign Person</button>
        </div>
    );
};

export default Employee;