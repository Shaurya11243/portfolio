import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';
import { skillService } from '../services/skillService';
import Tilt from 'react-parallax-tilt';
import { fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';

import { skillsData } from '../data/skills';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiExpress,
  SiPython, SiDjango, SiPhp,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiDocker, SiPostman,
  SiCplusplus, SiC, SiKubernetes, SiApache
} from 'react-icons/si';
import { FaJava, FaLightbulb, FaUsers, FaTasks, FaSync, FaAws } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';

const skillIconMap = {
  'JavaScript':   { icon: SiJavascript,  color: '#F7DF1E' },
  'Python':       { icon: SiPython,      color: '#3776AB' },
  'C':            { icon: SiC,           color: '#A8B9CC' },
  'Java':         { icon: FaJava,        color: '#ED8B00' },
  'C++':          { icon: SiCplusplus,   color: '#00599C' },
  'PHP':          { icon: SiPhp,         color: '#777BB4' },
  'React.js':     { icon: SiReact,       color: '#61DAFB' },
  'HTML':         { icon: SiHtml5,       color: '#E34F26' },
  'CSS':          { icon: SiCss,         color: '#1572B6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'Node.js':      { icon: SiNodedotjs,   color: '#339933' },
  'Express.js':   { icon: SiExpress,     color: '#FFFFFF' },
  'Django':       { icon: SiDjango,      color: '#44B78B' },
  'MongoDB':      { icon: SiMongodb,     color: '#47A248' },
  'MySQL':        { icon: SiMysql,       color: '#4479A1' },
  'Git':          { icon: SiGit,         color: '#F05032' },
  'GitHub':       { icon: SiGithub,      color: '#FFFFFF' },
  'Docker':       { icon: SiDocker,      color: '#2496ED' },
  'AWS':          { icon: FaAws,         color: '#FF9900' },
  'Apache Cloud Stack': { icon: SiApache, color: '#D22128' },
  'Postman':      { icon: SiPostman,     color: '#FF6C37' },
  'Problem-Solving': { icon: FaLightbulb, color: '#FFD700' },
  'Team Player':     { icon: FaUsers,     color: '#00BFFF' },
  'Project Management': { icon: FaTasks, color: '#32CD32' },
  'Adaptability':    { icon: FaSync,      color: '#FF69B4' },
};

const categoryStyles = {
  'Languages': 'from-[#7c3aed] to-purple-400',
  'Frontend': 'from-[#06b6d4] to-cyan-400',
  'Backend': 'from-green-400 to-emerald-500',
  'Database': 'from-[#f59e0b] to-amber-400',
  'Tools': 'from-red-500 to-rose-400',
  'Soft Skills': 'from-pink-500 to-rose-400',
};

const SkillItem = ({ skillName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mapping = skillIconMap[skillName] || { icon: BsCodeSquare, color: '#9CA3AF' };
  const IconComponent = mapping.icon;

  return (
    <div 
      className="flex items-center gap-3 p-2 cursor-pointer transition-all duration-300 group rounded-lg hover:bg-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent 
        className="text-2xl transition-transform duration-300 transform group-hover:scale-110"
        style={{ 
          color: mapping.color,
          filter: isHovered ? `drop-shadow(0 0 10px ${mapping.color})` : 'none'
        }}
      />
      <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
        {skillName}
      </span>
    </div>
  );
}

const Skills = () => {
  const categories = skillsData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050510]">
      {/* Background radial fade */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.05)_0%,rgba(5,5,16,1)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center mb-20 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#e2e8f0] mb-4 tracking-tight">
            My Skills
          </h2>
          <p className="text-[#64748b] font-medium mb-6">Technologies I work with</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] rounded-full drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full"
        >
          {categories.map((category) => {
              const borderGradient = categoryStyles[category.name] || 'from-gray-500 to-gray-400';
              
              return (
                <Tilt 
                  key={category.name}
                  tiltMaxAngleX={6} 
                  tiltMaxAngleY={6} 
                  glareEnable={true} 
                  glareMaxOpacity={0.08}
                  className="w-full group/tilt"
                >
                  <motion.div
                    variants={fadeInUp}
                    className="h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Gradient Top Border */}
                    <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${borderGradient}`} />
                    
                    {/* Decorative background glow on hover */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${borderGradient} opacity-0 group-hover/tilt:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />

                    {/* Card Header */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="text-5xl mb-4 transform group-hover/tilt:scale-110 transition-transform duration-300 drop-shadow-xl">{category.emoji}</div>
                      <h3 className={`text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r ${borderGradient}`}>
                        {category.name}
                      </h3>
                    </div>
                    
                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 relative z-10 w-full">
                      {category.skills.map(skillName => (
                        <SkillItem key={skillName} skillName={skillName} />
                      ))}
                    </div>
                  </motion.div>
                </Tilt>
              );
            })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
