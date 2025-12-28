import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "Features", href: "features" },
    { label: "How it works", href: "how-it-works" },
    { label: "FAQ", href: "faq" },
  ];

  const handleNavClick = (sectionId) => {
    // If already on landing page → scroll
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } 
    // If on another page (auth) → navigate then scroll
    else {
      navigate(`/#${sectionId}`);
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-stone-100 backdrop-blur border-b border-stone-200">
      
      {/* Logo */}
      <span
        onClick={() => navigate("/")}
        className="text-xl font-semibold text-pink-600 cursor-pointer"
      >
        TaskBrain AI
      </span>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-md">
        {navLinks.map(link => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4 ml-6">
        <button
          onClick={() => navigate("/auth")}
          className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white hover:font-semibold transition-all duration-200"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/auth")}
          className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white hover:font-semibold transition-all duration-200"
        >
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
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-right px-3 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;
