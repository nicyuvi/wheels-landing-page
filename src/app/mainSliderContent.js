'use strict';
//import assets
import { assets } from './utils/importAssets.js';
//import text json
import { mainSliderText } from './mainSliderText.js';

//image containers selected
const sliderBackground = document.querySelector('#main-slider');
const sliderImgBackground = document.querySelector('.main-slider-img');

//Slider background image functionality
//icon dataset number passed in
export const sliderImg = (dataItemNum) => {
  //hide background img on mobile view
  if (window.innerWidth < 1136) {
    sliderBackground.classList.add('hideImage');
  }
  //change both images on each icon click
  sliderBackground.style.backgroundImage = `url(${
    assets[`main-slider-img-${dataItemNum}.jpg`]
  })`;
  sliderImgBackground.style.backgroundImage = `url(${
    assets[`main-slider-img-${dataItemNum}.jpg`]
  })`;
};
//End Slider background image functionality

//Adjust background on window resize
export const reportWindowSize = () => {
  //at small screens -- hide image
  if (window.innerWidth < 1136) {
    sliderBackground.classList.add('hideImage');
  } else {
    // at larger screens -- show image
    if (sliderBackground.classList.contains('hideImage')) {
      sliderBackground.classList.remove('hideImage');
    }
  }
};
//End Adjust background on window resize

//Adjust text content functionality
export const sliderText = (dataItemNum) => {
  //select main slider text container
  const mainSliderTextContainer = document.querySelector('#main-slider-text');
  //destructure selectected object
  const { header, mainText, btnText } = mainSliderText[dataItemNum - 1];
  //declare html string
  const sliderText = `<h2>${header}</h2>
            <p>${mainText}</p>
            <a href="#" role="button" class="main-slider-btn">${btnText}</a>`;
  mainSliderTextContainer.innerHTML = sliderText;
};
//End Adjust text content functionality
