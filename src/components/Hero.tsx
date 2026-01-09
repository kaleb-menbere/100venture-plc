import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      />

      {/* Dark Overlay (unchanged) */}
      <div className="absolute inset-0 bg-brand-navy-950/80" />

      {/* Luxury Gradient Accents (UPDATED COLORS) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#299963]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D3AF5E]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#299963]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#D3AF5E]/30 text-white text-sm font-medium mb-8 shadow-sm backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#D3AF5E]" />
              <span className="tracking-wide">
                Conservative. Secure. Long-term.
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-serif font-semibold text-white leading-[1.1] mb-8">
              Secure, Passive Income Through{' '}
              <span className="italic font-normal text-[#D3AF5E]">
                Strategic Partnerships
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed font-light">
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
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Logo Glow (UPDATED COLORS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl scale-110 bg-gradient-to-b from-[#D3AF5E]/30 to-[#299963]/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
