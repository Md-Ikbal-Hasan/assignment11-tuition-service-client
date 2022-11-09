import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, name, description, price, ratings } = service;

    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const [loadReviews, setLoadReviews] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/servicesreviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoadReviews(0);
                console.log("called...")
            })
    }, [_id, loadReviews])


    const handleReview = (e) => {
        e.preventDefault();
        if (user?.uid) {

            const form = e.target;
            const reviewText = form.reviewMessage.value;
            const ratings = form.ratings.value;
            const serviceId = service._id;
            const reviewerEmail = user?.email;
            const reviewerImage = user?.photoURL;
            const dateOfReview = new Date();

            const reviewInfo = {
                reviewText,
                ratings,
                serviceId,
                reviewerEmail,
                reviewerImage,
                dateOfReview
            }

            console.log(reviewInfo);

            fetch(`http://localhost:5000/reviews`, {
                method: "POST",
                headers: {
                    'content-type': "application/json",
                    authorization: `Bearer ${localStorage.getItem('tuition-service-token')}`
                },
                body: JSON.stringify(reviewInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success("review added successfully!");
                        setLoadReviews(1);
                        console.log(data);
                        form.reset();
                    }
                })
                .catch(error => console.error(error))
        }
        else {
            toast.info("To add a review login first");
            navigate('/login');

        }
    }




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
                        <p className='font-semibold'>Price: {price} </p>
                        <div className='flex items-center font-semibold'>Rating: {ratings} <FaStar className='ml-1 text-orange-600' /> </div>

                    </div>
                </div>

                {/* review form  */}
                <div className='border my-3'>

                    <form className="card-body" onSubmit={handleReview}>
                        <h2 className='text-2xl'>Add A Review</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name='reviewMessage' placeholder="Type here...."></textarea>
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
                            <h2 className='text-2xl'>Reviews</h2>
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