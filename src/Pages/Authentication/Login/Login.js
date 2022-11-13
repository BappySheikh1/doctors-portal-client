import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loging from '../../../Assets/images/login.png'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Login = () => {
  const {userLogIn} = useContext(AuthContext)
    const handleSubmitLogin=event =>{
        event.preventDefault();
        const form =event.target
        const email=form.email.value
        const password=form.password.value
      // console.log(email,password);
      userLogIn(email,password)
      .then(result =>{
        const user= result.user
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
        <img src={loging} alt="" />
    </figure>    
    </div> 
   
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmitLogin} className="card-body">
            <div className="text-center my-8">
                <h1 className="text-5xl text-primary font-bold">Login now!</h1>
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
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Login</button>
        </div>
      </form>
      <div className='text-center mb-5'>
        <button className='btn btn-secondary text-white font-bold'>Google Log In</button>
      </div>
      <div className='text-center mb-6'>
        <p>You have an no account <Link to='/register' className='underline text-primary'>Please Register</Link></p>
      </div>
    </div>
  </div>
        </div>
    ); 
};

export default Login;