import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor ,setDeletingDoctor]=useState(null)

    const closeModal =()=>{
        setDeletingDoctor(null)
    }
    const {data: doctors = [],isLoading,refetch}=useQuery({
        queryKey:['doctors'],
        queryFn: async ()=>{
            try{
              const res = await fetch(`http://localhost:5000/doctors`,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
              })
              const data =await res.json()
              return data
            }
            catch(err){
            console.log(err);
            }
        }
    })
    // console.log(doctors);
    if(isLoading){
        return <p>loading....</p>
    }

    const handleDelete =(doctor)=>{
        
            fetch(`http://localhost:5000/doctors/${doctor._id}`,{
                method:'DELETE',
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data =>{
                // console.log(data);
                if(data.deletedCount > 0){
                    toast.success(`Doctor ${doctor.name}  Deleted successfully`)
                    refetch()
                }
            })
        
    }
    return (
        <div>
            <h3 className="text-5xl">manage doctor {doctors.length}</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
      {
        doctors &&
        doctors?.map((doctor,idx) => 

         <tr key={doctor._id}>
            <th>{idx +1}</th>
            <td>
                <div className="avatar">
                 <div className="w-20 rounded-full">
                  <img src={doctor.image}  alt='' />
                </div>
                </div>
            </td>
            <td>{doctor.name}</td>
            <td>{doctor.email}</td>
            <td>{doctor.specialty}</td>
            <td>
            <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs bg-red-600 border-none">Delete</label>
             </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
{
    deletingDoctor && <ConfirmationModal
    title={`Are you sure you want to delete?`}
    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
    successAction={handleDelete}
    data={deletingDoctor}
    successButtonName='Delete'
    closeModal={closeModal}
    />
}
        </div>
    );
};

export default ManageDoctors;