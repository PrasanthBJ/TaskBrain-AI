import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Features from "../Components/Features";
import HowItWorks from '../Components/HowItWorks';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';



const Landing = () => {
  return (
    <div className='min-h-screen bg-white'>
    <Navbar/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default Landing