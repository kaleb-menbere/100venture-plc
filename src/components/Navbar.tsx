import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Approach',
    href: '#approach'
  }, {
    name: 'Benefits',
    href: '#benefits'
  }, {
    name: 'Process',
    href: '#process'
  }, {
    name: 'Team',
    href: '#team'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-navy-950/95 backdrop-blur-xl shadow-luxury py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <img src="/100_Vebture_Logo_(2).png" alt="Hundred Venture PLC" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="font-serif font-semibold text-xl tracking-tight text-white">
                Hundred Venture PLC
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 tracking-wide">
                {link.name}
              </a>)}
            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-brand-navy-950/98 backdrop-blur-xl border-t border-white/10 overflow-hidden shadow-luxury">
            <div className="px-4 py-8 space-y-6">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium text-slate-400 hover:text-white transition-colors">
                  {link.name}
                </a>)}
              <Button variant="secondary" className="w-full" onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
                Partner With Us
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}