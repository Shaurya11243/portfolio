import { profileData } from '../data/profile';

export const profileService = {
  getProfile: async () => {
    return profileData;
  },

  updateProfile: async (profileData) => {
    console.log('Static mode: Update profile', profileData);
    return profileData;
  },

  uploadProfileImage: async (file) => {
    console.log('Static mode: Upload profile image', file);
    return { url: '/src/assets/profile.jpg' };
  },

  uploadResumePDF: async (file) => {
    console.log('Static mode: Upload resume', file);
    return { url: '/resume.pdf' };
  }
};
