import { storyAxios } from "../config/axiosInstance";

const storyApi = {
  async getStories() {
    try {
      const res = await storyAxios.get("/stories");
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
