//import all assets
export function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export const assets = importAll(
  require.context('../../assets', false, /\.(png|jpe?g|svg)$/)
);

//exports images object as "assets" which containes key value pairs of image names and their output url.

/* images = {
  business-img1.svg: "imgs/business-img1.1aabf8c6e0f6f15795f1642c71454f48.svg",
  business-img2.svg: "imgs/business-img2.f5ff38749a71b7f5cdfdf276254af6b3.svg",
  business-img3.svg: "imgs/business-img3.f75d6dd518ba2e05d75e3a5c8e86cb91.svg",
} */
