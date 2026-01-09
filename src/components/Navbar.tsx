import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approach', href: '#approach' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
  ];

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false); // close mobile menu
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-navy-950/95 backdrop-blur-xl shadow-luxury py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/100_Vebture_Logo_(2).png"
            alt="Hundred Venture PLC"
            className="h-10 w-auto"
          />
          <span className="font-serif font-semibold text-xl text-white">
            Hundred Venture PLC
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-slate-400 hover:text-white transition"
            >
              {link.name}
            </button>
          ))}
          <Button variant="secondary" onClick={() => scrollTo('#contact')}>
            Partner With Us
          </Button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2">
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-brand-navy-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base text-slate-400 hover:text-white transition"
              >
                {link.name}
              </button>
            ))}
            <Button variant="secondary" className="w-full" onClick={() => scrollTo('#contact')}>
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
