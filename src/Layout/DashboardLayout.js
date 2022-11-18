import React,{useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import useAdmin from "../hooks/useAdmin";
import {AuthContext} from '../Contexts/AuthProvider'

const DashboardLayout = () => {
 const {user}=useContext(AuthContext)
  const [isAdmin]=useAdmin(user?.email)
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
              <input id="Dashboard-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <Outlet />
              
             </div> 
                <div className="drawer-side">
                  <label htmlFor="Dashboard-drawer" className="drawer-overlay"></label> 
                  <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    {
                    
                    isAdmin &&
                     <>
                      <li><Link to='/dashboard/users'>All Users</Link></li>
                    </>
                    
                    }
                  </ul>
                
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;