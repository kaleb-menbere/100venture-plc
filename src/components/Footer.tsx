import React from 'react';
export function Footer() {
  return <footer className="bg-brand-navy-900 text-slate-400 py-12 border-t border-brand-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/100_Vebture_Logo_(2).png" alt="Hundred Venture PLC" className="h-8 w-auto brightness-0 invert opacity-90" />
              <span className="font-serif font-bold text-xl text-white">
                Hundred Venture PLC
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Providing secure, passive income streams through conservative
              asset acquisition and equitable partnerships.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#approach" className="hover:text-brand-green-500 transition-colors">
                  Approach
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-brand-green-500 transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-green-500 transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-green-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand-green-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-green-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-green-500 transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-navy-800 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Hundred Venture PLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}