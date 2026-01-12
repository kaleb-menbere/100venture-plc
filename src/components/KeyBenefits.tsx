import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function KeyBenefits() {
  return (
    <section
      id="benefits"
      className="py-20 sm:py-28 lg:py-32 bg-[#e1f2e0] relative overflow-hidden"
    >
      {/* Luxury Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#299963 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Glows - adjusted for light background */}
      <div className="absolute top-1/4 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#299963]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#D3AF5E]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold mb-6 sm:mb-8 leading-tight text-gray-900">
              Why Partner With{' '}
              <span className="italic font-normal bg-gradient-to-r from-[#D3AF5E] to-[#299963] bg-clip-text text-transparent">
                Hundred Venture
              </span>
              ?
            </h2>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed font-light">
              We remove the primary barrier to entry for high-value asset acquisition: capital. Our unique model allows experienced operators and sponsors to scale without dilution from traditional debt.
            </p>

            <div className="space-y-4 sm:space-y-6">
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
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#299963] flex-shrink-0 mt-1 sm:mt-1.5" />
                  <span className="text-sm sm:text-base md:text-lg text-gray-800 font-light">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card - Darker Green */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-10 lg:mt-0"
          >
            {/* Darker green glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c6b4a]/40 to-[#0f3d29]/40 blur-3xl rounded-full" />

            <div className="relative bg-gradient-to-br from-[#1c6b4a] via-[#1f7a4d] to-[#0f3d29] border border-[#1c6b4a]/50 p-8 sm:p-12 rounded-3xl shadow-2xl">
              <div className="text-center mb-6 sm:mb-10">
                <p className="text-sm sm:text-base font-medium text-[#D3AF5E] uppercase tracking-widest mb-2 sm:mb-3">
                  The Partnership Model
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
                  Fair & Transparent
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-10">
                <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl flex-1 border border-white/20">
                  <div className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-1 sm:mb-2">
                    100%
                  </div>
                  <div className="text-sm sm:text-base text-white/90 tracking-wide">
                    Capital Provided
                  </div>
                </div>

                <div className="text-2xl sm:text-3xl font-serif text-[#D3AF5E] font-semibold">&</div>

                <div className="text-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl flex-1 border border-white/20">
                  <div className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-1 sm:mb-2">
                    50/50
                  </div>
                  <div className="text-sm sm:text-base text-white/90 tracking-wide">
                    Profit Split
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm sm:text-base md:text-lg text-white/90 italic font-light leading-relaxed">
                  "We bring the capital. You bring the opportunity and expertise. Together, we build lasting wealth."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}