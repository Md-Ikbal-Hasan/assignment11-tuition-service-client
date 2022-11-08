import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { _id, reviewText, ratings, reviewerEmail, reviewerImage, serviceId } = review
    return (
        <div className='my-5 card border p-5'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className="mask mask-circle h-14 w-14 mr-2" src={reviewerImage} alt="reviwer pic" />
                    <p> {reviewerEmail} </p>
                </div>

            </div>

            <div className='my-2'>
                <p> {reviewText} </p>
                <p className='flex items-center'>  <span>Ratings: {ratings}</span> <FaStar className='ml-1 text-orange-600' /> </p>
            </div>
        </div>
    );
};

export default Review;