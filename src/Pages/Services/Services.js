import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../customHooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();

    useTitle('Services')

    return (
        <div className='w-3/4 mx-auto'>
            <h1 className="text-5xl font-bold text-center">Subject</h1>

            {/* service section  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;