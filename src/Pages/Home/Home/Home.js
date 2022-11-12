import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import ServiceCard from './ServiceCard/ServiceCard';

const Home = () => {
    return (
        <div className='mx-5 '>
            <div className='mb-20'>
            <Banner />
            <InfoCard />
            </div>
            <div className='text-center'>
                <h3 className="text-3x text-[#19D3AE] font-bold my-2">OUR SERVICES</h3>
                <h2 className='text-5xl font-semibold mb-20'>Services We Provide</h2>
                <ServiceCard />
            </div>
            
        </div>
    );
};

export default Home;