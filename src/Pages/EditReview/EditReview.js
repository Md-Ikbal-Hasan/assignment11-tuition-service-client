import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditReview = () => {
    const review = useLoaderData();
    const [updatedReview, setUpdatedReview] = useState(review);

    const navigate = useNavigate();

    const handleUpdateReview = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('tuition-service-token')}`
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("review updated successfully !")
                    navigate('/myreviews')
                }

            })
    }

    const handleReviewChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...updatedReview };

        newReview[field] = value;
        setUpdatedReview(newReview);
    }

    return (
        <div className="card  w-full md:w-3/6 mx-auto shadow-2xl bg-base-100  py-20 ">
            <h1 className="text-5xl font-bold text-center">Edit Review</h1>

            <form className="card-body" onSubmit={handleUpdateReview}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea onChange={handleReviewChange} defaultValue={updatedReview.reviewText} className="textarea textarea-bordered h-24" name='reviewText' placeholder="Type here...."></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input onChange={handleReviewChange} defaultValue={updatedReview.ratings} type="number" name='ratings' placeholder="ratings" className="input input-bordered" required />

                </div>

                <div className="form-control mt-6">
                    <input className='btn btn-secondary' type="submit" value="Update review" />
                </div>
            </form>


        </div>
    );
};

export default EditReview;