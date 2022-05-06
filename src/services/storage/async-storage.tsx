export const AsyncStorage = {
  setItem: async (key: string, value: string) => {
    try {
      return await localStorage.setItem(key, value);
    } catch (error) {
      throw error;
    }
  },
};
