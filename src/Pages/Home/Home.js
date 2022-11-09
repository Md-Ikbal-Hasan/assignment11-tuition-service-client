import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../customHooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import heroImage from '../../assets/images/heroImage.jpg'
import DULogo from '../../assets/images/DU-logo.jpg';
import JULogo from '../../assets/images/ju-logo.jpg';
import DMCLogo from '../../assets/images/DMC-logo.jpg';
import BUETLogo from '../../assets/images/BUET-logo.jpg';
import CHUETLogo from '../../assets/images/chuet-logo.jpg';
import ChattogramLogo from '../../assets/images/chittagong-logo.jpg';
const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    return (
        <div className='w-full md:w-3/4 mx-auto p-5 md:p-0'>

            <section className='mb-12'>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={heroImage} className="rounded-lg shadow-2xl" alt='hero' />
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold">Best Tuition Service</h1>
                            <p className="py-6">In my tuition service center I provide qualitiful education. Here student can learn directly from me. I solve student's indivual problem one to one </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>


            <section className='mb-12'>
                <h1 className="text-3xl md:text-5xl font-bold text-center">Subject</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                    }
                </div>
                <div className='text-center my-3'>
                    <Link to='/services' className='text-center btn btn-outline btn-secondary'>  Show all  </Link>
                </div>
            </section>

            <section className='mb-12 bg-base-200 p-5'>

                <h2 className='text-3xl md:text-5xl text-center font-bold mb-5'>My students got chances</h2>

                <div className='flex justify-between items-center flex-col md:flex-row gap-3'>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={DULogo} alt='DU logo' />
                        </div>
                    </div>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={JULogo} alt='JU logo' />
                        </div>
                    </div>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={DMCLogo} alt='DMC logo' />
                        </div>
                    </div>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={BUETLogo} alt='BUET logo' />
                        </div>
                    </div>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={CHUETLogo} alt='CHUET logo' />
                        </div>
                    </div>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={ChattogramLogo} alt='Chattogram logo' />
                        </div>
                    </div>

                </div>
            </section>







        </div>
    );
};

export default Home;