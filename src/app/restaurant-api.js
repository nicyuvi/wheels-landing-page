import { splide } from './utils/splideSlider.js';
import { assets } from './utils/importAssets.js';

//Fetch US Restaurant Menu API
window.addEventListener('DOMContentLoaded', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;

        const api = `https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo?page=1&lon=${long}&lat=${lat}&distance=10`;

        fetch(api, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'us-restaurant-menus.p.rapidapi.com',
            'x-rapidapi-key':
              '05fe7d0a4bmshf49055d6f6de661p1ebc8djsn39f8123a7161',
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            restaurantData(data);
          })
          .catch((err) => {
            console.log(err);
            restaurantError();
          });
      },
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert('Please enable location. Thank you!');
        restaurantError();
      }
    );
  }
});

//Pass in restaurant api data to function
export const restaurantData = (response) => {
  //destructure response
  const { data } = response.result;
  for (let i = 0; i < 9; i++) {
    //destructure properties for nearest 9 restaurants
    const {
      restaurant_name: name,
      price_range: price,
      restaurant_phone: phone,
      cuisines,
    } = data[i];
    const slides = `
                <img src="${assets[`restaurant-slider-img-${i}.jpg`]}">
                <h4>${name}</h4>
                <p id="restaurant-cuisine"></p>
                <p>${price} ${phone}</p>
              `;

    //Add Content to Splide slides
    splide.add('<li class="splide__slide">' + slides + '</li>');

    /* Append dots between each text element */
    //Select cuisine element from each slide
    const cuisineElement = document.querySelectorAll('#restaurant-cuisine');

    //Add cuisine array and join them with bullet points
    if (cuisines.length > 0) {
      const cuisineItem = cuisines.join(` <span>•</span> `);
      cuisineElement[i].insertAdjacentHTML('beforeend', `${cuisineItem}`);
    }
  }
};

//Geolocation NOT Enabled
function restaurantError() {
  const restaurantSlider = document.querySelector('#splide');
  restaurantSlider.innerHTML = `<p style="font-style: italic; color: #ff0033;">Please enable location or refresh the page. Thanks!</p>`;
}
