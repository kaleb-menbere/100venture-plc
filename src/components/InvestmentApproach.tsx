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
      bg: 'from-[#299963] to-[#2ba466]',
      border: 'border-[#299963]/40',
      hoverBorder: 'hover:border-[#299963]/70',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      textColor: 'text-white',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(41,153,99,0.3)]',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Yield',
      description:
        'We focus on assets that provide secure, passive income streams. We are not looking for quick flips; we are building generational wealth.',
      image: '/p2.jpeg',
      bg: 'from-[#D3AF5E] to-[#e4be6d]',
      border: 'border-[#D3AF5E]/40',
      hoverBorder: 'hover:border-[#D3AF5E]/70',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      textColor: 'text-white',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(211,175,94,0.3)]',
    },
    {
      icon: Scale,
      title: 'Equity Partnership',
      description:
        "We don't just lend money; we partner with you. By providing 100% of the capital, we align our success directly with yours through shared equity.",
      image: '/p4.jpeg',
      bg: 'from-[#299963] to-[#2ba466]',
      border: 'border-[#299963]/40',
      hoverBorder: 'hover:border-[#299963]/70',
      iconBg: 'bg-white/20',
      iconColor: 'text-white',
      textColor: 'text-white',
      hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(41,153,99,0.3)]',
    },
  ];

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#e1f2e0] py-24 lg:py-32"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#299963]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#D3AF5E]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-gray-900">
              A Disciplined Investment{' '}
              <span className="italic font-normal bg-gradient-to-r from-[#D3AF5E] to-[#299963] bg-clip-text text-transparent">
                Philosophy
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-light">
              At Hundred Venture PLC, we believe in tangible assets and
              conservative financial modeling that delivers consistent returns.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
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
              <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              
              <div
                className={`relative flex h-full min-h-[380px] sm:min-h-[420px] flex-col justify-between rounded-2xl ${feature.border} bg-gradient-to-br ${feature.bg} p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 shadow-xl ${feature.hoverGlow} group-hover:-translate-y-2`}
              >
                {/* TEXT CONTENT - Original effect: disappears completely on hover */}
                <div className="transition-opacity duration-500 group-hover:opacity-0">
                  <div className={`mb-6 sm:mb-8 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl ${feature.iconBg} shadow-lg`}>
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>

                  <h3 className={`mb-3 sm:mb-4 text-xl sm:text-2xl font-serif font-semibold ${feature.textColor}`}>
                    {feature.title}
                  </h3>

                  <p className={`${feature.textColor}/90 font-light leading-relaxed text-sm sm:text-base`}>
                    {feature.description}
                  </p>
                </div>

                {/* IMAGE (HOVER) - Enhanced for better visibility */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 rounded-2xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full rounded-2xl object-cover brightness-110 contrast-110"
                  />
                  
                  {/* Lighter gradient overlay for better image visibility */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bg} opacity-50`} />
                  
                  {/* Hover content - Restored to original layout */}
                  <div className="absolute inset-0 rounded-2xl flex flex-col justify-end p-6 sm:p-8">
                    <div className="text-left">
                      <div className={`inline-flex mb-4 h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl ${feature.iconBg} shadow-lg`}>
                        <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <h3 className="mb-3 text-xl sm:text-2xl font-serif font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 font-light leading-relaxed text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
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
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}