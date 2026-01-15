import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      />

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0800]/90 via-[#1a1608]/80 to-[#0a0800]/90" />

      {/* Luxury Gold Gradient Accents */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#d4af37]/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-t from-[#f7ef8a]/30 via-[#d4af37]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#d4af37]/15 via-[#f7ef8a]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Gold particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#f7ef8a] to-[#d4af37] animate-ping delay-300"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-[#d4af37]/40 text-white text-sm font-medium mb-8 shadow-lg backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="tracking-wide">
                Conservative • Secure • Long-term
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-serif font-semibold text-white leading-[1.1] mb-8">
              Secure, Passive Income Through{' '}
              <span className="relative">
              <span className="relative z-10 italic font-normal bg-gradient-to-r from-[#00703D] 50%, to-[#B29711] 50% bg-clip-text text-transparent">
                Strategic Partnerships
              </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] opacity-30 blur-xl"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-12 max-w-lg leading-relaxed font-light">
              We fund 100% of the capital required for high-yield asset
              acquisitions, sharing ownership and profits equally with our
              partners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                withArrow
                onClick={() =>
                  document
                    .getElementById('approach')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] text-gray-900 hover:brightness-110 hover:shadow-lg shadow-md transition-all duration-300 font-semibold"
              >
                Our Approach
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border border-[#d4af37]/40 text-white hover:bg-white/10 hover:border-[#d4af37]/60 hover:text-[#f7ef8a] transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Logo Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full blur-3xl scale-110 bg-gradient-to-b from-[#d4af37]/40 via-[#f7ef8a]/30 to-[#d4af37]/20" />
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add shimmer animation */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%) translateY(-100%) rotate(30deg);
            }
            100% {
              transform: translateX(100%) translateY(100%) rotate(30deg);
            }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite linear;
          }
        `}
      </style>
    </section>
  );
}