import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../Assets/images/login.png'

const Register = () => {
    const handleSubmitLogin=event =>{
        event.preventDefault();
        const form =event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
       console.log(name,email,password);
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
          <div className="text-center my-8">
              <h1 className="text-5xl font-bold">Login now!</h1>
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
          <label className="label">
            <Link  className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Register</button>
        </div>
      </form>
      <div className='text-center mb-6'>
        <p>Already have an account <Link to='/login' className='underline text-primary'>Log in</Link></p>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Register;