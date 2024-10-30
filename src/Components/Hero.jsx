import React from 'react';
import './Hero.css';
import profile_img from '../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
    return (
        <div id='home'className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Uthum Wijenayake,</span>frontend developer based in Sri lanka.</h1>
            <p>I'm frontend developer from sri lanka,Undergraduate of University Of Mortuwa.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
