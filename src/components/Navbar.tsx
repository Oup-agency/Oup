export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0A0A0F]/90 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

        {/* ---- Left: Logo ---- */}
        <div className="text-white font-semibold tracking-wide text-2xl">
          OUP
        </div>

        {/* ---- Centered NAV LINKS ---- */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-12 text-white text-lg font-medium">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

        {/* ---- Right: Book a Call ---- */}
        <a 
          href="book-call" 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Book a Call
        </a>

      </div>
    </nav>
  );
}
