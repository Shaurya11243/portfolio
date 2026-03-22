import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

const quickInfo = [
  { label: "Email",    value: "siddharthshaurya408@gmail.com", icon: "📧", href: "mailto:siddharthshaurya408@gmail.com" },
  { label: "Phone",    value: "+91 6307697514",                icon: "📞", href: "tel:+916307697514" },
  { label: "LinkedIn", value: "linkedin.com/in/siddharth515",  icon: "🔗", href: "https://www.linkedin.com/in/siddharth515" },
  { label: "GitHub",   value: "github.com/Shaurya11243",        icon: "🐙", href: "https://github.com/Shaurya11243" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050510]">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.05)_0%,rgba(5,5,16,1)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#e2e8f0] mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] rounded-full drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT COLUMN — Bio + Details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2 w-full min-w-0"
          >
            <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-heading font-bold text-[#e2e8f0] mb-6">
              Get to know me!
            </motion.h3>

            <motion.p variants={fadeInUp} className="text-[#94a3b8] text-lg leading-relaxed mb-4 font-body">
              I'm a <span className="text-[#06b6d4] font-medium">B.Tech CSE</span> student at{' '}
              <span className="text-[#06b6d4] font-medium">Lovely Professional University</span> with a strong
              foundation in programming, web development, and data structures. I enjoy turning ideas into
              functional, user-friendly applications.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-[#94a3b8] text-lg leading-relaxed mb-8 font-body">
              With hands-on experience in both frontend technologies and backend concepts, I'm always eager
              to learn and take on new challenges in the world of software development.
            </motion.p>


          </motion.div>

          {/* RIGHT COLUMN — Contact Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2 w-full min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {quickInfo.map((info, idx) => (
              <Tilt
                key={idx}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={false}
                className="h-full"
              >
                <motion.div
                  variants={fadeInUp}
                  className="h-full bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#7c3aed]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Decorative Gradient Top Border */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-3 min-w-0">
                    <div className="text-2xl shrink-0 filter drop-shadow-[0_0_10px_rgba(124,58,237,0.4)]">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-semibold text-[#7c3aed] uppercase tracking-wider mb-1">
                        {info.label}
                      </h4>
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="text-[#e2e8f0] font-medium text-sm block truncate hover:text-[#06b6d4] transition-colors"
                        title={info.value}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
