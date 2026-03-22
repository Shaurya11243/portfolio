import { skillsData } from '../data/skills';

export const skillService = {
  getAllSkills: async () => {
    return skillsData;
  },

  createSkill: async (skillData) => {
    console.log('Static mode: Create skill', skillData);
    return skillData;
  },

  updateSkill: async (id, skillData) => {
    console.log('Static mode: Update skill', id, skillData);
    return skillData;
  },

  deleteSkill: async (id) => {
    console.log('Static mode: Delete skill', id);
    return { success: true };
  }
};
