import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {

    const handleService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const image = form.image.value;
        const serviceInfo = {
            name,
            description,
            price,
            ratings,
            image
        }
        console.log(serviceInfo, localStorage.getItem('tuition-service-token'));

        fetch('https://tuition-service-server.vercel.app/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('tuition-service-token')}`
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Service added successfully!")
                    form.reset();
                }
            })
            .then(error => {
                console.log(error);

            })

    }
    return (
        <div className="card  w-full md:w-3/6 mx-auto shadow-2xl bg-base-100  py-20 ">
            <h1 className="text-5xl font-bold text-center">Add Service</h1>

            <form onSubmit={handleService} className="card-body">


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" name='description' placeholder="short description....."></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input type="number" name='ratings' placeholder="4" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name='image' placeholder="url" className="input input-bordered" required />
                </div>




                <div className="form-control mt-6">
                    <input className='btn btn-secondary' type="submit" value="Add" />

                </div>
            </form>

        </div>
    );
};

export default AddService;