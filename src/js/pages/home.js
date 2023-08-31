const Home = {
  init: function () {
    this._initialData();
  },
  async _initialData() {
    const fetchData = await fetch("/data/DATA.json");
    const response = await fetchData.json();
    this._stories = response;
    this._populateDatatoCard(response.listStory);
  },
  _populateDatatoCard: function (stories) {
    const cardListEl = document.querySelector("card-list");
    cardListEl.stories = stories;
  },
};

export default Home;
