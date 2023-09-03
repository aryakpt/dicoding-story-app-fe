import { formatDate } from "../utils/helper";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class CardPost extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
  };

  _checkAvailabilityProperty() {
    const props = ["name", "description", "photoUrl", "createdAt"];
    props.forEach((prop) => {
      if (!this.hasAttribute(prop))
        throw new Error(
          `Atribut "${prop}" harus diterapkan pada elemen ${this.localName}`
        );
    });
  }

  render() {
    this._checkAvailabilityProperty();
    this.setAttribute("class", "col-12 col-sm-12 col-md-12 col-lg-4");
    return html` <div class="card mb-3">
      <img
        src="${this.photoUrl ?? "..."}"
        class="card-img-top object-fit-cover"
        style="max-height:200px; object-fit: cover;"
        alt="${this.name ?? "..."}"
      />
      <div class="card-body">
        <h5 class="card-title">${this.name ?? "Name"}</h5>
        <p class="card-text">${this.description ?? "Description"}</p>
        <small>${formatDate(this.createdAt) ?? "createdAt"}</small>
      </div>
    </div>`;
  }
}

customElements.define("card-post", CardPost);
