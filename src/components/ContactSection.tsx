import { Button } from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-brand-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-8 leading-tight">
              Start a{' '}
             <span
              className="
                italic font-normal
                bg-gradient-to-r from-[#D3AF5E] to-[#299963]
                bg-clip-text text-transparent
              "
            >
              Conversation
            </span>

            </h2>
            <p className="text-xl text-slate-400 mb-16 font-light leading-relaxed">
              We are always looking for new partners with high-quality
              investment opportunities. Reach out to discuss your proposal or
              learn more about our equity model.
            </p>

            <div className="space-y-10">
              {[
                { icon: Mail, label: 'Email Us', value: 'partnerships@hundredventure.plc' },
                { icon: Phone, label: 'Call Us', value: '+44 (0) 20 7123 4567' },
                { icon: MapPin, label: 'Visit Us', value: '100 Venture Plaza, Financial District\nLondon, UK' },
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D3AF5E] to-[#299963] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-white mb-2 text-lg">
                      {contact.label}
                    </h3>
                    <p className="text-slate-400 font-light whitespace-pre-line">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-luxury-lg backdrop-blur-sm">
            <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#299963] focus:border-transparent outline-none transition-all font-light backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#299963] focus:border-transparent outline-none transition-all font-light backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@company.com"
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#299963] focus:border-transparent outline-none transition-all font-light backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-3">
                  Proposal / Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your investment opportunity..."
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:ring-2 focus:ring-[#299963] focus:border-transparent outline-none transition-all font-light resize-none backdrop-blur-sm"
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
