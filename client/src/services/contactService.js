
export const contactService = {
  sendMessage: async (formData) => {
    console.log('Static mode: Send message', formData);
    return { success: true, message: 'Message "sent" (Static Mode)' };
  },

  getAllMessages: async () => {
    return [];
  },

  deleteMessage: async (id) => {
    return { success: true };
  }
};
