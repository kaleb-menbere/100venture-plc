import { motion } from 'framer-motion';
import { FileSearch, Handshake, Building2, Banknote } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: FileSearch,
      title: 'Opportunity Identification',
      description:
        'Partners bring us vetted, high-potential asset acquisition opportunities that meet our conservative criteria.',
      bg: 'from-[#1a1406] to-[#0f0c03]',
      iconBg: 'bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]',
      border: 'border-[#d4af37]/30',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]',
    },
    {
      icon: Handshake,
      title: 'Due Diligence & Agreement',
      description:
        'We conduct thorough analysis. Upon approval, we structure a partnership agreement with clear 50/50 terms.',
      bg: 'from-[#1a1608] to-[#0f0c03]',
      iconBg: 'bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]',
      border: 'border-[#d4af37]/30',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]',
    },
    {
      icon: Building2,
      title: 'Acquisition & Funding',
      description:
        'Hundred Venture PLC provides 100% of the required capital to close the transaction securely.',
      bg: 'from-[#1a1406] to-[#0f0c03]',
      iconBg: 'bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]',
      border: 'border-[#d4af37]/30',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]',
    },
    {
      icon: Banknote,
      title: 'Management & Profit Share',
      description:
        "Partners manage the asset's performance, and profits are distributed equally on a recurring basis.",
      bg: 'from-[#1a1608] to-[#0f0c03]',
      iconBg: 'bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]',
      border: 'border-[#d4af37]/30',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]',
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/h2.jpeg')" }}
      />

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0800]/80 via-[#1a1608]/70 to-[#0a0800]/80" />

      {/* Gold Gradient Accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-[#f7ef8a]/20 via-[#d4af37]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-[#d4af37]/10 via-[#f7ef8a]/5 to-transparent rounded-full blur-3xl" />
        
        {/* Gold particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#f7ef8a] to-[#d4af37] animate-ping delay-300"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <div className="inline-flex items-center justify-center mb-4 md:mb-6">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            <span className="mx-3 md:mx-4 text-xs md:text-sm font-semibold tracking-wider text-[#d4af37] uppercase">
              Our Methodology
            </span>
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>
          
          <h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight">
            How We Work{' '}
            <span className="relative">
              <span className="relative z-10 italic font-normal bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent">
                Together
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] opacity-30 blur-xl"></span>
            </span>
          </h2>
          
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light">
            A streamlined path from opportunity to ownership.
          </p>
          
          {/* Decorative line */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>
        </motion.div>

        {/* Steps - Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${step.bg} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              
              {/* Gold border effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div
                className={`
                  relative h-full rounded-2xl ${step.border} border bg-gradient-to-br ${step.bg}
                  p-6 md:p-8 shadow-lg transition-all duration-300
                  group-hover:-translate-y-2 group-hover:scale-[1.02]
                  ${step.hoverGlow} overflow-hidden backdrop-blur-sm
                `}
              >
                {/* Background texture */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, #d4af37 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                
                {/* Step number */}
                <div className="absolute top-4 left-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-transparent flex items-center justify-center border border-[#d4af37]/30">
                    <span className="text-sm font-semibold text-[#d4af37]">
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8">
                    <div className="h-px w-full bg-gradient-to-r from-[#d4af37]/40 to-transparent"></div>
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#d4af37]/60"></div>
                  </div>
                )}

                {/* Icon */}
                <div className="mx-auto mb-6 md:mb-8 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                  <div className={`h-12 w-12 md:h-14 md:w-14 rounded-xl flex items-center justify-center ${step.iconBg}`}>
                    <step.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 md:mb-4 text-center text-lg md:text-xl font-serif font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-center text-sm md:text-base leading-relaxed text-white/90 font-light">
                  {step.description}
                </p>
                
                {/* Corner accents */}
                <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-[#d4af37]/30 rounded-tl-lg"></div>
                <div className="absolute top-3 right-3 h-4 w-4 border-t border-r border-[#d4af37]/30 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#d4af37]/30 rounded-bl-lg"></div>
                <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#d4af37]/30 rounded-br-lg"></div>
                
                {/* Shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7ef8a] to-transparent"></div>
                
                {/* Mobile step indicator */}
                <div className="md:hidden mt-4 pt-4 border-t border-[#d4af37]/20">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-px w-4 bg-[#d4af37]/30"></div>
                    <span className="text-xs text-[#d4af37]/60">Step {index + 1}</span>
                    <div className="h-px w-4 bg-[#d4af37]/30"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 md:space-x-4">
            <div className="h-px w-6 md:w-8 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#d4af37]"></div>
            <div className="h-px w-6 md:w-8 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
          </div>
          <p className="mt-4 md:mt-6 text-xs md:text-sm text-[#d4af37]/80 tracking-wider">
            FROM IDENTIFICATION TO PROFIT SHARING
          </p>
        </motion.div>
      </div>
    </section>
  );
}