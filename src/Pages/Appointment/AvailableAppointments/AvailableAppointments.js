import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({selectedDate}) => {
    return (
        <section className='text-center my-20'>
               <h5 className='text-2xl font-bold text-primary'>Available Appointments on {format(selectedDate,"PP")}</h5>
        </section>
    );
};

export default AvailableAppointments;