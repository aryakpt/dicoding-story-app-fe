const Add = {
  init() {
    const inputPhoto = document.querySelector("#validationCustomPhoto");
    inputPhoto.addEventListener("change", (e) => {
      this._updatePhotoPreview(inputPhoto.files[0]);
    });
    const submitform = document.querySelector("#addRecordForm");
    submitform.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        submitform.classList.add("was-validated");
        this._sendPost();
      },
      false
    );
  },

  _updatePhotoPreview(value) {
    const previewPhoto = document.querySelector("#validationCustomPhotoImg");
    const photo = value;
    if (!photo) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      previewPhoto.setAttribute("src", e.target.result);
    };

    reader.readAsDataURL(photo);
  },

  _sendPost() {
    const descInput = document.querySelector("#validationCustomDescription");
    const photoInput = document.querySelector("#validationCustomPhoto");
    const payload = {
      description: descInput.value,
      photo: photoInput.files[0],
    };
    const isValidated = this._validateForm({ ...payload });
    if (isValidated) {
      console.log({ payload });
      this._goToIndex();
    }
  },

  _validateForm(payload) {
    const payloadFiltered = Object.values(payload).filter(
      (item) => item === ""
    );
    return payloadFiltered.length === 0;
  },

  _goToIndex() {
    window.location.href = "/";
  },
};

export default Add;
