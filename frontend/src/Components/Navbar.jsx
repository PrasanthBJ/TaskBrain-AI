import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  const isLanding = location.pathname === "/";
  const isAuth = location.pathname === "/auth";
  const isDashboard = location.pathname.startsWith("/dashboard");

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "Features", href: "features" },
    { label: "How it works", href: "how-it-works" },
    { label: "FAQ", href: "faq" },
  ];

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${sectionId}`);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-stone-100 backdrop-blur border-b border-stone-200">

      {/* LOGO — ALWAYS VISIBLE */}
      <span
        onClick={() => navigate("/")}
        className="text-xl font-semibold text-pink-600 cursor-pointer"
      >
        TaskBrain AI
      </span>

      {/* LANDING PAGE LINKS */}
      {isLanding && (
        <>
          <div className="hidden md:flex gap-6 text-md">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-4 ml-6">
            <button
              onClick={() => navigate("/auth")}
              className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white transition-all"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/auth")}
              className="border-2 px-3 py-1 rounded-2xl hover:bg-pink-600 hover:text-white transition-all"
            >
              SignUp
            </button>
          </div>
        </>
      )}

      {/* AUTH PAGE — CLEAN (NO LINKS) */}
      {isAuth && (
        <span className="text-sm text-gray-500 hidden md:block">
          Secure Authentication
        </span>
      )}

      {/* DASHBOARD MODE */}
      {isDashboard && (
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-600">
            {role}
          </span>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="text-sm hover:text-pink-600"
          >
            Logout
          </button>
        </div>
      )}

      {/* MOBILE MENU (ONLY LANDING) */}
      {isLanding && (
        <>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {menuOpen && (
            <div className="absolute top-full right-4 mt-2 w-48 bg-white shadow-lg rounded-xl flex flex-col items-end gap-2 px-4 py-4 text-md z-50">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-right px-3 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-600 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
