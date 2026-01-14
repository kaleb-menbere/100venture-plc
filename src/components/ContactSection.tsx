import { Button } from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0800] via-[#1a1608] to-[#0a0800]">
      {/* Luxurious gold metallic background */}
      <div className="absolute inset-0">
        {/* Base gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2400] via-[#1a1600] to-[#2a2400]"></div>
        
        {/* Gold metallic texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-[#f7ef8a]/5 to-[#d4af37]/10"></div>
        
        {/* Gold light beams */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f7ef8a]/20 via-[#f7ef8a]/10 to-transparent"></div>
        
        {/* Gold particles and sparkles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d4af37] animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f7ef8a] animate-ping delay-300"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#d4af37] animate-ping delay-700"></div>
        </div>
        
        {/* Subtle diagonal pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 49%, #d4af37 49%, #d4af37 51%, transparent 51%)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-shimmer bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            {/* Decorative header */}
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-6">
              <div className="h-px w-6 md:w-8 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
              <span className="mx-2 md:mx-3 text-xs md:text-sm font-semibold tracking-wider text-[#d4af37] uppercase">
                Get In Touch
              </span>
              <div className="h-px w-6 md:w-8 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            </div>

            <h2 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 md:mb-6 leading-tight">
              Start a{' '}
              <span className="relative">
                <span className="relative z-10 italic font-normal bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent">
                  Conversation
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] opacity-30 blur-xl"></span>
              </span>
            </h2>
            
            <p className="text-center md:text-left text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-12 font-light leading-relaxed">
              We are always looking for new partners with high-quality investment opportunities. Reach out to discuss your proposal or learn more about our equity model.
            </p>

            {/* Contact methods */}
            <div className="space-y-6 md:space-y-8">
              {[
                { 
                  icon: Mail, 
                  label: 'Email Us', 
                  value: 'support@100venture.et',
                  gradient: 'from-[#d4af37] via-[#f7ef8a] to-[#d4af37]'
                },
                { 
                  icon: Phone, 
                  label: 'Call Us', 
                  value: '+44 (0) 20 7123 4567',
                  gradient: 'from-[#f7ef8a] via-[#d4af37] to-[#f7ef8a]'
                },
                { 
                  icon: MapPin, 
                  label: 'Visit Us', 
                  value: 'Atlas, Addis Ababa, Ethiopia',
                  gradient: 'from-[#d4af37] via-[#f7ef8a] to-[#d4af37]'
                },
              ].map((contact, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 md:gap-5 transition-all duration-300 group-hover:translate-x-1 md:group-hover:translate-x-2">
                    {/* Gradient Icon Card - Gold */}
                    <div className="relative">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${contact.gradient} rounded-lg md:rounded-xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                      <div className={`relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg bg-gradient-to-br ${contact.gradient}`}>
                        <contact.icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Contact details */}
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-white mb-1 md:mb-2 text-base md:text-lg">
                        {contact.label}
                      </h3>
                      <p className="text-gray-300 font-light whitespace-pre-line text-sm md:text-base">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#d4af37]/20">
              <p className="text-xs md:text-sm text-[#d4af37]/70 font-medium tracking-wider">
                CONNECT WITH OUR TEAM TODAY
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            {/* Form Glow Effect - Gold */}
            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-[#d4af37]/20 to-[#f7ef8a]/10 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Form Card */}
            <div className="relative group">
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-br from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-2xl md:rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main Form Container */}
              <div className="relative bg-gradient-to-br from-[#1a1406] via-[#0f0c03] to-[#1a1406] p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-[#d4af37]/20 shadow-xl md:shadow-2xl backdrop-blur-sm">
                
                {/* Corner accents */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 h-4 w-4 md:h-6 md:w-6 border-t border-l border-[#d4af37]/30 rounded-tl-lg"></div>
                <div className="absolute top-3 right-3 md:top-4 md:right-4 h-4 w-4 md:h-6 md:w-6 border-t border-r border-[#d4af37]/30 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 h-4 w-4 md:h-6 md:w-6 border-b border-l border-[#d4af37]/30 rounded-bl-lg"></div>
                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 h-4 w-4 md:h-6 md:w-6 border-b border-r border-[#d4af37]/30 rounded-br-lg"></div>
                
                {/* Shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7ef8a] to-transparent"></div>

                {/* Form Header */}
                <div className="mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-white mb-2 md:mb-3">
                    Partner Inquiry
                  </h3>
                  <p className="text-gray-300 font-light text-sm md:text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-[#d4af37]/30 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] outline-none transition-all font-light backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-[#d4af37]/30 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] outline-none transition-all font-light backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-[#d4af37]/30 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] outline-none transition-all font-light backdrop-blur-sm"
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Your Company Ltd"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-[#d4af37]/30 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] outline-none transition-all font-light backdrop-blur-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                      Proposal / Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your investment opportunity..."
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-[#d4af37]/30 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] outline-none transition-all font-light backdrop-blur-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="relative group/btn">
                    <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] rounded-lg md:rounded-xl blur opacity-40 group-hover/btn:opacity-60 transition-all duration-300"></div>
                    <Button 
                      type="submit" 
                      className="relative w-full bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] text-gray-900 hover:brightness-110 hover:shadow-xl border-0 shadow-lg transition-all duration-300 font-semibold text-sm md:text-base py-3 md:py-4"
                    >
                      Send Inquiry
                    </Button>
                  </div>

                  {/* Privacy Note */}
                  <p className="text-center text-xs md:text-sm text-gray-400 font-light pt-2">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation for shimmer effect */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%) translateY(-100%) rotate(30deg);
            }
            100% {
              transform: translateX(100%) translateY(100%) rotate(30deg);
            }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite linear;
          }
        `}
      </style>
    </section>
  );
}