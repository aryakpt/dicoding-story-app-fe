const storage = {
  set(key, value) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(sessionStorage.getItem(key));
  },
  destroy(key) {
    return sessionStorage.removeItem(key);
  },
};

export { storage };
