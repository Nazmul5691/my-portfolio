const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900/50 relative overflow-hidden">
      {/* Background Glow - Very subtle to match the dark theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Side: Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              Meriem{"</>"}
            </h2>
            <p className="text-gray-500 text-sm tracking-wide">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Right Side: Navigation Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;