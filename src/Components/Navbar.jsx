import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-stone-100 backdrop-blur border-b border-stone-200">
      
      {/* Logo */}
      <span className="text-xl font-semibold text-pink-600">
        TaskBrain AI
      </span>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-md ">
        {["Home", "Features", "How it works", "FAQ"].map(item => (
          <a
            key={item}
            href="#"
            className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4 ml-6">
        <button className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white transition-all duration-200">
          Login
        </button>
        <button className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white transition-all duration-200">
          SignUp
        </button>
      </div>

      {/* Hamburger (Mobile) */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-white shadow-lg rounded-xl flex flex-col items-end gap-2 px-4 py-4 text-md z-50">
          {["Home", "Features", "How it works", "FAQ"].map(item => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="w-full text-right px-3 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
