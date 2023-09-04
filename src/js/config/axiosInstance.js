import axios from "axios";
import apiConfig from "./apiConfig";
import { storage } from "../utils/storage";

const instance = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const storyAxios = instance(apiConfig.BASE_URL);
storyAxios.interceptors.request.use(async (req) => {
  const accessToken = storage.get(apiConfig.TOKEN_KEY)?.token;
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
});

export { storyAxios };
