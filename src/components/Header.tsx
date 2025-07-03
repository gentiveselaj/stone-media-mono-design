
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/stone.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} width={100} alt="Stone Media" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-sans text-gray-600 hover:text-black transition-colors duration-200">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-black transition-colors duration-200">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-black transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors duration-200">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#services" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
