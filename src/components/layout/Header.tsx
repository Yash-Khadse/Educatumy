import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react'; // <-- Changed Sparkles to GraduationCap
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7 text-primary" /> {/* <-- Changed Sparkles to GraduationCap */}
          <span className="text-xl font-bold">Educatumy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-primary ${
                isActive ? 'text-primary' : 'text-white'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-primary ${
                isActive ? 'text-primary' : 'text-white'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-primary ${
                isActive ? 'text-primary' : 'text-white'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition hover:text-primary ${
                isActive ? 'text-primary' : 'text-white'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-primary transition"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-lg absolute top-full left-0 w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto py-6 flex flex-col space-y-4">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg py-2 font-medium transition hover:text-primary ${
                    isActive ? 'text-primary' : 'text-white'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg py-2 font-medium transition hover:text-primary ${
                    isActive ? 'text-primary' : 'text-white'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg py-2 font-medium transition hover:text-primary ${
                    isActive ? 'text-primary' : 'text-white'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg py-2 font-medium transition hover:text-primary ${
                    isActive ? 'text-primary' : 'text-white'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;