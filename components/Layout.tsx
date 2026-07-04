
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Clock } from 'lucide-react';
import { RoutePath } from '../types';

const navItems = [
  { label: 'Home', path: RoutePath.HOME },
  { label: 'About Us', path: RoutePath.ABOUT, hasDropdown: true, dropdownKey: 'about' },
  { label: 'Programs', path: RoutePath.PROGRAMS, hasDropdown: true, dropdownKey: 'programs' },
  { label: 'Philosophy', path: RoutePath.PHILOSOPHY },
  { label: 'Community', path: RoutePath.COMMUNITY, hasDropdown: true, dropdownKey: 'community' },
  { label: 'Contact Us', path: RoutePath.CONTACT },
  { label: 'Careers', path: RoutePath.CAREER },
];

type DropdownItem = {
  label: string;
  path: string;
  isDownload?: boolean;
};

const programsDropdownItems: DropdownItem[] = [
  { label: 'Programs', path: RoutePath.PROGRAMS },
  { label: 'Tuition', path: RoutePath.TUITION },
  { label: 'Calendar', path: '/Calendar.pdf', isDownload: true },
  { label: 'CCCAP', path: RoutePath.TUITION + '#cccapp' },
  { label: 'UPK', path: RoutePath.TUITION + '#upk' },
];

const communityDropdownItems: DropdownItem[] = [
  { label: 'Community', path: RoutePath.COMMUNITY },
  { label: 'Events', path: RoutePath.EVENTS },
  { label: 'Family Resources', path: RoutePath.FAMILY_RESOURCES },
];

const aboutDropdownItems: DropdownItem[] = [
  { label: 'About Us', path: RoutePath.ABOUT },
  { label: 'Our Curriculum', path: RoutePath.CURRICULUM },
];

const getDropdownItems = (key: string): DropdownItem[] => {
  switch (key) {
    case 'programs': return programsDropdownItems;
    case 'community': return communityDropdownItems;
    case 'about': return aboutDropdownItems;
    default: return [];
  }
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const programsDropdownRef = useRef<HTMLDivElement>(null);
  const communityDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === RoutePath.HOME;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const programsClicked = programsDropdownRef.current?.contains(target);
      const communityClicked = communityDropdownRef.current?.contains(target);
      const aboutClicked = aboutDropdownRef.current?.contains(target);
      if (!programsClicked && !communityClicked && !aboutClicked) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isHomePage 
        ? (scrolled || isOpen ? 'bg-white shadow-sm py-3' : 'bg-white/10 backdrop-blur-sm py-4')
        : 'bg-white shadow-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/MSE-T.png" alt="MSE Logo" className="h-24 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div
                key={item.path}
                className="relative"
                ref={item.dropdownKey === 'programs' ? programsDropdownRef : item.dropdownKey === 'community' ? communityDropdownRef : aboutDropdownRef}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.dropdownKey ? null : item.dropdownKey!)}
                  className={`text-sm transition-colors flex items-center gap-1 ${
                    (isHomePage && !scrolled && !isOpen)
                      ? location.pathname === item.path
                        ? 'text-white font-bold hover:text-white'
                        : 'text-white/90 font-medium hover:text-white'
                      : location.pathname === item.path 
                        ? 'text-sage font-bold hover:text-sage' 
                        : 'text-slate-600 font-medium hover:text-sage'
                  }`}
                >
                  {item.label}
                  <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.dropdownKey ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === item.dropdownKey && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-100 py-2 min-w-[180px] z-50">
                    {getDropdownItems(item.dropdownKey!).map((dropItem) => (
                      dropItem.isDownload ? (
                        <a
                          key={dropItem.path}
                          href={dropItem.path}
                          download
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-sage/10 hover:text-sage transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.label}
                        </a>
                      ) : (
                        <Link
                          key={dropItem.path}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-sage/10 hover:text-sage transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  (isHomePage && !scrolled && !isOpen)
                    ? location.pathname === item.path
                      ? 'text-white font-bold hover:text-white'
                      : 'text-white/90 font-medium hover:text-white'
                    : location.pathname === item.path 
                      ? 'text-sage font-bold hover:text-sage' 
                      : 'text-slate-600 font-medium hover:text-sage'
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 ${(isHomePage && !scrolled && !isOpen) ? 'text-white' : 'text-sage'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div key={item.path}>
                <button
                  onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.dropdownKey ? null : item.dropdownKey!)}
                  className="text-lg font-serif border-b border-slate-100 pb-2 w-full text-left flex items-center justify-between"
                >
                  {item.label}
                  <ChevronDown size={20} className={`transition-transform ${activeMobileDropdown === item.dropdownKey ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileDropdown === item.dropdownKey && (
                  <div className="pl-4 mt-2 space-y-2">
                    {getDropdownItems(item.dropdownKey!).map((dropItem) => (
                      dropItem.isDownload ? (
                        <a
                          key={dropItem.path}
                          href={dropItem.path}
                          download
                          className="block py-2 text-slate-600 text-base"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMobileDropdown(null);
                          }}
                        >
                          {dropItem.label}
                        </a>
                      ) : (
                        <Link
                          key={dropItem.path}
                          to={dropItem.path}
                          className="block py-2 text-slate-600 text-base"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMobileDropdown(null);
                          }}
                        >
                          {dropItem.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-serif border-b border-slate-100 pb-2"
              >
                {item.label}
              </Link>
            )
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
          <h3 className="text-xl font-serif mb-6">Montessori School of Elizabeth</h3>
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
            <li><Link to={RoutePath.PROGRAMS} className="hover:text-white transition-colors">Infant Program</Link></li>
            <li><Link to={RoutePath.PROGRAMS} className="hover:text-white transition-colors">Toddler Program</Link></li>
            <li><Link to={RoutePath.PROGRAMS} className="hover:text-white transition-colors">Primary Program</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3"><MapPin size={18} className="text-sage" /> <span>635 Beverly Street, Elizabeth, Colorado 80107</span></li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-sage" /> <span>+1 (719)-744-3692</span></li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-sage" /> <span>admissions@montessorielizabeth.com</span></li>
            <li className="flex items-center gap-3"><Clock size={18} className="text-sage" /> <span>School Hours: 7:00 AM - 5:15 PM</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Montessori School of Elizabeth. All rights reserved.
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
