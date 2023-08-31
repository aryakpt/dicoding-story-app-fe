import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { html } from "lit";
class ButtonLit extends LitWithoutShadowDom {
  static properties = {
    to: { type: String, reflect: true },
    content: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    className: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
    this.classes = "";
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("to"))
      throw new Error(
        `Atribut "to" harus diterapkan pada elemen ${this.localName}`
      );
    if (!this.hasAttribute("content"))
      throw new Error(
        `Atribut "content" harus diterapkan pada elemen ${this.localName}`
      );
  }

  render() {
    return html`
      <a class="btn ${this.className}" href="${this.to}">
        ${this._templateIcon(this.icon)}${this.content}
      </a>
    `;
  }

  _templateIcon(icon) {
    if (icon) {
      return html`<i class="bi ${icon} me-1"></i>`;
    }

    return html``;
  }
}

customElements.define("button-lit", ButtonLit);
