import { storage } from "./storage";
import apiConfig from "../config/apiConfig";

class CheckUserAuth {
  static checkLoginState() {
    const excludeRedirectPage = ["/auth/login.html", "/auth/register.html"];
    const currentPath = window.location.pathname;
    const isAuthPath = excludeRedirectPage.includes(currentPath);
    const userToken = storage.get(apiConfig.TOKEN_KEY);

    if (!userToken) {
      if (!isAuthPath) window.location.pathname = "/auth/login.html";
    } else {
      if (isAuthPath) window.location.pathname = "/";
    }
  }
}
export default CheckUserAuth;
