import React from 'react';
import './Footer'

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer id='' className="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Monthly Checkup</a>
    <a className="link link-hover">Weekly Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
  </div> 
  <div>
    <span className="footer-title">ORAL HEALTH</span> 
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Cavity Filling</a>
    <a className="link link-hover">Teath Whitening</a>
  </div> 
  <div>
    <span className="footer-title">OUR ADDRESS</span> 
    <a className="link link-hover">New York - 101010 Hudson</a>
  </div>

</footer>
 
<div>
  <p className='text-center my-4'>Copyright 2022 All Rights Reserved</p>
  </div>
        </div>
    );
};

export default Footer;