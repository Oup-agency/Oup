import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0A0A0F]/90 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        {/* ---- Left: Logo ---- */}
        <div className="text-white font-semibold tracking-wide text-2xl">
          OUP
        </div>

        {/* ---- Desktop NAV LINKS ---- */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-12 text-white text-lg font-medium">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* ---- Desktop CTA ---- */}
        <a
          href="book-call"
          className="hidden md:inline-flex px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Book a Call
        </a>

        {/* ---- Mobile Hamburger ---- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ---- Mobile Menu ---- */}
      {open && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-lg px-6 pb-6">
          <div className="flex flex-col space-y-5 text-white text-lg font-medium">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

            <a
              href="book-call"
              className="mt-4 inline-flex justify-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              onClick={() => setOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
