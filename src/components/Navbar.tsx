import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const isClickScrolling = useRef(false);
  const navRef = useRef<HTMLElement | null>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Approach', href: '#approach' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  /* ================= SCROLL DETECTION ================= */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isClickScrolling.current) return;

      for (const { href } of navLinks) {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ================= CLICK SCROLL ================= */
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveLink(id);
    setIsMobileOpen(false);

    const NAV_HEIGHT = 90;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;

    setTimeout(() => {
      window.scrollTo({ top: y, behavior: 'smooth' });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 500);
    }, 120);
  };

  /* ================= OUTSIDE CLICK CLOSE ================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-b from-[#1a1608]/95 via-[#0f0c03]/95 to-[#1a1406]/95 backdrop-blur-xl shadow-xl py-3'
          : 'bg-gradient-to-b from-[#1a1608]/85 via-[#0f0c03]/85 to-[#1a1406]/85 backdrop-blur-lg py-5'
      }`}
    >
      {/* Gold border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative z-10">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="group flex items-center gap-2"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] blur opacity-30 group-hover:opacity-60 transition" />
            <img
              src="/100wv.png"
              className="relative h-9 w-auto group-hover:scale-105 transition"
              alt="Hundred Venture"
            />
          </div>
          <span className="text-white font-serif font-semibold text-lg group-hover:text-[#f7ef8a] transition">
            Hundred Venture PLC
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const id = link.href.replace('#', '');
            const isActive = activeLink === id;

            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? 'text-[#f7ef8a]'
                    : 'text-gray-300 hover:text-[#f7ef8a]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37]" />
                )}
              </button>
            );
          })}
<Button
  variant="secondary"
  onClick={() =>
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }
  className="bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] text-gray-900 hover:brightness-110 hover:shadow-lg shadow-md transition-all duration-300 font-semibold"
>
  Partner With Us
</Button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1a1406] via-[#0f0c03] to-[#1a1406] border-t border-[#d4af37]/20">
          {navLinks.map(link => {
            const id = link.href.replace('#', '');
            const isActive = activeLink === id;

            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`block w-full text-left px-6 py-4 transition ${
                  isActive
                    ? 'text-[#f7ef8a] bg-[#d4af37]/10'
                    : 'text-gray-300 hover:text-[#f7ef8a]'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
