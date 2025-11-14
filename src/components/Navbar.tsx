import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="fixed w-full bg-[#0A0A0F]/80 backdrop-blur-lg z-50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <button onClick={() => handleNavigation('about')} className="hover:text-purple-500 transition-colors">About</button>
            <button onClick={() => handleNavigation('services')} className="hover:text-purple-500 transition-colors">Services</button>
            <button onClick={() => handleNavigation('process')} className="hover:text-purple-500 transition-colors">Process</button>
            <button onClick={() => handleNavigation('team')} className="hover:text-purple-500 transition-colors">Team</button>
            <button onClick={() => handleNavigation('faq')} className="hover:text-purple-500 transition-colors">FAQ</button>

            <Link
              to="/book-call"
              className="bg-purple-600 hover:bg-purple-700 px-5 py-1.5 rounded-full transition-colors text-sm"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavigation('about')} className="hover:text-purple-500 transition-colors">About</button>
              <button onClick={() => handleNavigation('services')} className="hover:text-purple-500 transition-colors">Services</button>
              <button onClick={() => handleNavigation('process')} className="hover:text-purple-500 transition-colors">Process</button>
              <button onClick={() => handleNavigation('team')} className="hover:text-purple-500 transition-colors">Team</button>
              <button onClick={() => handleNavigation('faq')} className="hover:text-purple-500 transition-colors">FAQ</button>

              <Link
                to="/book-call"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors text-center"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
