import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class CardList extends LitWithoutShadowDom {
  static properties = {
    stories: { type: Array, reflect: true },
  };

  constructor() {
    super();
    this.stories = [];
  }

  render() {
    return html`
      <div class="row">
        ${this.stories.map((story) => {
          return html`<card-post
            name=${story.name}
            description="${story.description}"
            photoUrl="${story.photoUrl}"
            createdAt="${story.createdAt}"
          ></card-post>`;
        })}
      </div>
    `;
  }
}

customElements.define("card-list", CardList);
