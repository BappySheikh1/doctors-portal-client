import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login_img from '../../../Assets/images/login.png'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Login = () => {
  const {userLogIn,socialLogIn,userResetPassword} = useContext(AuthContext)
  const [userEmail,setUserEmail]=useState('') 

  const navigate=useNavigate()
  const location =useLocation()
  let from = location.state?.from?.pathname || "/";

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
        navigate(from, { replace: true });
        form.reset();
        toast.success("User log iN successfully")
      })
      .catch(err =>{
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
   
    const handleOnBlur=(e)=>{
      setUserEmail(e.target.value)
      
    }
    const handleForgetPassword=()=>{
      userResetPassword(userEmail)
      .then(()=>{
        toast.success('reset successful Please check your email ')
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    return (
        <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div>
    <figure>
        <img src={login_img} alt="" />
    </figure>    
    </div> 
   
    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmitLogin} className="card-body">
            <div className="text-center">
                <h1 className="text-5xl text-primary font-bold">Login now!</h1>
            </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onBlur={handleOnBlur} type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link onClick={handleForgetPassword}  className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Login</button>
        </div>
      </form>
      <div className='text-center '>
        <p>New to doctors portal <Link to='/register' className='underline text-primary'>create account</Link></p>
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

export default Login;