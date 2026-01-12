export function Footer() {
  return (
    <footer className="bg-[#e1f2e0] text-gray-700 py-12 border-t border-gray-300/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
          
          {/* Brand / Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/100_Vebture_Logo.png"
                alt="Hundred Venture PLC"
                className="h-12 w-auto"
              />
              <span className="font-serif font-bold text-2xl text-gray-900">
                Hundred Venture PLC
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Providing secure, passive income streams through conservative
              asset acquisition and equitable partnerships.
            </p>
          </div>

          {/* Big Logo Only */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Logo.png"
              alt="Hundred Venture PLC Logo"
              className="h-32 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-300/50 text-center text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Hundred Venture PLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}