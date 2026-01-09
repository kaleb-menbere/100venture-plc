import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: 'Muhammad Kareem',
      title: 'Founder & CEO',
      bio: '25+ years in private equity and asset management. Previously led acquisitions at Goldman Sachs.',
      image: '/t4.jpeg',
      linkedin: '#',
    },
    {
      name: 'Fatima Malik',
      title: 'Managing Partner',
      bio: 'Former VP at BlackRock. Specializes in conservative yield strategies and risk management.',
      image: '/t3.jpeg',
      linkedin: '#',
    },
    {
      name: 'Yusuf Ibrahim',
      title: 'Chief Investment Officer',
      bio: '20 years structuring long-term asset deals. Expert in commercial real estate and infrastructure.',
      image: '/t2.jpeg',
      linkedin: '#',
    },
    {
      name: 'Aisha Rodriguez',
      title: 'Head of Partnerships',
      bio: 'Builds strategic relationships with sponsors and operators. Background in investment banking.',
      image: '/t1.jpeg',
      linkedin: '#',
    },
  ];

  return (
    <section id="team" className="py-32 bg-brand-navy-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#299963]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-semibold text-white mb-6 leading-tight">
            Leadership <span className="text-[#D3AF5E] italic font-normal">Team</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Decades of combined experience in conservative asset management and
            strategic partnerships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group"
            >
              <div className="relative mb-8 overflow-hidden rounded-2xl shadow-luxury">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/40 to-transparent opacity-60 z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 z-20">
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#D3AF5E] to-[#299963] rounded-full flex items-center justify-center shadow-lg"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="text-center px-2">
                <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#299963] mb-4 tracking-wide">
                  {member.title}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
