'use strict';
import {
  sliderImg,
  sliderText,
  reportWindowSize,
} from './mainSliderContent.js';

/* Main Slider */
export const mainSliderNav = () => {
  const linksContainer = document.querySelector('.icons-nav');

  linksContainer.addEventListener('click', (e) => {
    var active = document.querySelectorAll('.active');
    var target = e.target;
    var itemNum = target.dataset.item;
    var itemNumParent = target.parentElement.dataset.item;

    //prevent page refresh on icon click
    e.preventDefault();
    //target link padding
    if (target.id === itemNum) {
      //Call sliderImg function and pass in clicked icon's dataset number
      sliderImg(itemNum);
      sliderText(itemNum);

      //remove current active class
      if (active.length > 0) {
        active[0].classList.remove('active');
      }
      //reassign active class to new element
      target.parentElement.classList.add('active');
      //scrolls element to horizontal center on click
      target.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
    //target link tag children
    if (target.parentElement.id === itemNumParent) {
      //Call sliderImg function and pass in clicked icon's dataset number
      sliderImg(itemNumParent);
      sliderText(itemNumParent);

      if (active.length > 0) {
        active[0].classList.remove('active');
      }
      target.parentElement.parentElement.classList.add('active');
      //scrolls element to horizontal center on click
      target.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  });

  //call reportWindowSize on window resize
  window.addEventListener('resize', reportWindowSize);
};
/* End Main Slider */
