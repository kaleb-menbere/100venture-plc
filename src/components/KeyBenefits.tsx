import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function KeyBenefits() {
  return (
    <section
      id="benefits"
      className="py-32 bg-brand-navy-950 text-white relative overflow-hidden"
    >
      {/* Luxury Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#299963 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#299963]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#D3AF5E]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-semibold mb-8 leading-tight">
              Why Partner With{' '}
              <span className="italic font-normal text-[#D3AF5E]">
                Hundred Venture
              </span>
              ?
            </h2>

            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
              We remove the primary barrier to entry for high-value asset
              acquisition: capital. Our unique model allows experienced
              operators and sponsors to scale without dilution from traditional
              debt.
            </p>

            <div className="space-y-6">
              {[
                '100% Purchase Price Funding - No capital required from partners',
                '50% Profit Sharing - Equal split of net operating income',
                '50% Ownership - True equity partnership from day one',
                'Secure Asset Backing - Investments secured by real assets',
                'Passive Income Focus - Built for long-term cash flow',
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#299963] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg text-slate-300 font-light">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D3AF5E]/20 to-[#299963]/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 p-12 rounded-3xl shadow-luxury-lg backdrop-blur-sm">
              <div className="text-center mb-10">
                <p className="text-sm font-medium text-[#D3AF5E] uppercase tracking-widest mb-3">
                  The Partnership Model
                </p>
                <h3 className="text-3xl font-serif font-semibold">
                  Fair & Transparent
                </h3>
              </div>

              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="text-center p-6 bg-white/5 rounded-2xl flex-1 border border-white/10">
                  <div className="text-4xl font-serif font-semibold text-[#299963] mb-2">
                    100%
                  </div>
                  <div className="text-sm text-slate-400 tracking-wide">
                    Capital Provided
                  </div>
                </div>

                <div className="text-3xl font-serif text-[#D3AF5E]">&</div>

                <div className="text-center p-6 bg-white/5 rounded-2xl flex-1 border border-white/10">
                  <div className="text-4xl font-serif font-semibold text-white mb-2">
                    50/50
                  </div>
                  <div className="text-sm text-slate-400 tracking-wide">
                    Profit Split
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-slate-300 italic font-light text-lg leading-relaxed">
                  "We bring the capital. You bring the opportunity and
                  expertise. Together, we build lasting wealth."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
