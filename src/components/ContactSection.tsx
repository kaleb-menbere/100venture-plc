import React from 'react';
import { Button } from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-32 bg-brand-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-8 leading-tight">
              Start a{' '}
              <span className="text-luxury italic font-normal">
                Conversation
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-16 font-light leading-relaxed">
              We are always looking for new partners with high-quality
              investment opportunities. Reach out to discuss your proposal or
              learn more about our equity model.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-white mb-2 text-lg">
                    Email Us
                  </h3>
                  <p className="text-slate-400 font-light">
                    partnerships@hundredventure.plc
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-white mb-2 text-lg">
                    Call Us
                  </h3>
                  <p className="text-slate-400 font-light">
                    +44 (0) 20 7123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-white mb-2 text-lg">
                    Visit Us
                  </h3>
                  <p className="text-slate-400 font-light">
                    100 Venture Plaza, Financial District
                    <br />
                    London, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-luxury-lg backdrop-blur-sm">
            <form className="space-y-7" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-3">
                    First Name
                  </label>
                  <input type="text" id="firstName" className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all font-light backdrop-blur-sm" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-3">
                    Last Name
                  </label>
                  <input type="text" id="lastName" className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all font-light backdrop-blur-sm" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3">
                  Email Address
                </label>
                <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all font-light backdrop-blur-sm" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3">
                  Proposal / Message
                </label>
                <textarea id="message" rows={5} className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all font-light resize-none backdrop-blur-sm" placeholder="Tell us about your investment opportunity..."></textarea>
              </div>

              <Button type="submit" variant="secondary" className="w-full">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}