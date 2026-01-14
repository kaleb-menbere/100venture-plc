import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function KeyBenefits() {
  return (
    <section
      id="benefits"
      className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0800] via-[#1a1608] to-[#0a0800]"
    >
      {/* Luxurious gold metallic background */}
      <div className="absolute inset-0">
        {/* Base gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2400] via-[#1a1600] to-[#2a2400]"></div>
        
        {/* Gold metallic texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-[#f7ef8a]/5 to-[#d4af37]/10"></div>
        
        {/* Gold light beams */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f7ef8a]/20 via-[#f7ef8a]/10 to-transparent"></div>
        
        {/* Gold particles and sparkles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d4af37] animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f7ef8a] animate-ping delay-300"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#d4af37] animate-ping delay-700"></div>
        </div>
        
        {/* Subtle diagonal pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 49%, #d4af37 49%, #d4af37 51%, transparent 51%)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-shimmer bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative gold accent - Hide on mobile, show on desktop */}
            <div className="hidden md:block absolute -left-4 top-0 h-16 w-px bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
            
            {/* Strategic Advantages Header - Centered on mobile, left on desktop */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-center md:justify-start mb-3 md:mb-4">
                <div className="h-px w-6 md:w-8 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
                <span className="mx-2 md:mx-3 text-xs md:text-sm font-semibold tracking-wider text-[#d4af37] uppercase">
                  Strategic Advantages
                </span>
                <div className="h-px w-6 md:w-8 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              </div>
            </div>

            {/* Main Heading - Centered on mobile, left on desktop */}
            <h2 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4 md:mb-6 leading-tight text-white">
              Why Partner With{' '}
              <span className="relative">
                <span className="relative z-10 italic font-normal bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent">
                  Hundred Venture
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] opacity-30 blur-xl"></span>
              </span>
              ?
            </h2>

            {/* Description - Centered on mobile, left on desktop */}
            <p className="text-center md:text-left text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed font-light">
              We remove the primary barrier to entry for high-value asset acquisition: capital. Our unique model allows experienced operators and sponsors to scale without dilution from traditional debt.
            </p>

            {/* Benefits List - Align left on all screens */}
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              {[
                '100% Purchase Price Funding - No capital required from partners',
                '50% Profit Sharing - Equal split of net operating income',
                '50% Ownership - True equity partnership from day one',
                'Secure Asset Backing - Investments secured by real assets',
                'Passive Income Focus - Built for long-term cash flow',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all duration-300 group"
                >
                  <div className="relative flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 animate-ping opacity-30">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37]" />
                    </div>
                  </div>
                  <span className="text-sm md:text-base lg:text-lg text-white font-light leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card - Luxurious Gold */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            {/* Gold glow effect */}
            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-[#d4af37]/20 to-[#f7ef8a]/10 blur-xl md:blur-2xl rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative bg-gradient-to-br from-[#1a1406] via-[#0f0c03] to-[#1a1406] border border-[#d4af37]/20 md:border-[#d4af37]/30 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden group">
              
              {/* Card background texture */}
              <div className="absolute inset-0 opacity-5 md:opacity-10">
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, #d4af37 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 h-4 w-4 md:h-6 md:w-6 border-t border-l md:border-t md:border-l border-[#d4af37]/20 rounded-tl-lg"></div>
              <div className="absolute top-3 right-3 md:top-4 md:right-4 h-4 w-4 md:h-6 md:w-6 border-t border-r md:border-t md:border-r border-[#d4af37]/20 rounded-tr-lg"></div>
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 h-4 w-4 md:h-6 md:w-6 border-b border-l md:border-b md:border-l border-[#d4af37]/20 rounded-bl-lg"></div>
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 h-4 w-4 md:h-6 md:w-6 border-b border-r md:border-b md:border-r border-[#d4af37]/20 rounded-br-lg"></div>
              
              {/* Gold shine effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7ef8a]/50 to-transparent"></div>

              {/* Card Header */}
              <div className="text-center mb-6 md:mb-8 lg:mb-10">
                <div className="flex items-center justify-center mb-3 md:mb-4">
                  <div className="h-px w-4 md:w-6 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                  <span className="mx-2 md:mx-3 text-xs md:text-sm font-medium text-[#d4af37] uppercase tracking-widest">
                    Partnership Model
                  </span>
                  <div className="h-px w-4 md:w-6 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-white mb-2">
                  Fair & Transparent
                </h3>
              </div>

              {/* Percentage Cards */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-10">
                {/* 100% Card */}
                <div className="relative w-full md:w-auto">
                  <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-br from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative text-center p-4 md:p-5 lg:p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-[#d4af37]/20">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-1 md:mb-2 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-xs md:text-sm text-white/90 tracking-wide">
                      Capital Provided
                    </div>
                  </div>
                </div>

                {/* & Symbol */}
                <div className="text-xl md:text-2xl lg:text-3xl font-serif text-[#d4af37] font-semibold italic py-2 md:py-0">
                  &
                </div>

                {/* 50/50 Card */}
                <div className="relative w-full md:w-auto">
                  <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-br from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative text-center p-4 md:p-5 lg:p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-[#d4af37]/20">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-1 md:mb-2 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent">
                      50/50
                    </div>
                    <div className="text-xs md:text-sm text-white/90 tracking-wide">
                      Profit Split
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="text-center relative">
                {/* Quote decoration */}
                <div className="absolute -top-1 -left-1 md:-top-2 md:-left-2 text-xl md:text-2xl lg:text-3xl text-[#d4af37]/20">"</div>
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 text-xl md:text-2xl lg:text-3xl text-[#d4af37]/20">"</div>
                
                {/* Quote Text */}
                <p className="text-sm md:text-base lg:text-lg text-white/90 italic font-light leading-relaxed relative z-10 px-2">
                  "We bring the capital. You bring the opportunity and expertise. Together, we build lasting wealth."
                </p>
                
                {/* Signature line */}
                <div className="mt-4 pt-3 md:pt-4 border-t border-[#d4af37]/20">
                  <p className="text-xs md:text-sm text-[#d4af37]/80 font-medium tracking-wider uppercase">
                    The Hundred Venture Promise
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Add custom animation for shimmer effect */}
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