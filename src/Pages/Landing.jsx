import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Features from "../Components/Features";
import HowItWorks from '../Components/HowItWorks';



const Landing = () => {
  return (
    <div className='min-h-screen bg-white'>
    <Navbar/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    </div>
  )
}

export default Landing