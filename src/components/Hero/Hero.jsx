import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Banner from '../../assets/hero.png'
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className=" bg-base-200">
      <div className="flex flex-col items-center text-center w-11/12 lg:w-10/12 mx-auto gap-6 pt-10">
        <h1 className="text-4xl md:text-7xl font-bold">We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="lg:w-8/12 text-justify lg:text-center">At Appora, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly makes an impact.</p>
        <div className="flex gap-4">
            <Link to='https://play.google.com/' target="_blank"><button className="btn"><IoLogoGooglePlaystore className="text-2xl" />Google Play</button></Link>
            <Link to="https://www.apple.com/app-store/" target="_blank"><button className="btn"><FaAppStoreIos className="text-2xl"/>App Store</button></Link>
        </div>
        <div>
            <img src={Banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
