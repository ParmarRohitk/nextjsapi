// Helper functions for authentication
export const getToken = (): string | null => {
  // Retrieve the token from localStorage or your storage mechanism
  return localStorage.getItem('token');
};

export const setToken = (token: string): void => {
  // Store the token in localStorage or your storage mechanism
  localStorage.setItem('token', token);
};

export const removeToken = (): void => {
  // Remove the token from localStorage or your storage mechanism
  localStorage.removeItem('token');
};
