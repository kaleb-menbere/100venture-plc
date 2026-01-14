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
    { name: 'Contact', href: '#contact' },
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
          ? 'py-3 md:py-4 bg-gradient-to-b from-[#1a1608]/95 via-[#0f0c03]/95 to-[#1a1406]/95 backdrop-blur-xl shadow-lg border-b border-[#d4af37]/20'
          : 'py-4 md:py-6 bg-gradient-to-b from-[#1a1608]/90 via-[#0f0c03]/90 to-[#1a1406]/90 backdrop-blur-lg'
      }`}
    >
      {/* Gold Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />
      
      {/* Gold Shimmer Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#d4af37]/30 via-[#f7ef8a]/20 to-[#d4af37]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 md:gap-3 group"
          onClick={() => scrollTo('#home')}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img
              src="/100_Vebture_Logo_(2).png"
              alt="Hundred Venture PLC"
              className={`relative h-8 md:h-10 w-auto transition-all duration-300 ${
                isScrolled 
                  ? 'brightness-100' 
                  : 'brightness-110'
              } group-hover:scale-105`}
            />
          </div>
          <span className={`font-serif font-semibold text-lg md:text-xl transition-all duration-300 ${
            isScrolled 
              ? 'text-white' 
              : 'text-white'
          } group-hover:text-[#f7ef8a] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]`}>
            Hundred Venture PLC
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.replace('#', '');
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition-all duration-300 group/nav-link ${
                  isActive
                    ? 'text-[#f7ef8a]'
                    : 'text-gray-300 hover:text-[#f7ef8a]'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Gold highlight on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 rounded opacity-0 group-hover/nav-link:opacity-100 transition-opacity duration-300" />
                
                {/* Active underline */}
                {isActive && (
                  <>
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-full" />
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-full blur opacity-50" />
                  </>
                )}
              </button>
            );
          })}
          
          <div className="relative group/btn">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-lg blur opacity-30 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
            <Button 
              onClick={() => scrollTo('#contact')}
              className={`relative overflow-hidden bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] text-gray-900 hover:brightness-110 hover:shadow-lg shadow-md transition-all duration-300 font-semibold text-sm px-6 py-2.5`}
            >
              <span className="relative z-10">Partner With Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <div className="relative group/menu">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] rounded-full blur opacity-0 group-hover/menu:opacity-30 transition-opacity duration-300"></div>
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)} 
              className={`relative p-2 transition-colors duration-300 rounded-lg border border-[#d4af37]/20 ${
                isScrolled 
                  ? 'text-white' 
                  : 'text-white'
              } hover:text-[#f7ef8a] hover:bg-white/5`}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1a1406] via-[#0f0c03] to-[#1a1406] border-t border-[#d4af37]/20 shadow-xl">
          {/* Gold accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 group/mobile-link ${
                    isActive
                      ? 'text-[#f7ef8a] bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20'
                      : 'text-gray-300 hover:text-[#f7ef8a] hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {link.name}
                    {isActive && (
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] mr-2"></div>
                        <div className="w-8 h-px bg-gradient-to-r from-[#d4af37] to-[#f7ef8a]"></div>
                      </div>
                    )}
                  </span>
                  
                  {/* Gold glow on hover */}
                  {!isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 rounded opacity-0 group-hover/mobile-link:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              );
            })}
            
            <div className="relative group/mobile-btn mt-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-lg blur opacity-30 group-hover/mobile-btn:opacity-50 transition-opacity duration-300"></div>
              <Button 
                className="relative w-full bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] text-gray-900 hover:brightness-110 shadow-md transition-all duration-300 font-semibold text-sm py-3"
                onClick={() => scrollTo('#contact')}
              >
                Partner With Us
              </Button>
            </div>
            
            {/* Decorative footer */}
            <div className="pt-4 mt-2 border-t border-[#d4af37]/10">
              <p className="text-center text-xs text-[#d4af37]/60 tracking-wider">
                ELEVATING INVESTMENTS
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}