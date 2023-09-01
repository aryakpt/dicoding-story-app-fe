import { LitElement, html, css } from "lit";

class FooterApp extends LitElement {
  static styles = css`
    footer {
      min-height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.1);
      background-color: whitesmoke;
    }
  `;

  render() {
    return html`<footer>Made With Love ❤ by Arya Krisna Putra</footer>`;
  }
}

customElements.define("footer-app", FooterApp);
