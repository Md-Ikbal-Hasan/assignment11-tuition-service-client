import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, name, description, price, ratings } = service;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/servicesreviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [_id])




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5  w-3/4 mx-auto">
            {/* left side  */}
            <div>

                {/* service card  */}
                <div className="card card-compact   bg-gray-700 text-white shadow-xl">
                    <figure><img src={service.image} alt="service" className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> {name} </h2>
                        <p> {description} </p>
                        <p>Price: {price} </p>
                        <div className='flex items-center'>Rating: {ratings} <FaStar className='ml-1 text-orange-600' /> </div>
                        <div className="card-actions  ">
                            <button className="btn btn-secondary w-full">Details</button>
                        </div>
                    </div>
                </div>

                {/* review form  */}
                <div>
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name='review' placeholder="Type here...."></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="number" name='ratings' placeholder="ratings" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">
                            <input className='btn btn-secondary' type="submit" value="Add review" />
                        </div>
                    </form>
                </div>



            </div>

            {/* right side  */}

            <div>
                {
                    reviews.length ?
                        <div>
                            {
                                reviews.map(review => <Review key={review._id} review={review} ></Review>)
                            }

                        </div>
                        :
                        <>
                            <h2 className='text-3xl text-center'>There is no review for this service !</h2>
                        </>
                }

            </div>



        </div>
    );
};

export default ServiceDetails;