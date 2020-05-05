const form = document.getElementById("form");
const name = document.getElementById("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formValidInput = {
  name: false,
  username: false,
  email: false,
  phone: false,
  password: false,
  password2: false,
  allValid() {
    return (
      this.name &&
      this.username &&
      this.email &&
      this.phone &&
      this.password &&
      this.password2
    );
  },
};

// /////////////////////////////////////////////////
// Functions
// /////////////////////////////////////////////////
// ? Show Error function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
  formValidInput[input.id] = false;
}

// ? Show success function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  formValidInput[input.id] = true;
}

// ?Check Name
function isValidName() {
  const re = /^[a-z(\s)?]{3,18}$/i;
  if (name.value.trim() === "") {
    showError(name, "Name is required.");
  } else if (!re.test(name.value)) {
    showError(name, "Name must be between 3 and 18 characters.");
  } else {
    showSuccess(name);
  }
}

// ? check username
function isValidUsername() {
  const re = /^[a-z]\w+$/i;
  if (username.value.trim() === "") {
    showError(username, "Username is required.");
  } else if (!re.test(username.value)) {
    showError(username, "Enter valid username.");
  } else {
    showSuccess(username);
  }
}

// ? Check Email
function isValidEmail() {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
  if (email.value.trim() === "") {
    showError(email, "Email is required.");
  } else if (!re.test(email.value)) {
    showError(email, "Enter valid email.");
  } else {
    showSuccess(email);
  }
}

// ? Check Phone Number
function isValidPhoneNumber() {
  const re = /^(\+2)?\d{11}$/;
  if (phone.value.trim() === "") {
    showError(phone, "Phone number is required.");
  } else if (!re.test(phone.value)) {
    showError(phone, "Enter valid phone number, [+20-1x-xxxx-xxxx].");
  } else {
    showSuccess(phone);
  }
}

// ? Check Password
function isValidPassword() {
  const re = /.{8,}/;
  if (password.value === "") {
    showError(password, "Password is required.");
  } else if (!re.test(password.value)) {
    showError(password, "Password must be at least 8 characters.");
  } else {
    showSuccess(password);
  }
}

// ? Check Password match
function isValidPasswordMatch() {
  if (password.value === "") {
    showError(password2, "Confirm password is required.");
  } else if (password.value !== password2.value) {
    showError(password2, "Password do not match");
  } else {
    showSuccess(password2);
  }
}

function callAll() {
  isValidName();
  isValidUsername();
  isValidEmail();
  isValidPhoneNumber();
  isValidPassword();
  isValidPasswordMatch();
}
// /////////////////////////////////////////////////
// Event listeners
// /////////////////////////////////////////////////
form.addEventListener("submit", (e) => {
  // Check input
  callAll();
  if (!formValidInput["allValid"]()) {
    e.preventDefault();
    console.log("error");
  } else {
    // console.log("passed");
  }
});

name.addEventListener("blur", isValidName);

username.addEventListener("blur", isValidUsername);

email.addEventListener("blur", isValidEmail);

phone.addEventListener("blur", isValidPhoneNumber);

password.addEventListener("blur", isValidPassword);

password2.addEventListener("blur", isValidPasswordMatch);

// //////////////////////////////
