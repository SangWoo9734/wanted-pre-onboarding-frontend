export const getStroageData = (key: string) => {
  return localStorage.getItem(key);
};

export const setStorageData = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
