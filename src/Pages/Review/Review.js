import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    const { _id, reviewText, ratings, reviewerEmail, reviewerImage, serviceId } = review
    return (
        <div className='my-5 card border p-5'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className="mask mask-circle h-14 w-14 mr-2" src={reviewerImage} />
                    <p> {reviewerEmail} </p>
                </div>

            </div>

            <div className='my-2'>
                <p> {reviewText} </p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default Review;