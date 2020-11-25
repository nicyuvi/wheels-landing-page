/** Nav Bar **/
export const navBar = () => {
  //nav btns container
  const navBtnsContainer = document.querySelector('#nav-btns');
  //login btn
  const loginBtn = document.querySelector('#btn-login');
  const loginBtnText = document.querySelector('.btn-login');
  //signup btn
  const signupBtn = document.querySelector('.btn-signup');
  //ham btn
  const hamBtn = document.querySelector('#btn-ham .fa-bars');
  //ham close btn
  const hamCloseBtn = document.querySelector('#btn-ham .fa-times');
  //nav main close btn
  const navMainCloseBtn = document.querySelector(
    '#nav-main-close-btn .fa-times'
  );
  //nav main container
  const navMain = document.querySelector('.nav-main');
  //nav main login page
  const navMainLogin = document.querySelector('.nav-main-login');
  //nav main signup page
  const navMainSignup = document.querySelector('.nav-main-signup');
  //nav main ham page
  const navMainHam = document.querySelector('.nav-main-ham');

  //**NOTE: Refactor nav btn functionality**
  navBtnsContainer.addEventListener('click', (e) => {
    if (
      e.target == loginBtn ||
      e.target == loginBtnText ||
      e.target == signupBtn ||
      e.target == hamBtn
    ) {
      //disable body scroll
      document.body.style.overflow = 'hidden';

      //Nav main to full screen view, ham btn to close btn, close btn visible
      navMain.classList.add('active');
      hamBtn.classList.add('active');
      hamCloseBtn.classList.add('active');
      navMainCloseBtn.classList.add('active');

      //display nav main contents based on which btn clicked
      if (e.target == loginBtn || e.target == loginBtnText) {
        navMainLogin.classList.add('active');
        navMainSignup.classList.remove('active');
        navMainHam.classList.remove('active');
      } else if (e.target == signupBtn) {
        navMainSignup.classList.add('active');
        navMainLogin.classList.remove('active');
        navMainHam.classList.remove('active');
      } else if (e.target == hamBtn) {
        navMainHam.classList.add('active');
        navMainLogin.classList.remove('active');
        navMainSignup.classList.remove('active');
      }
    } else if (e.target == hamCloseBtn) {
      //reenable body scroll on nav main close
      document.body.style.overflow = 'visible';

      //Nav main close, close btn to ham btn, close btn hidden
      navMain.classList.remove('active');
      hamBtn.classList.remove('active');
      hamCloseBtn.classList.remove('active');
      navMainCloseBtn.classList.remove('active');
    }
  });

  navMainCloseBtn.addEventListener('click', () => {
    //reenable body scroll on nav main close
    document.body.style.overflow = 'visible';

    navMain.classList.remove('active');
    hamBtn.classList.remove('active');
    hamCloseBtn.classList.remove('active');
    navMainCloseBtn.classList.remove('active');
  });
};
/** End Nav Bar **/
