import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, name, description, price, ratings } = service
    return (
        <div className="card card-compact   bg-gray-700 text-white shadow-xl">
            <figure><img src={service.image} alt="service" className='h-48 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p>
                    {
                        description.length > 100 ?
                            <>
                                {description.slice(0, 100) + ' ......'}
                            </>
                            :
                            <>
                                {description}
                            </>
                    }
                </p>
                <p className='font-semibold'>Price: {price} </p>
                <div className='flex items-center font-semibold '>Rating: {ratings} <FaStar className='ml-1 text-orange-600' /> </div>
                <div className="card-actions  ">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-secondary w-full">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;