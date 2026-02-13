
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { RoutePath } from '../types';

const navItems = [
  { label: 'Home', path: RoutePath.HOME },
  { label: 'About Us', path: RoutePath.ABOUT },
  { label: 'Programs', path: RoutePath.PROGRAMS },
  { label: 'Philosophy', path: RoutePath.PHILOSOPHY },
  { label: 'Community', path: RoutePath.COMMUNITY },
  { label: 'Contact', path: RoutePath.CONTACT },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-sm py-3' : 'md:bg-transparent bg-white/95 backdrop-blur-sm md:shadow-none shadow-sm py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/MSE-T.png" alt="MSE Logo" className="h-24 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors hover:text-sage ${
                location.pathname === item.path 
                  ? 'text-sage font-bold' 
                  : scrolled 
                    ? 'text-slate-600 font-medium' 
                    : 'text-slate-900 font-semibold'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={RoutePath.CONTACT}
            className="bg-sage text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all shadow-md shadow-sage/20"
          >
            Admissions
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-sage p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif border-b border-slate-100 pb-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D312E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-serif mb-6">Montessori Elizabeth</h3>
          <p className="text-sm text-slate-400 leading-relaxed italic">
            Intentional foundations for little hearts. Confident futures for big dreams.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-xs">Navigation</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            {navItems.map(item => (
              <li key={item.path}><Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-xs">Programs</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to={RoutePath.PROGRAMS} className="hover:text-white transition-colors">Toddler Program</Link></li>
            <li><Link to={RoutePath.PROGRAMS} className="hover:text-white transition-colors">Primary Program</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3"><MapPin size={18} className="text-sage" /> <span>635 Beverly Street, Elizabeth, Colorado 80107</span></li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-sage" /> <span>+58 212 555-0123</span></li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-sage" /> <span>contact@montessorielizabeth.com</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Montessori Elizabeth. All rights reserved.
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
