import { journeyData } from '../data/journey';

export const experienceService = {
  getAllExperience: async () => {
    return journeyData;
  },

  createExperience: async (expData) => {
    console.log('Static mode: Create experience', expData);
    return expData;
  },

  updateExperience: async (id, expData) => {
    console.log('Static mode: Update experience', id, expData);
    return expData;
  },

  deleteExperience: async (id) => {
    console.log('Static mode: Delete experience', id);
    return { success: true };
  }
};
