import React from 'react';
import watch from '../../../Assets/icons/clock.svg'
import location from '../../../Assets/icons/marker.svg'
import call from '../../../Assets/icons/phone.svg'


const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  mt-10 '>
            <div className='w-[400px] h-[190px] bg-gradient-to-r from-primary to-secondary  rounded-lg flex items-center mx-auto'>
                <div className='px-8'>
                    <img src={watch} alt="" />
                </div>
                <div className='py-52  '>
                   <h4 className='text-1xl font-bold text-white'>Opening Hours</h4>
                   <p className='text-gray-100 px-2'>Open 9.00 am to 5.00pm everyday</p>
                </div>
            </div>

            <div className='w-[400px] h-[190px] bg-[#3A4256] rounded-lg flex items-center  mx-auto'>
              <div className='px-8'>
                  <img src={location} alt="" />
              </div>
              <div>
              <h4 className='text-1xl font-bold text-white'>Visit our location</h4>
                   <p className='text-gray-100'>Brooklyn, NY 10036, United States</p>
              </div>
            </div>

            <div className='w-[400px] h-[190px] rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center mx-auto'>
              <div className='px-8'>
                 <img src={call} alt="" />
              </div>
              <div>
              <h4 className='text-1xl font-bold text-white'>Contact us now</h4>
                   <p className='text-gray-100'>+000 123 456789</p>
              </div>
            </div>
        </div>
    );
};

export default InfoCard;