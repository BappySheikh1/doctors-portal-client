import React from 'react';
import image1 from '../../../../Assets/images/fluoride.png'
import image2 from '../../../../Assets/images/cavity.png'
import image3 from '../../../../Assets/images/whitening.png'
import image4 from '../../../../Assets/images/treatment.png'

const ServiceCard = () => {
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            <div className='card bg-base-100 shadow-xl'>
                <figure className='px-10 pt-10'>
                    <img src={image1}  alt="" />
                </figure>
                <div className='h-1/2 py-3'>
                    <h3 className="text-3xl">Fluoride Treatment</h3>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                </div>
            </div>

            <div className='card bg-base-100 shadow-xl'>
                <figure className='px-10 pt-10'>
                    <img src={image2} alt="" />
                </figure>
                <div className='h-1/2 py-6'>
                    <h3 className="text-3xl">Cavity Filling</h3>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                </div>
            </div>

            <div className='card bg-base-100 shadow-xl'>
                <figure className='px-10 pt-10'>
                    <img src={image3} alt="" />
                </figure>
                <div className='h-1/2 py-6'>
                    <h3 className="text-3xl">Teeth Whitening</h3>
                    <p>Lorem Ipsum is simply dummy printing and <br /> typesetting indust Ipsum has been the</p>
                </div>
            </div>
        </div>
         {/* service area 2 */}
         <div className="hero bg-base-200 my-5 rounded-md">
           <div className="hero-content flex-col lg:flex-row ">
              <img src={image4} alt='' className="md:w-1/2 w-full rounded-lg shadow-2xl" />
           <div className='px-5 '>
             <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
             <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
             <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary ">Get Started</button>
           </div>
          </div>
         </div>
        </div>
    );
};

export default ServiceCard;