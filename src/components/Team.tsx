import { motion } from 'framer-motion'; 
import { useState } from 'react';
import { ChevronDown, ChevronUp, Building, Globe, Award, Users, Target, Briefcase, Star } from 'lucide-react';

export function Team() { 
  const teamMembers = [
    {
      name: 'H.H. SHAIKH KHALID BIN MOHAMMED BIN SALMAN AL KHALIFA',
      title: 'CHAIRMAN',
      image: '/excellence.jpeg',
      founded: '2024',
      projects: '250+',
      tagline: 'Our team\'s illustrious track record bears testament to our acumen in identifying & nurturing nascent enterprises.',
      description: 'From providing seed funding to fueling growth stage ventures, we offer indispensable equity capital and unwavering support, facilitating the evolution into flourishing businesses. We specialize in empowering clients with unparalleled competency, extensive experience, & cutting-edge tools to define & implement robust data strategies. The discerning insights & services of excellence that we deliver contribute to the cultivation of trust and confidence in the global capital markets and economies.',
      stats: [
        { icon: Building, label: '100 GLOBAL HOLDING' },
        { icon: Globe, label: 'International Reach' },
        { icon: Award, label: 'Industry Excellence' },
      ],
      expanded: false
    },
    {
      name: 'H.E. CHAUDHARY IBRAR AZIZ',
      title: 'VICE CHAIRMAN',
      image: '/VICECHAIRMAN.jpeg',
      founded: '',
      projects: '',
      tagline: 'A visionary global leader with significant international experience in a wide variety of public relations and business development roles.',
      description: `Political Advisory services for governments and members of royal families, Investment Management for Small, Medium and Corporate Enterprises, Investment Advisory services for mega investment projects as well as Special Advisor on Internal and Foreign Affairs. Mr. Aziz is a staunch advocate of free trade and development especially for the underdeveloped nations and is a firm believer of the human values of diversity, equity and inclusion. He brings a wide range of competencies to the table, including public relations management, diplomatic services, and investment management.
      
Equity Capital Markets professional with extensive experience developing and managing relationships with senior-level and institutional investors in diverse industries, including Energy, sovereign Infrastructure, public relations and Communications. Proven track record successfully working with clientele to develop and implement equity capital-raising requirements, such as a New Issues, Initial Public Offerings (IPOs), Follow On Offerings, and Special Warrants. Strong corporate finance background. Keen business sense, with demonstrated ability to thrive in fast-paced, deadline-oriented environments.`,
      stats: [
        { icon: Users, label: 'Diplomatic Relations' },
        { icon: Target, label: 'Strategic Investments' },
        { icon: Briefcase, label: 'Corporate Advisory' },
      ],
      projectsList: [
        'Supported Oldest construction company founded in 1865',
        'Structured Motorway project in Pakistan in collaboration with International companies',
        'Provided exec support to construction companies to enter the Middle East in 1970s',
        'Providing diplomatic support to 4 countries for investments and sovereign project support',
        '25+ Automobile manufacturing units in Egypt',
        '318mW of operational solar projects across middle east',
        '50mW of operational solar project in Egypt',
        'Advisory support to royal families within the Middle East',
        'Supporting projects in Middle east with financial securities',
        '5.5 Acres of luxury residential development in Pakistan',
        '10,000 acres housing project in Karachi'
      ],
      expanded: false
    }
  ];

  const [members, setMembers] = useState(teamMembers);

  const toggleExpand = (index: number) => {
    const updatedMembers = [...members];
    updatedMembers[index].expanded = !updatedMembers[index].expanded;
    setMembers(updatedMembers);
  };

  return ( 
    <section id="team" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-[#0a0800] via-[#1a1608] to-[#0a0800]">
      {/* Luxurious gold metallic background */}
      <div className="absolute inset-0">
        {/* Base gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2400] via-[#1a1600] to-[#2a2400]"></div>
        
        {/* Gold metallic texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-[#f7ef8a]/5 to-[#d4af37]/10"></div>
        
        {/* Gold light beams */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#d4af37]/20 via-[#d4af37]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f7ef8a]/20 via-[#f7ef8a]/10 to-transparent"></div>
        
        {/* Gold particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d4af37] animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f7ef8a] animate-ping delay-300"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#d4af37] animate-ping delay-700"></div>
        </div>
        
        {/* Subtle pattern */}
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-12 md:mb-20" 
        > 
          <div className="inline-flex items-center justify-center mb-4 md:mb-6">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            <span className="mx-3 md:mx-4 text-xs md:text-sm font-semibold tracking-wider text-[#d4af37] uppercase">
              Executive Leadership
            </span>
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4 md:mb-6 leading-tight"> 
            Executive{' '}
            <span className="relative">
              <span className="relative z-10 italic font-normal bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent"> 
                Leadership 
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] opacity-30 blur-xl"></span>
            </span>
          </h2> 
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light"> 
            Decades of combined experience in conservative asset management and strategic partnerships. 
          </p> 
          
          {/* Decorative line */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>
        </motion.div> 

        {/* Team Members */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {members.map((member, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: -20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: index * 0.2 }} 
              className="w-full"
            > 
              <div className="relative group"> 
                {/* Card Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#d4af37]/30 to-[#f7ef8a]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-[#1a1406] via-[#0f0c03] to-[#1a1406] rounded-2xl border border-[#d4af37]/30 p-6 md:p-8 lg:p-10 backdrop-blur-sm overflow-hidden">
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${index === 0 ? 'from-[#d4af37] via-[#f7ef8a] to-[#d4af37]' : 'from-[#f7ef8a] via-[#d4af37] to-[#f7ef8a]'}`} />
                  
                  <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
                    {/* Image Container */}
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#d4af37]/30 to-[#f7ef8a]/20 rounded-full blur-lg" />
                      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-[#d4af37]/50 shadow-xl">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        {/* Gold overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent"></div>
                      </div>
                      
                      {/* Decorative circles */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full border border-[#d4af37]/30"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full border border-[#d4af37]/30"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-white mb-2 leading-tight"> 
                        {member.name} 
                      </h3> 
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#d4af37]/10 to-[#f7ef8a]/10 mb-6">
                        <span className="text-base md:text-lg font-bold bg-gradient-to-r from-[#d4af37] via-[#f7ef8a] to-[#d4af37] bg-clip-text text-transparent tracking-widest"> 
                          {member.title} 
                        </span>
                      </div>
                      
                      {/* Stats Section */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {member.founded && (
                          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-[#d4af37]/20">
                            <div className="text-2xl md:text-3xl font-serif font-semibold text-white mb-1">
                              {member.founded}
                            </div>
                            <div className="text-xs md:text-sm text-gray-300 font-light uppercase tracking-wider">
                              FOUNDED
                            </div>
                          </div>
                        )}
                        
                        {member.projects && (
                          <div className="text-center p-3 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-[#d4af37]/20">
                            <div className="text-2xl md:text-3xl font-serif font-semibold text-white mb-1">
                              {member.projects}
                            </div>
                            <div className="text-xs md:text-sm text-gray-300 font-light uppercase tracking-wider">
                              BIG PROJECTS
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Tagline */}
                      <p className="text-sm md:text-base text-gray-300 font-light mb-6 leading-relaxed">
                        {member.tagline}
                      </p>
                      
                      {/* View More Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37]/10 to-[#f7ef8a]/10 border border-[#d4af37]/30 text-white hover:text-[#f7ef8a] hover:bg-gradient-to-r hover:from-[#d4af37]/20 hover:to-[#f7ef8a]/20 transition-all duration-300 font-medium"
                      >
                        {member.expanded ? 'View Less' : 'View More'}
                        {member.expanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </motion.button>
                    </div> 
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-[#d4af37]/30 rounded-tl-lg"></div>
                  <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-[#d4af37]/30 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-[#d4af37]/30 rounded-bl-lg"></div>
                  <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#d4af37]/30 rounded-br-lg"></div>
                </div>
                
                {/* Expanded Content */}
                {member.expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative mt-4"
                  >
                    {/* Content Card */}
                    <div className="relative bg-gradient-to-br from-[#1a1608] via-[#0f0c03] to-[#1a1608] rounded-2xl border border-[#d4af37]/30 p-6 md:p-8 backdrop-blur-sm overflow-hidden">
                      {/* Corner accents */}
                      <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-[#d4af37]/30 rounded-tl-lg"></div>
                      <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-[#d4af37]/30 rounded-tr-lg"></div>
                      <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-[#d4af37]/30 rounded-bl-lg"></div>
                      <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#d4af37]/30 rounded-br-lg"></div>
                      
                      {/* Full Description */}
                      <div className="mb-8">
                        <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed whitespace-pre-line">
                          {member.description}
                        </p>
                      </div>
                      
                      {/* Stats Section */}
                      {member.stats && member.stats.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-lg font-serif font-semibold text-white mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-[#d4af37]" />
                            Key Strengths
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {member.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-[#d4af37]/20">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#f7ef8a]">
                                  <stat.icon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-white">{stat.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                    </div>
                  </motion.div>
                )}
              </div> 
            </motion.div> 
          ))}
        </div>

        {/* Decorative Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-12 md:mt-20"
        >
          <div className="inline-flex items-center gap-3 md:gap-4">
            <div className="h-px w-6 md:w-8 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#d4af37]"></div>
            <div className="h-px w-6 md:w-8 bg-gradient-to-l from-[#d4af37] to-transparent"></div>
          </div>
          
          <div className="mt-4 md:mt-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37]/10 to-[#f7ef8a]/10 backdrop-blur-sm border border-[#d4af37]/30">
              <span className="text-sm md:text-base text-white/90 font-medium">
                A Leadership Team Committed to Conservative Growth
              </span>
            </div>
          </div>
        </motion.div>
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