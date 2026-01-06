import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Scale, Lock } from 'lucide-react';
export function InvestmentApproach() {
  const features = [{
    icon: Lock,
    title: 'Conservative Strategy',
    description: 'We prioritize capital preservation above all else. Our assets are selected for their stability and consistent performance over decades, not days.'
  }, {
    icon: TrendingUp,
    title: 'Long-Term Yield',
    description: 'We focus on assets that provide secure, passive income streams. We are not looking for quick flips; we are building generational wealth.'
  }, {
    icon: Scale,
    title: 'Equity Partnership',
    description: "We don't just lend money; we partner with you. By providing 100% of the capital, we align our success directly with yours through shared equity."
  }];
  return <section id="approach" className="py-32 bg-brand-navy-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
              A Disciplined Investment{' '}
              <span className="text-luxury italic font-normal">Philosophy</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              At Hundred Venture PLC, we believe in the power of tangible assets
              and conservative financial modeling. Our approach is designed to
              weather market volatility while delivering consistent returns.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2,
          duration: 0.8
        }} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 shadow-sm hover:shadow-luxury transition-all duration-500 backdrop-blur-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}