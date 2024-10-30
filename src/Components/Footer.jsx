import React from 'react';
import './Footer.css';
import footer_logo from '../assets/footer_logo.svg';
import user_icon from '../assets/user_icon.svg';

const Footer = () => {
    
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>I'm a frontend developer from the USA with 10 years of experience, having worked at companies like Microsoft, Tesla, and Apple.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type='email' placeholder='Enter Your Email'/>
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className='footer-bottom-left'>2024 Uthum Wijenayake, All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
