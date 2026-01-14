export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a0800] via-[#1a1608] to-[#0a0800] py-12 md:py-16 border-t border-[#d4af37]/20">
      {/* Gold metallic background */}
      <div className="absolute inset-0">
        {/* Base gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2400] via-[#1a1600] to-[#2a2400]"></div>
        
        {/* Gold metallic texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-[#f7ef8a]/3 to-[#d4af37]/5"></div>
        
        {/* Gold light beams */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#d4af37]/10 via-[#d4af37]/5 to-transparent"></div>
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 49%, #d4af37 49%, #d4af37 51%, transparent 51%)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 items-start">
          
          {/* Brand / Description */}
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#f7ef8a] rounded-full blur opacity-20"></div>
                <img
                  src="/100_Vebture_Logo_(2).png"
                  alt="Hundred Venture PLC"
                  className="relative h-10 md:h-12 w-auto"
                />
              </div>
              <span className="font-serif font-bold text-xl md:text-2xl text-white">
                Hundred Venture PLC
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-300 font-light">
              Providing secure, passive income streams through conservative
              asset acquisition and equitable partnerships.
            </p>
            
            {/* Gold decorative line */}
            <div className="mt-4 md:mt-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>
          </div>

          {/* Big Logo Only */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37]/20 to-[#f7ef8a]/10 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Logo with gradient overlay */}
              <div className="relative">
                <img
                  src="/100_Vebture_Logo.png"
                  alt="Hundred Venture PLC Logo"
                  className="relative h-50 md:h-40 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
                {/* Gold gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 via-[#d4af37]/5 to-[#f7ef8a]/0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative circles */}
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full border border-[#d4af37]/30"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border border-[#d4af37]/30"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full border border-[#d4af37]/30"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-[#d4af37]/30"></div>
            </div>
          </div>
        </div>

        {/* Gold separator */}
        <div className="relative py-4 md:py-8">
          {/* Main separator line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
          
          {/* Decorative dots */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#f7ef8a]/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40"></div>
          </div>
        </div>

        {/* Bottom - Centered */}
        <div className="pt-4 md:pt-6 text-center">
          <div className="inline-flex flex-col items-center space-y-2 md:space-y-3">
            {/* Copyright */}
            <p className="text-xs md:text-sm text-gray-400 font-light">
              &copy; {new Date().getFullYear()} Hundred Venture PLC. All rights
              reserved.
            </p>
            
            {/* Tagline */}
            <p className="text-xs text-[#d4af37]/60 tracking-wider uppercase">
              ELEVATING INVESTMENTS THROUGH DISCIPLINED EXCELLENCE
            </p>
            
            {/* Contact info */}
            <p className="text-xs text-gray-500 font-light">
              support@100venture.et | +44 (0) 20 7123 4567
            </p>
          </div>
          
          {/* Decorative bottom line */}
          <div className="mt-6 flex justify-center">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}