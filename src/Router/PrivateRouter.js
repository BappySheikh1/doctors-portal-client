import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    
    if(!user){
      return <Navigate to='/login' ></Navigate>
    }
    return children
};

export default PrivateRouter;