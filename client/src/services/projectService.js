import { projectsData } from '../data/projects';

export const projectService = {
  getAllProjects: async () => {
    return projectsData;
  },

  getProjectById: async (id) => {
    return projectsData.find(p => p._id === id);
  },

  createProject: async (data) => {
    console.log('Static mode: Create project', data);
    return data;
  },

  updateProject: async (id, data) => {
    console.log('Static mode: Update project', id, data);
    return data;
  },

  deleteProject: async (id) => {
    console.log('Static mode: Delete project', id);
    return { success: true };
  }
};
