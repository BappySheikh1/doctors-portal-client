import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../Contexts/AuthProvider'

const BookingModal = ({treatment,selectedDate,setTreatment,refetch}) => {
  const {user}=useContext(AuthContext)
 const {name,slots}=treatment; //trearment is appointment options just defirrent
 const date =format(selectedDate,"PP")
   
 const handleSubmit=event=>{
  event.preventDefault();
  const form =event.target
  const patient =form.name.value
  const slot =form.slot.value
  const phone =form.phone.value
  const email =form.email.value

  const booking={
    appointmentDate: date,
    treatment: name,
    patient: patient,
    slot,
    email,
    phone
  }
  // console.log(booking);
  fetch('http://localhost:5000/bookings',{
    method:"POST",
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify(booking)
  })
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    if(data.acknowledged){
      toast.success('Booking Confirmed')
      setTreatment(null)
      refetch()
    }
  })

  
 }

    return (
        <>
             <input type="checkbox" id="booking-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-xl font-bold text-secondary">{name}</h3>
                  <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                  <input type="text" defaultValue={date} disabled className="input input-bordered w-full font-bold text-center" readOnly/>
                  <select name='slot' className="select select-bordered w-full text-center font-bold">
                        {
                          slots.map((slot,idx) => <option 
                          key={idx}
                          value={slot}
                          >{slot}</option>)
                        }
                  </select>
                  <input type="text"  name='name' defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full " />
                  <input type="text"  name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                  <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full " />
                  <br />
                  <input className='w-full  btn btn-primary text-white font-bold' type="submit" value="Submit" />
                  </form>
                </div>
              </div> 
        </>
    );
};

export default BookingModal;