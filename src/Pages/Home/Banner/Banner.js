import React from 'react';
import './Banner.css';
import image from '../../../Assets/images/chair.png';


const Banner = () => {
    return (
        <div  className="hero bg-base-300 h-[838px] Chair-background">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} alt='' className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-black">Your New Smile Starts Here!</h1>
            <p className="py-6 text-gray-500">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button  className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;