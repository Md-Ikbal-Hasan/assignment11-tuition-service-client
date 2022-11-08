import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://tuition-service-server.vercel.app/userreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tuition-service-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
            .catch(error => console.log(error))

    }, [user?.email])


    // delete review .......................
    const handleReviewDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete this review?");

        if (proceed) {
            fetch(`https://tuition-service-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('tuition-service-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully.');
                        const remainingReviews = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remainingReviews);
                    }

                })

        }


    }

    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-2xl text-center my-2'>My All Reviews : {myReviews.length} </h2>

            <div className="overflow-x-auto my-2">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Review_Text</th>
                            <th>Ratings</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <button className='btn btn-outline btn-error mr-2'> <FaTrashAlt /> </button>
                                <button className='btn btn-outline btn-secondary'> <FaEdit /> </button>
                            </td>
                        </tr> */}

                        {
                            myReviews.map((review, index) => {
                                return (
                                    <tr key={review._id}>
                                        <th>{index + 1}</th>
                                        <td>{review.reviewText}</td>
                                        <td>{review.ratings}</td>
                                        <td>
                                            <button onClick={() => handleReviewDelete(review._id)} className='btn btn-outline btn-error mr-2'> <FaTrashAlt /> </button>
                                            <Link to={`/editreviews/${review._id}`} className='btn btn-outline btn-secondary'> <FaEdit /> </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;