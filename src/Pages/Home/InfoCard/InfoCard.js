import React from 'react';
import watch from '../../../Assets/icons/clock.svg'
import location from '../../../Assets/icons/marker.svg'
import call from '../../../Assets/icons/phone.svg'


const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5  mt-10 text-white'>
           <div className="card p-6 md:card-side bg-base-100 bg-gradient-to-r from-primary to-secondary shadow-xl">
              <figure><img src={watch} alt="Movie"/></figure>
               <div className="card-body">
                 <h2 className="card-title">Opening Hours</h2>
                 <p>Open 9.00 am to 5.00 pm everyday</p>
             </div>
           </div>

            <div className="card p-6 md:card-side bg-[#3A4256] shadow-xl">
            <figure><img src={location} alt="Movie"/></figure>
            <div className="card-body">
             <h2 className="card-title">Visit our location</h2>
              <p>Brooklyn, NY 10036, United States.</p>
           </div>
            </div>

            <div className="card p-6 md:card-side bg-base-100 bg-gradient-to-r from-primary to-secondary shadow-xl">
             <figure><img src={call} alt="Movie"/></figure>
             <div className="card-body">
             <h2 className="card-title">Contact us now!</h2>
              <p>+000 123 456789.</p>
             </div>
           </div>
        </div>
    );
};

export default InfoCard;