import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../../assets/images/errorPage.jpg'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <img src={errorPage} alt="error page" className='md:h-2/4 md:w-2/4 mx-auto ' />
            </div>
            <div className='text-center my-5'><Link to='/'> <button className='btn btn-outline btn-secondary'>Go to Home Page</button> </Link></div>
        </div>
    );
};

export default ErrorPage;