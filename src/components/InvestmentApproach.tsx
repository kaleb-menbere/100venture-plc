import React from 'react';
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
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Yield',
      description:
        'We focus on assets that provide secure, passive income streams. We are not looking for quick flips; we are building generational wealth.',
      image: '/p2.jpeg',
    },
    {
      icon: Scale,
      title: 'Equity Partnership',
      description:
        "We don't just lend money; we partner with you. By providing 100% of the capital, we align our success directly with yours through shared equity.",
      image: '/p3.jpeg',
    },
  ];

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-brand-navy-900 py-20 sm:py-24 lg:py-32"
    >
      {/* Background Accent */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-emerald-500/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight">
              A Disciplined Investment{' '}
              <span className="text-luxury italic font-normal">
                Philosophy
              </span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed text-slate-400">
              At Hundred Venture PLC, we believe in the power of tangible assets
              and conservative financial modeling. Our approach is designed to
              weather market volatility while delivering consistent returns.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 hover:shadow-luxury">
                
                {/* Image */}
                <div className="mb-8 overflow-hidden rounded-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-2xl font-serif font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-slate-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
