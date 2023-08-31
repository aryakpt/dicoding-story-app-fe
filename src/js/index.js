// Import our custom CSS
import "../sass/main.scss";
import "./components";

// Import javascript file as needed
import * as bootstrap from "bootstrap";

import routes from "./routes";

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  initPages();
  const route = detectRoute();
  route.init();
});
