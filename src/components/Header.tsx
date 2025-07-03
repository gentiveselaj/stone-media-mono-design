import logo from '/stone.png'; // with import




const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo}  width={100} />
            <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-sans text-gray-600 hover:text-black transition-colors duration-200">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-black transition-colors duration-200">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
