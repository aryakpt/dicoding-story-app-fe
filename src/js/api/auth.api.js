import { storyAxios } from "../config/axiosInstance";

const auth = {
  login: "/login",
  register: "/register",
};

const authApi = {
  async register({ name, email, password }) {
    try {
      const payload = { name, email, password };
      const res = await storyAxios.post(auth.register, payload);
      return res;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  },
  async login({ email, password }) {
    try {
      const payload = { email, password };
      const res = await storyAxios.post(auth.login, payload);
      return res;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  },
};

export default authApi;
