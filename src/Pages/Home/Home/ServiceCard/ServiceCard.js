import React from 'react';
import image1 from '../../../../Assets/images/fluoride.png'
import image2 from '../../../../Assets/images/cavity.png'
import image3 from '../../../../Assets/images/whitening.png'

const ServiceCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='w-[410px] h-[310px] mx-auto  border rounded-lg'>
                <div className='h-1/2 p-4'>
                    <img src={image1}  alt="" />
                </div>
                <div>
                    <h3 className="text-3xl">Fluoride Treatment</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>

            <div className='w-[410px] h-[310px] mx-auto border rounded-lg'>
                <div className='h-1/2 p-4'>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <h3 className="text-3xl">Cavity Filling</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>

            <div className='w-[410px] h-[310px] mx-auto  border rounded-lg'>
                <div className='h-1/2 p-4 '>
                    <img src={image3} alt="" />
                </div>
                <div>
                    <h3 className="text-3xl">Teeth Whitening</h3>
                    <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;