import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class NavLink extends LitWithoutShadowDom {
  static properties = {
    href: { type: String, reflect: true },
    text: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProps();
  }

  _checkAvailabilityProps() {
    if (!this.hasAttribute("href"))
      throw new Error("Property 'href' must exist!");
    if (!this.hasAttribute("text"))
      throw new Error("Property 'text' must exist!");
  }

  render() {
    return html`
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="${this.href}"
          >${this.text}</a
        >
      </li>
    `;
  }
}

customElements.define("nav-link", NavLink);
