import { Button } from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#e1f2e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Start a{' '}
              <span className="italic font-normal bg-gradient-to-r from-[#D3AF5E] to-[#299963] bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-12 sm:mb-16 font-light leading-relaxed">
              We are always looking for new partners with high-quality
              investment opportunities. Reach out to discuss your proposal or
              learn more about our equity model.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'partnerships@hundredventure.plc' },
                { icon: Phone, label: 'Call Us', value: '+44 (0) 20 7123 4567' },
                { icon: MapPin, label: 'Visit Us', value: '100 Venture Plaza, Financial District\nLondon, UK' },
              ].map((contact, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 sm:gap-5 transition-transform duration-300 group-hover:translate-x-2">
                    {/* Gradient Icon Card - Green to Gold */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#299963] to-[#D3AF5E] rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg bg-gradient-to-br from-[#299963] via-[#2ba466] to-[#D3AF5E]">
                        <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                        {contact.label}
                      </h3>
                      <p className="text-gray-800 font-light whitespace-pre-line text-sm sm:text-base">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            {/* Form Glow Effect - Green to Gold */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#299963]/20 via-[#2ba466]/10 to-[#D3AF5E]/20 rounded-3xl blur-xl opacity-60" />
            
            {/* Gradient Border Card - Green to Gold */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#299963] via-[#2ba466] to-[#D3AF5E] rounded-3xl blur-sm opacity-30" />
              <div className="relative bg-white p-6 sm:p-8 md:p-10 rounded-3xl border-0 shadow-2xl backdrop-blur-sm">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-gray-900 mb-3">
                    Partner Inquiry
                  </h3>
                  <p className="text-gray-600 font-light">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#299963]/30 focus:border-[#299963] outline-none transition-all font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#299963]/30 focus:border-[#299963] outline-none transition-all font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#299963]/30 focus:border-[#299963] outline-none transition-all font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Your Company Ltd"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#299963]/30 focus:border-[#299963] outline-none transition-all font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Proposal / Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your investment opportunity..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#299963]/30 focus:border-[#299963] outline-none transition-all font-light resize-none"
                    />
                  </div>

                  {/* Gradient Button - Green to Gold */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#299963] via-[#2ba466] to-[#D3AF5E] rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-all duration-300" />
                    <Button 
                      type="submit" 
                      className="relative w-full bg-gradient-to-r from-[#299963] via-[#2ba466] to-[#D3AF5E] text-white hover:brightness-110 hover:shadow-xl border-0 shadow-lg transition-all duration-300 font-medium text-base py-3"
                    >
                      Send Inquiry
                    </Button>
                  </div>

                  <p className="text-center text-sm text-gray-500 font-light">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}