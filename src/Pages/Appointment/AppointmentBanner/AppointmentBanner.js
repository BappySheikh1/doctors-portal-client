import React from 'react';
import chair from '../../../Assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../Assets/images/bg.png'

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header className='my-6' 
        style={{background:`url(${bg})`}}
        >
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <img src={chair} alt='' className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
         
             <div className=' shadow-lg rounded-lg mr-6 '>
             <DayPicker
             mode='single'
             selected={selectedDate}
             onSelect={setSelectedDate}
             />   
           </div>
          </div>
        </div>
        </header>
    );
};

export default AppointmentBanner;