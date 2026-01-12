import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Approach', href: '#approach' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
  ];

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
      setActiveLink(href.replace('#', ''));
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleActiveLink = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleActiveLink);
    return () => window.removeEventListener('scroll', handleActiveLink);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 bg-gradient-to-r from-white via-[#fef9f0] to-[#f5e5c4] backdrop-blur-xl shadow-lg border-b border-[#eecf94]/30'
          : 'py-6 bg-gradient-to-r from-white via-[#fef9f0] to-[#f5e5c4] backdrop-blur-lg'
      }`}
    >
      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eecf94] to-transparent" />
      
      {/* Subtle Gold Gradient Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#eecf94]/30 via-transparent to-[#eecf94]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group"
          onClick={() => scrollTo('#home')}
        >
          <img
            src="/100_Vebture_Logo_(2).png"
            alt="Hundred Venture PLC"
            className={`h-10 w-auto transition-all duration-300 ${
              isScrolled 
                ? 'brightness-95' 
                : 'brightness-100'
            }`}
          />
          <span className={`font-serif font-semibold text-xl transition-colors duration-300 ${
            isScrolled 
              ? 'text-[#003c2c]' 
              : 'text-[#003c2c]'
          } group-hover:text-[#eecf94]`}>
            Hundred Venture PLC
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.replace('#', '');
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-[#003c2c]'
                    : 'text-gray-700 hover:text-[#eecf94]'
                }`}
              >
                {link.name}
                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#eecf94] to-[#d9b883] rounded-full" />
                )}
              </button>
            );
          })}
          
          <Button 
            variant="secondary" 
            onClick={() => scrollTo('#contact')}
            className={`relative overflow-hidden transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-[#003c2c] to-[#00291f] text-white hover:from-[#eecf94] hover:to-[#d9b883] hover:text-gray-900'
                : 'bg-gradient-to-r from-[#003c2c] to-[#00291f] text-white hover:from-[#eecf94] hover:to-[#d9b883] hover:text-gray-900'
            } shadow-md hover:shadow-lg`}
          >
            Partner With Us
          </Button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)} 
            className={`p-2 transition-colors duration-300 ${
              isScrolled 
                ? 'text-[#003c2c]' 
                : 'text-[#003c2c]'
            }`}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-white to-[#f5e5c4] border-t border-[#eecf94]/30 shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#003c2c] bg-gradient-to-r from-[#eecf94]/20 to-[#f5e5c4]/10'
                      : 'text-gray-700 hover:text-[#eecf94] hover:bg-[#f5e5c4]/20'
                  }`}
                >
                  <span className="flex items-center">
                    {link.name}
                    {isActive && (
                      <div className="ml-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#eecf94] to-[#d9b883]" />
                    )}
                  </span>
                </button>
              );
            })}
            <Button 
              variant="secondary" 
              className="w-full mt-4 bg-gradient-to-r from-[#003c2c] to-[#00291f] text-white hover:from-[#eecf94] hover:to-[#d9b883] hover:text-gray-900 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => scrollTo('#contact')}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}