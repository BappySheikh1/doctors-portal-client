import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import {AuthContext} from '../../../Contexts/AuthProvider'

const MyAppointment = () => {
    const {user}=useContext(AuthContext)

     const uri =`http://localhost:5000/bookings?email=${user?.email}`
     const {data:bookings = [],isLoading}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async ()=>{
            const res = await fetch(uri,{
              headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
            const data = await res.json()
            return data;
        }
     })
//   console.log(bookings);
if(isLoading){
   return <p className='text-center my-28'>Loading...........</p>
    
}
    return (
        <div>
            <h3 className="text-3xl my-4">My appointments</h3>
            <div className="overflow-x-auto">
                 <table className="table w-full">
                   
                   <thead>
                     <tr>
                       <th></th>
                       <th>Name</th>
                       <th>Treatment</th>
                       <th>Date</th>
                       <th>time</th>
                     </tr>
                   </thead>
                   <tbody>

                   {
                    bookings.map((book,idx) =>   <tr key={book._id}>
                        <th>{idx + 1}</th>
                        <td>{book.patient}</td>
                        <td>{book.treatment}</td>
                        <td>{book.appointmentDate}</td>
                        <td>{book.slot}</td>
                      </tr>)
                   }
                     
                   </tbody>
                 </table>
             </div>
        </div>
    );
};

export default MyAppointment;