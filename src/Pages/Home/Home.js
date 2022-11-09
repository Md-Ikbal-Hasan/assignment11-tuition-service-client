import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-3xl text-center'>This is Home page</h2>

            {/* service section  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
            <div className='text-center my-3'>
                <Link to='/services' className='text-center btn btn-outline btn-secondary'>  Show all  </Link>
            </div>


        </div>
    );
};

export default Home;