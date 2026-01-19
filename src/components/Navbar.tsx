

const Navbar = () => {
  return (
    // <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-950/20 backdrop-blur-sm border-b border-purple-900/20">
    <nav className="fixed top-0 left-0 w-full z-50 bg-purple-950/20 backdrop-blur-sm border-b border-purple-900/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-purple-400">Meriem</span>
            <span className="text-white">&lt;/&gt;</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-purple-400 hover:text-purple-300 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;