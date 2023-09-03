import storyApi from "../api/story.api";
import CheckUserAuth from "../utils/checkUserAuth";

const Home = {
  init: function () {
    CheckUserAuth.checkLoginState();
    this._initialData();
  },
  async _initialData() {
    const spinner = document.querySelector("spinner-component");
    spinner.style.display = "block";
    const res = await storyApi.getStories();
    spinner.style.display = "none";
    if (res.status === 200) {
      this._stories = res.data.listStory;
      this._populateDatatoCard(this._stories);
    } else {
      alert(res.data.message);
    }
  },
  _populateDatatoCard: function (stories) {
    const cardListEl = document.querySelector("card-list");
    cardListEl.stories = stories;
  },
};

export default Home;
