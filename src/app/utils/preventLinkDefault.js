/* Prevent Link scroll to top default for empty href value */
export const preventLinkDefault = () => {
  //Select all links
  const links = document.querySelectorAll('a');
  const sliderContainer = document.querySelector('#main-slider-text');

  //loop through each link and add preventDefault()
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
  });

  //Event delegation to target slider links
  sliderContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('main-slider-btn')) {
      if (e.target.getAttribute('href') === '#') {
        e.preventDefault();
      }
    }
  });
};
/* End Prevent Link scroll to top default */
