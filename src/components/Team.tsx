import { motion } from 'framer-motion'; 
import { Linkedin } from 'lucide-react'; 

export function Team() { 
  const teamMembers = [
    {
      name: 'H.H. SHAIKH KHALID BIN MOHAMMED BIN SALMAN AL KHALIFA',
      title: 'CHAIRMAN',
      image: '/excellence.jpeg',
      linkedin: '#',
      row: 1,
    },
    {
      name: 'H.E. CHAUDHARY IBRAR AZIZ',
      title: 'VICE CHAIRMAN',
      image: '/VICECHAIRMAN.jpeg',
      linkedin: '#',
      row: 2,
    },
    { 
      name: 'MR. FLIPOS MOBA', 
      title: 'INVESTMENT ADVISOR', 
      image: '/fill.jpg', 
      linkedin: '#',
      row: 3,
    }
  ]; 

  // Group members by row
  const row1Members = teamMembers.filter(member => member.row === 1);
  const row2Members = teamMembers.filter(member => member.row === 2);
  const row3Members = teamMembers.filter(member => member.row === 3);

  return ( 
    <section id="team" className="py-24 sm:py-32 bg-[#e1f2e0] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#eecf94]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#003c2c]/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> 
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16" 
        > 
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-gray-900 mb-6 leading-tight"> 
            Leadership{' '}
            <span className="italic font-normal bg-gradient-to-r from-[#D3AF5E] to-[#299963] bg-clip-text text-transparent"> 
              Team 
            </span> 
          </h2> 
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light"> 
            Decades of combined experience in conservative asset management and strategic partnerships. 
          </p> 
        </motion.div> 

        {/* Row 1: Chairman (Single, Centered) */}
        <div className="flex justify-center mb-20">
          {row1Members.map((leader, index) => ( 
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: -20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }} 
              className="w-full max-w-2xl"
            > 
              <div className="relative group"> 
                {/* Card Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#003c2c]/20 to-[#eecf94]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-10 backdrop-blur-sm overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#003c2c] via-[#eecf94] to-[#003c2c]" />
                  
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Image Container */}
                    <div className="relative">
                      <div className="absolute -ins-2 bg-gradient-to-br from-[#003c2c]/20 to-[#eecf94]/20 rounded-full blur-lg" />
                      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-gray-900 mb-2 leading-tight"> 
                        {leader.name} 
                      </h3> 
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#003c2c]/10 to-[#eecf94]/10 mb-4">
                        <span className="text-lg font-bold text-[#003c2c] tracking-widest"> 
                          {leader.title} 
                        </span>
                      </div>
                      
                      {/* LinkedIn Button */}
                      <motion.a 
                        href={leader.linkedin} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#003c2c]/10 to-[#eecf94]/10 border border-[#003c2c]/30 text-gray-700 hover:text-[#003c2c] hover:bg-gradient-to-r hover:from-[#003c2c]/20 hover:to-[#eecf94]/20 transition-all" 
                        aria-label={`${leader.name} LinkedIn`} 
                      > 
                        <Linkedin className="w-5 h-5" /> 
                        <span className="font-medium">Connect on LinkedIn</span>
                      </motion.a> 
                    </div> 
                  </div>
                </div> 
              </div> 
            </motion.div> 
          ))} 
        </div>

        {/* Row 2: Vice Chairman (Single, Centered) */}
        <div className="flex justify-center mb-20">
          {row2Members.map((viceChairman, index) => ( 
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: -20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="w-full max-w-2xl"
            > 
              <div className="relative group"> 
                <div className="absolute -inset-4 bg-gradient-to-br from-[#eecf94]/20 to-[#003c2c]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 backdrop-blur-sm overflow-hidden">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Image Container */}
                    <div className="relative order-2 lg:order-1">
                      <div className="absolute -ins-2 bg-gradient-to-br from-[#eecf94]/20 to-[#003c2c]/20 rounded-full blur-lg" />
                      <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={viceChairman.image} 
                          alt={viceChairman.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-right order-1 lg:order-2">
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-gray-900 mb-2 leading-tight"> 
                        {viceChairman.name} 
                      </h3> 
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#eecf94]/10 to-[#003c2c]/10 mb-4">
                        <span className="text-lg font-bold text-[#eecf94] tracking-widest"> 
                          {viceChairman.title} 
                        </span>
                      </div>

                      
                      <motion.a 
                        href={viceChairman.linkedin} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#eecf94]/10 to-[#003c2c]/10 border border-[#eecf94]/30 text-gray-700 hover:text-[#eecf94] hover:bg-gradient-to-r hover:from-[#eecf94]/20 hover:to-[#003c2c]/20 transition-all" 
                        aria-label={`${viceChairman.name} LinkedIn`} 
                      > 
                        <Linkedin className="w-5 h-5" /> 
                        <span className="font-medium">Connect on LinkedIn</span>
                      </motion.a> 
                    </div> 
                  </div>
                </div> 
              </div> 
            </motion.div> 
          ))} 
        </div>

        {/* Row 3: Flipos Moba (Investment Advisor) - Same style as Chairman and Vice Chairman */}
        <div className="flex justify-center">
          {row3Members.map((advisor, index) => ( 
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: -20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="w-full max-w-2xl"
            > 
              <div className="relative group"> 
                {/* Card Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#003c2c]/20 to-[#eecf94]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 backdrop-blur-sm overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#003c2c] via-[#eecf94] to-[#003c2c]" />
                  
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Image Container */}
                    <div className="relative">
                      <div className="absolute -ins-2 bg-gradient-to-br from-[#003c2c]/20 to-[#eecf94]/20 rounded-full blur-lg" />
                      <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={advisor.image} 
                          alt={advisor.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-gray-900 mb-2 leading-tight"> 
                        {advisor.name} 
                      </h3> 
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#003c2c]/10 to-[#eecf94]/10 mb-4">
                        <span className="text-lg font-bold text-[#003c2c] tracking-widest"> 
                          {advisor.title} 
                        </span>
                      </div>
                      
                      {/* LinkedIn Button */}
                      <motion.a 
                        href={advisor.linkedin} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#003c2c]/10 to-[#eecf94]/10 border border-[#003c2c]/30 text-gray-700 hover:text-[#003c2c] hover:bg-gradient-to-r hover:from-[#003c2c]/20 hover:to-[#eecf94]/20 transition-all" 
                        aria-label={`${advisor.name} LinkedIn`} 
                      > 
                        <Linkedin className="w-5 h-5" /> 
                        <span className="font-medium">Connect on LinkedIn</span>
                      </motion.a> 
                    </div> 
                  </div>
                </div> 
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
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#eecf94]/10 to-[#003c2c]/10 backdrop-blur-sm border border-[#eecf94]/20">
            <span className="text-gray-700 font-medium">
              A Leadership Team Committed to Conservative Growth
            </span>
          </div>
        </motion.div>
      </div> 
    </section> 
  ); 
}