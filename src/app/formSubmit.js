//Form Container
const formContainer = document.querySelector('.container-form');

//Success template literal
const successLoad = `<div class="signup-header">
            <div class="brand-container">
              <h1 class="brand brand-signup">Wheels</h1>
            </div>
          </div>
          
            <div class="form-success-load">Please Wait...</div>
            <div class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
        
        
        `;
const successMsg = `<div class="signup-header">
            <div class="brand-container">
              <h1 class="brand brand-signup">Wheels</h1>
            </div>
            </div>
            <div class="form-success">
              <h1>Congratulations! You have successfully signed up!</h1>
              <p>If you are not redirected in 5 seconds, please click <a href="index.html">HERE</a></p>
            </div>`;
export const processForm = (form) => {
  const data = new FormData(form);
  data.append('form-name', 'rider signup');
  fetch('/', {
    method: 'POST',
    body: data,
  })
    .then(() => {
      formContainer.innerHTML = successLoad;
      setTimeout(() => {
        formContainer.innerHTML = successMsg;
        windowRedirect();
      }, 3000);
    })
    .catch((error) => {
      formContainer.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    });
};

/* NOTE: Add dynamic countdown functionality */
function windowRedirect() {
  setTimeout(() => {
    window.location.replace('https://landingpage2-yuvi.netlify.app/');
  }, 3000);
}
