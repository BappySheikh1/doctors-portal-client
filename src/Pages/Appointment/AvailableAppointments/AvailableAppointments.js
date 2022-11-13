import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [AppointmentOptions,setAppointmentOptions]=useState([])
    const [treatment,setTreatment]=useState(null)
    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='text-center my-20'>
               <h5 className='text-2xl font-bold text-secondary'>Available Appointments on {format(selectedDate,"PP")}</h5>
               <div className='grid gap-6 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3'>
                  {
                    AppointmentOptions.map(option => <AppointmentOption 
                        key={option._id}
                        AppointmentOption={option}
                         setTreatment={setTreatment}                       
                        />)
                  }
               </div>
               {
                treatment && 
                <BookingModal
                  treatment={treatment}
                  selectedDate={selectedDate}
                  setTreatment={setTreatment}
                ></BookingModal>
               }
        </section>
    );
};

export default AvailableAppointments;