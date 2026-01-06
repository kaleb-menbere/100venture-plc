import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, Handshake, Building2, Banknote } from 'lucide-react';
export function Process() {
  const steps = [{
    icon: FileSearch,
    title: 'Opportunity Identification',
    description: 'Partners bring us vetted, high-potential asset acquisition opportunities that meet our conservative criteria.'
  }, {
    icon: Handshake,
    title: 'Due Diligence & Agreement',
    description: 'We conduct thorough analysis. Upon approval, we structure a partnership agreement with clear 50/50 terms.'
  }, {
    icon: Building2,
    title: 'Acquisition & Funding',
    description: 'Hundred Venture PLC provides 100% of the required capital to close the transaction securely.'
  }, {
    icon: Banknote,
    title: 'Management & Profit Share',
    description: "Partners manage the asset's performance, and profits are distributed equally on a recurring basis."
  }];
  return <section id="process" className="py-32 bg-brand-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      }} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
            How We Work{' '}
            <span className="text-luxury italic font-normal">Together</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            A streamlined path from opportunity to ownership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Luxury Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => <motion.div key={index} initial={{
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
                <div className="relative bg-white/5 p-8 rounded-2xl shadow-sm border border-white/10 hover:border-emerald-500/30 hover:shadow-luxury transition-all duration-500 backdrop-blur-sm">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed text-center font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}