import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const review = useLoaderData();
    console.log(review);
    const [updatedReview, setUpdatedReview] = useState(review);

    const handleUpdateReview = (e) => {
        e.preventDefault();
    }

    return (
        <div className="card  w-full md:w-3/6 mx-auto shadow-2xl bg-base-100  py-20 ">
            <h1 className="text-5xl font-bold text-center">Edit Review</h1>

            <form className="card-body" onSubmit={handleUpdateReview}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea defaultValue={updatedReview.reviewText} className="textarea textarea-bordered h-24" name='reviewMessage' placeholder="Type here...."></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input defaultValue={updatedReview.ratings} type="number" name='ratings' placeholder="ratings" className="input input-bordered" required />

                </div>

                <div className="form-control mt-6">
                    <input className='btn btn-secondary' type="submit" value="Update review" />
                </div>
            </form>


        </div>
    );
};

export default EditReview;