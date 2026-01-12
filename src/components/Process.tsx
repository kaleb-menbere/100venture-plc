import { motion } from 'framer-motion';
import { FileSearch, Handshake, Building2, Banknote } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: FileSearch,
      title: 'Opportunity Identification',
      description:
        'Partners bring us vetted, high-potential asset acquisition opportunities that meet our conservative criteria.',
      bg: 'from-[#353434] to-[#353434]/80',
      hoverBg: 'from-[#2a2a2a] to-[#2a2a2a]/80',
    },
    {
      icon: Handshake,
      title: 'Due Diligence & Agreement',
      description:
        'We conduct thorough analysis. Upon approval, we structure a partnership agreement with clear 50/50 terms.',
      bg: 'from-[#0b553d] to-[#0b553d]/80',
      hoverBg: 'from-[#084431] to-[#084431]/80',
    },
    {
      icon: Building2,
      title: 'Acquisition & Funding',
      description:
        'Hundred Venture PLC provides 100% of the required capital to close the transaction securely.',
      bg: 'from-[#299963] to-[#299963]/80',
      hoverBg: 'from-[#1f7a4e] to-[#1f7a4e]/80',
    },
    {
      icon: Banknote,
      title: 'Management & Profit Share',
      description:
        "Partners manage the asset's performance, and profits are distributed equally on a recurring basis.",
      bg: 'from-[#bf9000] to-[#bf9000]/80',
      hoverBg: 'from-[#9f7700] to-[#9f7700]/80',
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#e1f2e0] py-24 sm:py-28 lg:py-32"
    >
      {/* Background Accent */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[#bf9000]/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 text-5xl md:text-6xl font-serif font-semibold text-black leading-tight">
            How We Work{' '}
            <span
  className="
    italic font-normal
    bg-gradient-to-r from-[#D3AF5E] to-[#299963]
    bg-clip-text text-transparent
  "
>
  Together
</span>

          </h2>
          <p className="mx-auto max-w-2xl text-xl text-slate-400 font-light">
            A streamlined path from opportunity to ownership.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group"
            >
              <div
                className={`
                  relative h-full rounded-2xl p-8 shadow-xl transition-all duration-500
                  bg-gradient-to-br ${step.bg}
                  hover:bg-gradient-to-br ${step.hoverBg}
                  group-hover:-translate-y-2
                  group-hover:shadow-2xl
                `}
              >
                {/* Icon */}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm shadow-lg transition-transform duration-500 group-hover:scale-110">
                  <step.icon className="h-9 w-9 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-center text-xl font-serif font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-center text-sm leading-relaxed text-white/90 font-light">
                  {step.description}
                </p>

                {/* Inner Border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}