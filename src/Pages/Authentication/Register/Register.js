import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../../Assets/images/login.png'
import { AuthContext } from '../../../Contexts/AuthProvider';
import useToken from '../../../hooks/useToken';
 
const Register = () => {
  const {createUser,updateDisplayUser,socialLogIn}=useContext(AuthContext)
  const [createUserEmail,setCreateUserEmail]=useState('') 

  const [token]=useToken(createUserEmail)
  const navigate = useNavigate();
  if(token){
    navigate('/')
  }

    const handleSubmitLogin=event =>{
        event.preventDefault();
        const form =event.target
        const name=form.name.value
        const photoURL=form.photoURL.value
        const email=form.email.value
        const password=form.password.value
      //  console.log(name,photoURL,email,password);
      createUser(email,password)
      .then(result=>{
        const user = result.user
        console.log(user);
        handleUpdateNameProfile(name,photoURL)
        form.reset();
        toast.success('user create successfully');

        const users={
          name: name,
          email: email
        }
        fetch('http://localhost:5000/users',{
          method:"POST",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.acknowledged){
            toast.success('successfully added')
            setCreateUserEmail(email)
            
          }
        
        })

      }) 
      .catch(err =>{
        console.log(err);
      })
    }

   
  
    const handleUpdateNameProfile=(name,photoURL)=>{
     const provider={
      displayName: name,
      photoURL: photoURL
     }
     updateDisplayUser(provider)
     .then(()=>{

     })
     .catch((err)=>{
      console.log(err);
     })
    }

    const handleGoogleLogin=()=>{
      socialLogIn()
      .then(result=>{
        const user=result.user
        console.log(user);
      })
      .catch(err =>{
        console.log(err);
      })
    }
    return (
        <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div>
    <figure>
        <img src={login} alt="" />
    </figure>    
    </div> 
   
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmitLogin} className="card-body">
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
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='photoURL' placeholder="@PhotoURL" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Register</button>
        </div>
      </form>
      <div className='text-center '>
        <p>Already have an account <Link to='/login' className='underline text-primary'>Log in</Link></p>
      </div>
      <div className="divider">OR</div>
      <div className='text-center mb-5'>
        <button onClick={handleGoogleLogin} className='btn btn-secondary text-white font-bold'>Google Log In</button>
      </div>
      
    </div>
  </div>
        </div>
    );
};

export default Register;