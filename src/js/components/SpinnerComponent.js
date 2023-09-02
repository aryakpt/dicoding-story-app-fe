import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html, css } from "lit";

class SpinnerComponent extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="spinner-grow-backdrop"></div>
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;
  }
}

customElements.define("spinner-component", SpinnerComponent);
