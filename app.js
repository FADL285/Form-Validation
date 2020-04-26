document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("zip").addEventListener("blur", validateZip);

document
  .querySelector(".form-validate")
  .addEventListener("submit", checkValidate);
let allValid = false;

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-z\s]{3,16}$/i;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
    allValid = false;
  } else {
    name.classList.remove("is-invalid");
    allValid = true;
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-z0-9_\.\-])+(@)[a-z]+\.([a-z]{2,5})$/i;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
    allValid = false;
  } else {
    email.classList.remove("is-invalid");
    allValid = true;
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const re = /^(\+2)?\d{11}$/;
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
    allValid = false;
  } else {
    phone.classList.remove("is-invalid");
    allValid = true;
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^\d{5}$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
    allValid = false;
  } else {
    zip.classList.remove("is-invalid");
    allValid = true;
  }
}

function checkValidate(e) {
  if (!allValid) {
    e.preventDefault();
  }
}
