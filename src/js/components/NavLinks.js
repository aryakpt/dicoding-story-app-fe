import apiConfig from "../config/apiConfig";
import { storage } from "../utils/storage";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <nav-link text="Home" href="/"></nav-link>
        <nav-link
          text="Logout"
          href="/auth/login.html"
          @click=${() => {
            storage.destroy(apiConfig.TOKEN_KEY);
            window.location.pathname = "/auth/login.html";
          }}
        ></nav-link>
      </ul>
    `;
  }
}

customElements.define("nav-links", NavLinks);
