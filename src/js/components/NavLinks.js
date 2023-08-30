import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <nav-link text="Home" href="/"></nav-link>
        <nav-link text="Link" href="#"></nav-link>
      </ul>
    `;
  }
}

customElements.define("nav-links", NavLinks);
