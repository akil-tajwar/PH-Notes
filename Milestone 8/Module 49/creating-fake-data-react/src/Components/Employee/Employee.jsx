import React from 'react';
import { addToLocal, removeFromLocal } from '../Utilities/FakeDB';
import './Employee.css'

const Employee = (props) => {
    console.log(props)
    const {picture, name, isActive, gender, age, id, email, about} = props.employee

    const assignPerson = (id) => {
        console.log(name,'is assigned for this task. and id is ', id);
        addToLocal(id);
    }

    const removeTask = (id) => {
        removeFromLocal(id);
    }
    const assignPersonWithPeram = () => assignPerson(id);
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
            <button onClick={assignPersonWithPeram}>Assign</button>
            <button onClick={() => removeTask(id)}>Remove</button>
        </div>
    );
};

export default Employee;