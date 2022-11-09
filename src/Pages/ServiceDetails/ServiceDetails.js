import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../customHooks/useTitle';
import Review from '../Review/Review';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    useTitle('Service Details');
    const [reviews, setReviews] = useState([]);
    const [loadReviews, setLoadReviews] = useState(0);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, name, description, price, ratings } = service;

    const navigate = useNavigate();





    useEffect(() => {
        fetch(`https://tuition-service-server.vercel.app/servicesreviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoadReviews(0);
                setLoading(false);
                console.log("called...")
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
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

            fetch(`https://tuition-service-server.vercel.app/reviews`, {
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
                .catch(error => {
                    console.error(error)
                    toast.error(error.message)
                })
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
                    <PhotoProvider>
                        <PhotoView src={service.image}>
                            <figure><img src={service.image} alt="service" className='w-full' /></figure>
                        </PhotoView>
                    </PhotoProvider>
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
                    loading ?
                        <div className="flex justify-center items-center">
                            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <>
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

                        </>
                }





            </div>



        </div>
    );
};

export default ServiceDetails;