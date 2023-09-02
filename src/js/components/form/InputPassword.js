import LitWithoutShadowDom from "../base/LitWithoutShadowDom";
import { html } from "lit";

class InputPassword extends LitWithoutShadowDom {
  static properties = {
    invalidFeedback: { type: String, reflect: true },
    isShown: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.isShown = false;
  }

  _isShownHandle() {
    this.isShown = !this.isShown;
  }
  render() {
    return html` <div class="form-outline form-white mb-5">
      <label class="form-label" for="input-password"
        >Password
        <i
          class="bi ${this.isShown ? "bi-eye" : "bi-eye-slash"}"
          style="cursor: pointer"
          @click=${this._isShownHandle}
        ></i
      ></label>
      <input
        type="${this.isShown ? "text" : "password"}"
        id="input-password"
        name="input-password"
        class="form-control form-control-lg"
        required
      />
      <div class="invalid-feedback text-left">${this.invalidFeedback}</div>
    </div>`;
  }
}

customElements.define("input-password", InputPassword);
