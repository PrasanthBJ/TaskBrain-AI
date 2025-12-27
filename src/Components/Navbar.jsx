import React from 'react'
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className='min-h-screen bg-white'>

        {/* Navbar */}
        <nav className='flex items-center justify-between px-8 py-6 bg-slate-100'>
            <span className='text-xl font-semibold text-md text-pink-600'>TaskBrain</span>
            <div className='hidden md:flex gap-6 text-md'>
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">Home</a>
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">Features</a>
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">How it works</a>
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">FAQ</a>
            </div>
            <div className='hidden md:flex gap-4 text-md'>
                <button className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white transition-all duration-200">Login</button>
                <button className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white transition-all duration-200">SignUp</button>
            </div>
            {/* Hamburger (Mobile) */}
                <button
                className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
                </button>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
            <div className="md:hidden bg-slate-50 flex flex-col items-end gap-4 px-6 py-6 text-md animate-in slide-in-from-top duration-200">
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">Home</a>
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">Features</a>
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">How it works</a>
                <a href="#" className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200">FAQ</a>
            </div>
        )}

    </div>
  )
}

export default Navbar