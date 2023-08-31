import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProps();
  }

  _checkAvailabilityProps() {
    if (!this.hasAttribute("brandName"))
      throw new Error("Property 'brandName' must exist!");
  }
  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">${this.brandName}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvaslightNavbar"
            aria-controls="offcanvaslightNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-light"
            tabindex="-1"
            id="offcanvaslightNavbar"
            aria-labelledby="offcanvaslightNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvaslightNavbarLabel">
                ${this.brandName}
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <nav-links></nav-links>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-app", NavApp);
