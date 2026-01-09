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
      gradient: 'from-[#299963]/20 to-[#299963]/40',
      border: 'hover:border-[#299963]/40',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Yield',
      description:
        'We focus on assets that provide secure, passive income streams. We are not looking for quick flips; we are building generational wealth.',
      image: '/p2.jpeg',
      gradient: 'from-[#D3AF5E]/20 to-[#D3AF5E]/40',
      border: 'hover:border-[#D3AF5E]/40',
    },
    {
      icon: Scale,
      title: 'Equity Partnership',
      description:
        "We don't just lend money; we partner with you. By providing 100% of the capital, we align our success directly with yours through shared equity.",
      image: '/p4.jpeg',
      gradient: 'from-[#299963]/20 to-[#299963]/40',
      border: 'hover:border-[#299963]/40',
    },
  ];

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-brand-navy-900 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-5xl md:text-6xl font-serif font-semibold text-white">
              A Disciplined Investment{' '}
              <span className="italic font-normal text-[#D3AF5E]">
                Philosophy
              </span>
            </h2>
            <p className="text-xl text-slate-400 font-light">
              At Hundred Venture PLC, we believe in tangible assets and
              conservative financial modeling that delivers consistent returns.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative h-full"
            >
              <div
                className={`relative flex h-full min-h-[420px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br ${feature.gradient} p-8 backdrop-blur-sm transition-all duration-500 ${feature.border}`}
              >
                {/* TEXT CONTENT */}
                <div className="transition-opacity duration-500 group-hover:opacity-0">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 shadow-lg">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-4 text-2xl font-serif font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-slate-300 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* IMAGE (HOVER) */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-black/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
