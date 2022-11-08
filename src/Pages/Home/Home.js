import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-3xl text-center'>This is Home page</h2>
            <p>Total services loaded: {services.length} </p>

            <div class="grid grid-cols-3 gap-4 my-5">
                {
                    services.map(service => {
                        return (
                            <div className="card card-compact   bg-gray-700 text-white shadow-xl">
                                <figure><img src={service.image} alt="service" className='h-48 w-full' /></figure>
                                <div className="card-body">
                                    <h2 className="card-title"> {service.name} </h2>
                                    <p> {service.description} </p>
                                    <p>Price: {service.price} </p>
                                    <p>Rating: {service.ratings} </p>
                                    <div className="card-actions  ">
                                        <button className="btn btn-secondary w-full">Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    );
};

export default Home;