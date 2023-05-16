import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// const Swal = require('sweetalert2')
const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Quantity: {quantity}</p>
                <p>supplier: {supplier}</p>
                <p>taste: {taste}</p>
                <p>category: {category}</p>
                <p>details: {details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">view</button>
                    <Link to={`updatecoffee/${_id}`}><button className="btn btn-primary">edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;