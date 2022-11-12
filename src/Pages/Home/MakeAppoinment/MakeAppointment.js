import React from 'react';
import image from '../../../Assets/images/doctor.png'
import appointment from '../../../Assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-28 rounded-lg' style={{
               background: `url(${appointment})` 
        }}
        >
            

             <div className="hero ">
              <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt='' className="-mt-32 md:w-1/2 hidden lg:block w-full  rounded-lg shadow-2xl" />
              <div className='text-white'>
                <h3 className='text-4xl font-bold text-[#19D3AE]'>Appointment</h3>
              <h1 className="text-5xl font-bold">Make an appointment Today</h1>
               <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
              <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary font-bold text-white">Get Started</button>
             </div>
             </div>
            </div>
        </section>
    );
};

export default MakeAppointment;