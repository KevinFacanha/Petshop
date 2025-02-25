import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-3 group">
            <Logo className="transform group-hover:scale-110 transition-transform duration-300" />
            <span className="font-display font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Acampamento de cães Training
            </span>
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" 
              className={({ isActive }) => 
                `font-semibold hover:text-blue-600 transition-colors duration-200 
                ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }
            >
              Home
            </NavLink>
            <NavLink to="/sobre" 
              className={({ isActive }) => 
                `font-semibold hover:text-blue-600 transition-colors duration-200 
                ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }
            >
              Sobre
            </NavLink>
            <NavLink to="/servicos" 
              className={({ isActive }) => 
                `font-semibold hover:text-blue-600 transition-colors duration-200 
                ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }
            >
              Serviços
            </NavLink>
            <NavLink to="/contato" 
              className={({ isActive }) => 
                `font-semibold hover:text-blue-600 transition-colors duration-200 
                ${isActive ? 'text-blue-600' : 'text-gray-600'}`
              }
            >
              Contato
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" 
                className={({ isActive }) => 
                  `font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 
                  ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink to="/sobre" 
                className={({ isActive }) => 
                  `font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 
                  ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
              <NavLink to="/servicos" 
                className={({ isActive }) => 
                  `font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 
                  ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </NavLink>
              <NavLink to="/contato" 
                className={({ isActive }) => 
                  `font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 
                  ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;