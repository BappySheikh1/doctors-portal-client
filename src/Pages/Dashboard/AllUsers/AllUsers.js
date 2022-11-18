import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

   const {data: Users =[],refetch}=useQuery({
    queryKey:['users'],
    queryFn: async ()=>{
        const res =await fetch('http://localhost:5000/users')
        const data =await res.json()
        return data
    }
   })
//   console.log(Users);

const handleMakeAdmin=(_id)=>{
//  console.log('admin update',_id);
 fetch(`http://localhost:5000/users/admin/${_id}`,{
    method:"PUT",
    headers:{
       authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }

 })
 .then(res => res.json())
 .then(data =>{
    if(data.modifiedCount > 0){
      toast.success('Make admin successfully')
      refetch()
    }
 })
}

const handleAdminDelete=(_id)=>{
 console.log('admin delete',_id);
}
    return (
        <div>
            <h2 className="text-5xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
       {
        Users.map((user,idx) => <tr key={user._id}>
            <th>{idx + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-secondary text-white'>Make Admin</button>}</td>
            <td><button onClick={()=>handleAdminDelete(user._id)} className='btn btn-xs bg-red-700 border-none '>Delete</button></td>
          </tr>)
       }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;