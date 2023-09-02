import authApi from "../../api/auth.api";
import CheckUserAuth from "../../utils/checkUserAuth";
const Register = {
  init() {
    CheckUserAuth.checkLoginState();
    const registerForm = document.querySelector("#form-register");
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmit();
    });
  },
  async _handleSubmit() {
    const payload = this._getPayload();
    const isValidated = this._validatePayload(payload);
    if (isValidated) {
      const res = await authApi.register(payload);
      if (res.status === 201) {
        alert(res.data.message);
        window.location.href = "/auth/login.html";
      } else {
        alert(res.data.message);
      }
    }
  },
  _getPayload() {
    const inputName = document.querySelector("#input-name");
    const inputEmail = document.querySelector("#input-email");
    const inputPassword = document.querySelector("#input-password");
    return {
      name: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    };
  },
  _validatePayload(payload) {
    const payloadFiltered = Object.values(payload).filter(
      (item) => item === ""
    );
    return payloadFiltered.length === 0;
  },
};

export default Register;
