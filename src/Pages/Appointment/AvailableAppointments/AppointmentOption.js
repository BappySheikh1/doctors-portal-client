import React from 'react';

const AppointmentOption = ({AppointmentOption}) => {
    const {name,slots}=AppointmentOption
    // console.log(AppointmentOption);
    return (
        <div className="card shadow-xl">
          <div className="card-body ">
              <h2 className="text-2xl text-center text-secondary font-bold">{name}</h2>
              <p className=''>
                {
                    slots.length > 0 ? slots[0] : 'Try Another Day'
                }
              </p>
              <p>
                {slots.length} {slots.length > 1 ? "spaces" : "space"} available
              </p>
              <div className="card-actions justify-center mt-3">
                <button className="btn btn-primary text-white font-semibold">Book Appointment</button>
              </div>
          </div>
       </div> 
    );
};

export default AppointmentOption;