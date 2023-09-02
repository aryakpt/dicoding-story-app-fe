const storage = {
  set(key, value) {
    return sessionStorage.setItem(key, value);
  },
  get(key) {
    return sessionStorage.getItem(key);
  },
  destroy(key) {
    return sessionStorage.removeItem(key);
  },
};

export { storage };
