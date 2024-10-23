import React from 'react';
import './Hero.css';
import profile_img from '../assets/profile_img.svg';

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Uthum Wijenayake,</span>frontend developer based in Sri lanka.</h1>
            <p>I'm frontend developer from sri lanka,Undergraduate of University Of Mortuwa.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
