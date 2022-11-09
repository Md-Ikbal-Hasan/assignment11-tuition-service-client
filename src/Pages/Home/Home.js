import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../customHooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import heroImage from '../../assets/images/heroImage.jpg'
const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    return (
        <div className='w-3/4 mx-auto'>

            <section className='mb-12'>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={heroImage} className="rounded-lg shadow-2xl" alt='hero' />
                        <div>
                            <h1 className="text-5xl font-bold">Best Tuition Service</h1>
                            <p className="py-6">In my tuition service center I provide qualitiful education. Here student can learn directly from me. I solve student's indivual problem one to one </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <h1 className="text-5xl font-bold text-center">Subject</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                    }
                </div>
                <div className='text-center my-3'>
                    <Link to='/services' className='text-center btn btn-outline btn-secondary'>  Show all  </Link>
                </div>
            </section>







        </div>
    );
};

export default Home;