import apiConfig from "../config/apiConfig";
import { storage } from "../utils/storage";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class JumbotronComponent extends LitWithoutShadowDom {
  static properties = {
    user: { type: Object, reflect: true },
  };
  constructor() {
    super();
    const user = storage.get(apiConfig.TOKEN_KEY);
    this.user = { ...user };
  }
  render() {
    return html` <div id="jumbotron" class="p-5 mb-4 bg-light rounded-3">
      <div class="container py-5">
        <h1 class="display-5 fw-bold">
          Welcome to Story App, ${this.user.name}!
        </h1>
        <p>Mau bercerita apa Anda hari ini?</p>
        <button-lit
          className="btn-primary"
          to="/add.html"
          content="Add New Story"
        ></button-lit>
      </div>
    </div>`;
  }
}

customElements.define("jumbotron-component", JumbotronComponent);
