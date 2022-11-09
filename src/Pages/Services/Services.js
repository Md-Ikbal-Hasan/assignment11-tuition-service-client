import React, { useEffect, useState } from 'react';
import useTitle from '../../customHooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useTitle('Services')

    useEffect(() => {
        fetch('https://tuition-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className='w-full md:w-3/4 mx-auto'>
            <h1 className="text-3xl md:text-5xl font-bold text-center">Subject</h1>

            {
                loading ?
                    <div className="flex justify-center items-center my-5">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        {/* service section  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                            {
                                services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                            }
                        </div>

                    </>
            }


        </div>
    );
};

export default Services;