export const getStroageData = (key: string) => {
  return localStorage.getItem(key);
};

export const setStorageData = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const clearStorageData = () => {
  localStorage.clear();
};
