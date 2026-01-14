import { motion } from 'framer-motion';
import { TrendingUp, Scale, Lock } from 'lucide-react';

export function InvestmentApproach() {
  const features = [
    {
      icon: Lock,
      title: 'Conservative Strategy',
      description:
        'We prioritize capital preservation above all else. Our assets are selected for their stability and consistent performance over decades, not days.',
      image: '/p1.jpeg',
      bg: 'from-[#1a472a] to-[#2d5c43]',
      border: 'border-[#d4af37]/20',
      hoverBorder: 'hover:border-[#d4af37]/40',
      iconBg: 'bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]',
      iconColor: 'text-white',
      textColor: 'text-white',
      hoverGlow: 'group-hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Yield',
      description:
        'We focus on assets that provide secure, passive income streams. We are not looking for quick flips; we are building generational wealth.',
      image: '/h2.jpeg',
      bg: 'from-[#2a2a2a] to-[#3d3d3d]',
      border: 'border-[#d4af37]/20',
      hoverBorder: 'hover:border-[#d4af37]/40',
      iconBg: 'bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]',
      iconColor: 'text-white',
      textColor: 'text-white',
      hoverGlow: 'group-hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]',
    },
    {
      icon: Scale,
      title: 'Equity Partnership',
      description:
        "We don't just lend money; we partner with you. By providing 100% of the capital, we align our success directly with yours through shared equity.",
      image: '/p4.jpeg',
      bg: 'from-[#1a472a] to-[#2d5c43]',
      border: 'border-[#d4af37]/20',
      hoverBorder: 'hover:border-[#d4af37]/40',
      iconBg: 'bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]',
      iconColor: 'text-white',
      textColor: 'text-white',
      hoverGlow: 'group-hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]',
    },
  ];

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a0800] via-[#1a1608] to-[#0a0800] py-16 md:py-24 lg:py-32"
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 md:mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center mb-4 md:mb-6">
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              <span className="mx-3 md:mx-4 text-xs md:text-sm font-semibold tracking-wider text-[#d4af37] uppercase">
                Investment Excellence
              </span>
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </div>
            
            <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-white">
              A Disciplined{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent">
                  Investment Philosophy
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] opacity-30 blur-xl"></span>
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light">
              At Hundred Venture PLC, we believe in tangible assets and
              conservative financial modeling that delivers consistent returns.
            </p>
            
            {/* Decorative gold line */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Cards - Single layout for all screens */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative h-full"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${feature.bg} opacity-0 md:group-hover:opacity-50 blur-2xl transition-opacity duration-700`} />
              
              {/* Gold border effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              
              <div
                className={`relative flex h-full min-h-[300px] md:min-h-[380px] lg:min-h-[420px] flex-col justify-between rounded-2xl ${feature.border} bg-gradient-to-br ${feature.bg} p-6 md:p-8 backdrop-blur-sm transition-all duration-300 shadow-lg md:shadow-2xl ${feature.hoverGlow} md:group-hover:-translate-y-2 md:group-hover:scale-[1.02] overflow-hidden`}
              >
                {/* Image background - Always visible on mobile, hidden on desktop until hover */}
                <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 rounded-2xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover brightness-90 md:brightness-110 md:contrast-110 md:scale-110 md:group-hover:scale-100 transition-transform duration-1000"
                  />
                  
                  {/* Gold overlay - darker on mobile for better text readability */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/40 via-black/20 to-black/40 md:from-[#d4af37]/20 md:via-[#d4af37]/10 md:to-transparent"></div>
                </div>
                
                {/* Content - Always visible */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className={`mb-4 md:mb-6 lg:mb-8 flex h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-lg md:rounded-xl ${feature.iconBg} shadow-lg shadow-[#d4af37]/20`}>
                      <feature.icon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white" />
                    </div>

                    <h3 className={`mb-2 md:mb-3 lg:mb-4 text-lg md:text-xl lg:text-2xl font-serif font-semibold ${feature.textColor}`}>
                      {feature.title}
                    </h3>

                    <p className={`${feature.textColor}/90 font-light leading-relaxed text-sm md:text-base`}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Mobile indicator */}
                  <div className="mt-4 md:hidden text-center">
                    <div className="inline-flex items-center justify-center space-x-2">
                      <div className="h-px w-4 bg-[#d4af37]/40"></div>
                      <span className="text-xs text-[#d4af37]/60">Tap to view details</span>
                      <div className="h-px w-4 bg-[#d4af37]/40"></div>
                    </div>
                  </div>
                </div>
                
                {/* Card shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7ef8a] to-transparent" />
                
                {/* Corner accents */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 h-4 w-4 md:h-6 md:w-6 border-t border-l md:border-t-2 md:border-l-2 border-[#d4af37]/30 rounded-tl-lg"></div>
                <div className="absolute top-3 right-3 md:top-4 md:right-4 h-4 w-4 md:h-6 md:w-6 border-t border-r md:border-t-2 md:border-r-2 border-[#d4af37]/30 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 h-4 w-4 md:h-6 md:w-6 border-b border-l md:border-b-2 md:border-l-2 border-[#d4af37]/30 rounded-bl-lg"></div>
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 h-4 w-4 md:h-6 md:w-6 border-b border-r md:border-b-2 md:border-r-2 border-[#d4af37]/30 rounded-br-lg"></div>
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
          <p className="mt-4 md:mt-6 text-xs md:text-sm text-[#d4af37]/70 tracking-wider">
            ELEVATING INVESTMENTS THROUGH DISCIPLINED EXCELLENCE
          </p>
        </motion.div>
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