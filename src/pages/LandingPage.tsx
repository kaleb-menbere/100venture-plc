import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { InvestmentApproach } from '../components/InvestmentApproach';
import { KeyBenefits } from '../components/KeyBenefits';
import { Process } from '../components/Process';
import { Team } from '../components/Team';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return <div className="min-h-screen bg-brand-navy-950 text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <InvestmentApproach />
        <KeyBenefits />
        <Process />
        <Team />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}