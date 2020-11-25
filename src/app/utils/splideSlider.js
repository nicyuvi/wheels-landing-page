import Splide from '@splidejs/splide';

export const splide = new Splide('#splide', {
  perPage: 3,
  breakpoints: {
    800: {
      perPage: 1,
    },
  },
  rewind: true,
  gap: '2em',
}).mount();
