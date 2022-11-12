import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());

    return (
        <div>
             <AppointmentBanner 
             selectedDate={selectedDate} 
             setSelectedDate={setSelectedDate}
             />
             <div>
              <AvailableAppointments selectedDate={selectedDate} />
             </div>
        </div>
    );
};

export default Appointment;