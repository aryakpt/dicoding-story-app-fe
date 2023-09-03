import apiConfig from "../config/apiConfig";
import { storyAxios } from "../config/axiosInstance";
import { storage } from "../utils/storage";

const customOptions = {
  headers: {
    Authorization: `Bearer ${storage.get(apiConfig.TOKEN_KEY).token}`,
  },
};

const storyApi = {
  async getStories() {
    try {
      const res = await storyAxios.get("/stories", {
        ...customOptions,
      });
      return res;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  },
  async createStory(data) {
    try {
      const res = await storyAxios.post("/stories", data, {
        headers: {
          ...customOptions.headers,
          "Content-Type": "multipart/form-data",
        },
      });
      return res;
    } catch (error) {
      console.error(error);
      return error.response;
    }
  },
};

export default storyApi;
