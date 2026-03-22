import { useState } from 'react';
import { motion } from 'framer-motion';
import useFetch from '../hooks/useFetch';
import { projectService } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';
import { fadeInUp } from '../hooks/useScrollAnimation';

const ProjectsPage = () => {
  const { data: projects, loading, error } = useFetch(projectService.getAllProjects);
  const filteredProjects = projects || [];

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
    <div className="min-h-screen bg-[#050510] pt-28 pb-20 relative overflow-hidden">
      {/* Background radial fade */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.05)_0%,rgba(5,5,16,1)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.05)_0%,rgba(5,5,16,1)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={fadeInUp}
           initial="hidden"
           animate="visible"
           className="text-center mb-16 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#e2e8f0] mb-4 tracking-tight">
            All Projects
          </h1>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto mb-6">
            A comprehensive list of my side projects, assignments, and open-source contributions.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] rounded-full drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
        </motion.div>



        {error && (
          <div className="text-center p-8 bg-red-900/10 text-red-400 rounded-xl border border-red-900/30 mb-8 backdrop-blur-sm">
            <p>Failed to load projects: {error}</p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-8">
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
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <div key={project._id || idx} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-[400px]">
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-[#64748b]">No projects found for this category.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
