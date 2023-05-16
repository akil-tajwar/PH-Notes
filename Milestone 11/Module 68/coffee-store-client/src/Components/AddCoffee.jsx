import React from 'react';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('user added successfullyl');
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleAddCoffee}>
                <div className=' bg-[#faebd7] p-5 w-1/2 mx-auto mt-44'>
                    <h1 className='text-center font-semibold text-3xl pb-4 '>Add New Coffee</h1>
                    <div className='grid grid-cols-2 gap-5'>
                        <input name='name' placeholder='Coffee Name' className='bg-slate-100 p-1' type="text" />
                        <input name='quantity' placeholder='Available Quantity' className='bg-slate-100 p-1' type="text" />
                        <input name='supplier' placeholder='Supplier' className='bg-slate-100 p-1' type="text" />
                        <input name='taste' placeholder='Taste' className='bg-slate-100 p-1' type="text" />
                        <input name='category' placeholder='Category' className='bg-slate-100 p-1' type="text" />
                        <input name='details' placeholder='Details' className='bg-slate-100 p-1' type="text" />
                        <input name='photo' placeholder='Photo' className='bg-slate-100 col-span-2 p-1' type="text" />
                    </div>
                    <input className='btn btn-block mt-5 bg bg-[#D2B48C] text-[#331A15]' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;