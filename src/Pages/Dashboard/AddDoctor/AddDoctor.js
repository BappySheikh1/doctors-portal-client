import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddDoctor = () => {
    const navigate =useNavigate()
    const imageHostKey= process.env.REACT_APP_imgbb_key
    // console.log(imageHostKey);
    const {data:specialties = [],isLoading,} =useQuery({
        queryKey:['appointmentSpecialty'],
        queryFn: async ()=>{
           const res =await fetch('http://localhost:5000/appointmentSpecialty')
           const data =await res.json()
           
           return data
        }
    })
    if(isLoading){
        return <p>loading.....</p>
    }
    // console.log(specialties);
    const handleAddDoctor=(event)=>{
     event.preventDefault();
     const form =event.target
     const name=form.name.value
     const email=form.email.value
     const photo=form.photo.files[0]
     const specialty=form.specialty.value
    //  console.log(name,specialty,email,photo);

     const formData = new FormData();
     formData.append('image',photo);
     const uri =`https://api.imgbb.com/1/upload?key=${imageHostKey}`
     fetch(uri,{
        method:"POST",
        body: formData
     })
     .then((res)=>res.json())
     .then(imgData => {
        if(imgData?.success){
            // console.log(imgData?.data?.url);
            const doctor = {
                name: name,
                email: email,
                specialty: specialty,
                image: imgData?.data?.url
            }
            
            // save information to database
           fetch('http://localhost:5000/doctors',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
           })
           .then(res => res.json())
           .then(result =>{
            
            if(result.acknowledged){
              toast.success(` added successful`)
              navigate('/dashboard/manage_doctors')
            }
           })

        }
     })
    }


    return (
        <div className='w-96 '>
            <h2 className="text-5xl">Add a doctors </h2>

            <form onSubmit={handleAddDoctor} className="card-body">
          <div className="text-center ">
              <h1 className="text-4xl text-primary font-bold">Register now!</h1>
            </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select name='specialty'  className="select input-bordered w-full max-w-xs">
            {
                specialties.map(specialty => <option key={specialty._id} defaultValue={specialty.name}>
                    {specialty.name}
                </option> )
            }
            
          </select>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file"  name='photo' className="input" required/>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Add Doctor</button>
        </div>
      </form>
        </div>
    );
};

export default AddDoctor;