import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import { allTotalsellary } from '../Utilities/FakeDB';
import './Employees.css'

const Employees = () => {
    const [employees, setEmplyoees] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setEmplyoees(data))
    }, [])
    const total = allTotalsellary(employees)
    return (
        <div className='employees-main'>
            <h1>All of the Emplyoees</h1>
            <p>Total Sellary: {total}</p>
            <div className='employees'>
                {
                    employees.map(employee => <Employee employee={employee} key={employee.id}></Employee>)
                }
            </div>
        </div>
    );
};

export default Employees;