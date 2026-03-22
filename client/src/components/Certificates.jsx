import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import useFetch from '../hooks/useFetch';
import { profileService } from '../services/profileService';
import Tilt from 'react-parallax-tilt';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

import { certificationsData } from '../data/certifications';

const CertificateCard = ({ cert }) => {
  const accentColor = cert.accent || '#7c3aed';
  
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.02}
      transitionSpeed={400}
      className={`relative group h-full`}
    >
      <div 
        className="h-full relative z-0 rounded-2xl transition-shadow duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        style={{ '--accent-glow': `${accentColor}33` }} // 20% opacity for shadow
      >
        <motion.div 
          variants={fadeInUp}
          className={`bg-[#0a0a1a]/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm flex flex-col h-full border border-white/10 transition-all duration-300 relative z-10 group hover:border-[var(--accent-color)]`}
          style={{ 
            transformStyle: 'preserve-3d',
            '--accent-color': accentColor
          }}
        >
          {/* Card Hover Glow effect */}
          <div 
            className="absolute inset-0 transition-colors duration-500 z-0 pointer-events-none group-hover:bg-[var(--accent-glow)]"
            style={{ '--accent-glow': `${accentColor}1a` }} // 10% opacity for overlay
          />

          {/* Top Banner Area — fixed h-44 */}
          <div 
            className="relative h-44 overflow-hidden bg-[#050510] border-b border-white/5 flex-shrink-0"
            style={{ transform: 'translateZ(20px)' }}
          >
            {cert.image ? (
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,rgba(5,5,16,1)_70%)] text-white/20">
                <span className="text-6xl filter drop-shadow-[0_0_15px_var(--accent-color)] transform group-hover:scale-110 transition-transform duration-500">{cert.icon}</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            
            <div className="absolute top-4 right-4 z-20">
              <span 
                className="text-[10px] font-bold px-3 py-1.5 rounded-full border tracking-wider uppercase backdrop-blur-md"
                style={{ 
                  backgroundColor: `${accentColor}33`,
                  color: accentColor,
                  borderColor: `${accentColor}4d`
                }}
              >
                {cert.issuer}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow relative z-10 bg-[#0a0a1a]" style={{ transform: 'translateZ(30px)' }}>
            <h3 className="text-xl font-heading font-bold text-white mb-2 line-clamp-2 group-hover:text-[var(--accent-color)] transition-colors">
              {cert.title}
            </h3>
            
            <div className="flex flex-col gap-1 mb-4">
              <p className="text-xs text-[#64748b] font-medium flex items-center gap-1">
                🗓️ Issued {cert.date}
              </p>
              {cert.hours && (
                <p className="text-xs text-[#64748b] font-medium flex items-center gap-1">
                  ⏱️ {cert.hours}
                </p>
              )}
            </div>
            
            <p className="text-[#94a3b8] text-sm mb-6 flex-grow leading-relaxed font-body">
              {cert.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6 text-[11px] font-mono font-medium">
              {cert.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/20 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <a 
              href={cert.link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-[#e2e8f0] font-medium rounded-lg transition-all duration-300 mt-auto hover:text-white"
              style={{ 
                '--hover-bg': accentColor,
                '--hover-border': accentColor,
                '--hover-shadow': `${accentColor}66`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accentColor;
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.boxShadow = `0 0 15px ${accentColor}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              View Credential <FiExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
};

const Certificates = () => {
  const certificates = certificationsData;

  return (
    <section id="certificates" className="py-24 bg-[#050510] transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#e2e8f0] mb-3 tracking-tight">
                Certificates
              </h2>
              <p className="text-[#64748b] mb-4 text-lg">Courses & Certifications</p>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] rounded-full drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {certificates.map((cert, index) => (
            <CertificateCard key={cert._id || index} cert={cert} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;
