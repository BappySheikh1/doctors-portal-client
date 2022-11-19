import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment,setTreatment]=useState(null);
    
    const date =format(selectedDate,'PP')
    const {data:AppointmentOptions = [],refetch,isLoading} =useQuery({
        queryKey:['appointmentOptions',date],
        queryFn:()=> fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })
    
    if(isLoading){
        return <div className='text-center my-20'><button className="btn btn-square loading"></button></div>
    }
    
    return (
        <section className='text-center my-20'>
               <h5 className='text-2xl font-bold text-secondary'>Available Appointments on {format(selectedDate,"PP")}</h5>
               <div className='grid gap-6 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3'>
                  {
                    AppointmentOptions?.map(option => <AppointmentOption 
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
                  refetch={refetch}
                ></BookingModal>
               }
        </section>
    );
};

export default AvailableAppointments;