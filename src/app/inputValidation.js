//Import form submit -- no redirect function
import { processForm } from './formSubmit.js';

/** Input Validation **/
//Form
export const signupForm = document.querySelector('.signup-form');
//Inputs
const phoneNumber = document.querySelector('#phoneNumber');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

//Error Divs
const passwordError = document.querySelector('#password-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');

export default signupForm.addEventListener('submit', (e) => {
  //Error messages array
  let errorMessages = [];
  //Verify phone number
  const phoneNumberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (phoneNumberRegex.test(phoneNumber.value) === false) {
    errorMessages.push('phone error');
    phoneError.innerHTML =
      'Please enter phone number in the format: "xxx-xxx-xxxx"';
    phoneError.style.background = 'lightgray';
  } else {
    phoneError.innerHTML = '';
    phoneError.style.background = 'none';
  }
  //Verify email
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(email.value) === false) {
    errorMessages.push('email error');
    emailError.innerHTML = 'Not a valid email';
    emailError.style.background = 'lightgray';
  } else {
    emailError.innerHTML = '';
    emailError.style.background = 'none';
  }

  //Verify password
  if (password.value.length <= 6) {
    //password can't be shorter than 6 characters
    errorMessages.push('password error');
    passwordError.innerHTML = 'Password must be longer than 6 characters';
    passwordError.style.background = 'lightgray';
  } else if (password.value.length >= 20) {
    //password can't be longer than 20 characters
    errorMessages.push('password error');
    passwordError.innerHTML = 'Password must be shorter than 20 characters';
    passwordError.style.background = 'lightgray';
  } else if (password.value === 'password') {
    //password can't contain 'password'
    errorMessages.push('password error');
    passwordError.innerHTML = 'User password cannot be "password"';
    passwordError.style.background = 'lightgray';
  } else {
    passwordError.innerHTML = '';
    passwordError.style.background = 'none';
  }

  //If there are errors then prevent form submit
  if (errorMessages.length > 0) {
    e.preventDefault();
  } else {
    e.preventDefault();
    //Form submit -- noredirect
    processForm(signupForm);
  }
});
/** End Input Validation **/
