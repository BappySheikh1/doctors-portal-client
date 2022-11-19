import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
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

    const handleDelete =(_id)=>{
        console.log("delete doctor ",_id);
        const agree =window.confirm('Are you sure to delete',_id)
        if(agree){
            fetch(`http://localhost:5000/doctors/${_id}`,{
                method:'DELETE',
                
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    toast.success('Delete successfully')
                    refetch()
                }
            })
        }
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
        doctors.map((doctor,idx) => 

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
            <label htmlFor="my-modal-3" className="btn">open modal</label>

                <button onClick={()=>handleDelete(doctor._id)} className='btn btn-xs bg-red-600 border-none' >Delete</button>
             </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctors;