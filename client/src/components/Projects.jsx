import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { projectService } from '../services/projectService';
import ProjectCard from './ProjectCard';
import { fadeInUp } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { data: projects, loading, error } = useFetch(projectService.getAllProjects);

  const featuredProjects = projects ? projects.slice(0, 6) : [];

  const SkeletonCard = () => (
    <div className="bg-gray-900/80 rounded-2xl overflow-hidden border border-white/[0.08] animate-pulse h-[420px]">
      <div className="h-[200px] bg-white/5"></div>
      <div className="p-5">
        <div className="h-5 bg-white/5 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-white/5 rounded w-full mb-2"></div>
        <div className="h-4 bg-white/5 rounded w-5/6 mb-6"></div>
        <div className="flex gap-2">
          <div className="h-4 bg-white/5 rounded w-16"></div>
          <div className="h-4 bg-white/5 rounded w-16"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050510]">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.05)_0%,rgba(5,5,16,1)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-[#e2e8f0] tracking-tight">
            My Projects
          </h2>
          <p className="text-gray-400 text-sm mt-2">Things I've built and shipped</p>
          <div className="flex justify-center mt-3">
            <div className="w-16 h-1 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] rounded-full" />
          </div>
        </motion.div>


        {error && (
          <div className="text-center p-8 bg-red-900/10 text-red-400 rounded-xl border border-red-900/30 mb-8 backdrop-blur-sm">
            <p>Failed to load projects: {error}</p>
          </div>
        )}

        {/* Uniform grid — all cards same size, centered if few */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {loading ? (
            <>
              <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px]">
                <SkeletonCard />
              </div>
              <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px]">
                <SkeletonCard />
              </div>
              <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px]">
                <SkeletonCard />
              </div>
            </>
          ) : featuredProjects.length > 0 ? (
            featuredProjects.map((project) => (
              <div key={project._id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px]">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center p-12 text-[#64748b] bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
              No projects found in this category.
            </div>
          )}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <NavLink
            to="/projects"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border-2 border-[#7c3aed]/50 text-[#e2e8f0] hover:bg-[#7c3aed]/10 hover:border-[#7c3aed] font-medium rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.1)] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            View All Projects
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
