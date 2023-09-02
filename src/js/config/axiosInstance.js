import axios from "axios";
import apiConfig from "./apiConfig";

const instance = (baseURL) => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const storyAxios = instance(apiConfig.BASE_URL);

export { storyAxios };
