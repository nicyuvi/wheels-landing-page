# Wheels Landing Page

A landing page for the Wheels ridesharing company built with html, SASS, javascript, Splide JS, US Restaurant Menus API, and Webpack

View live project: https://wheelslandingpage.netlify.app/

### Features

- Mobile first design and responsive UI
- Local restaurant information
- Form validation / form handling
- Dynamic javascript components
- ES6 Modules

### What I learned

- Install dependencies with npm
- Bundle and minimize my code using Webpack.
- Preprocess my CSS using SASS and also create a maintainable file structure
- Create a dynamic javascript component
- Use Splide JS and US Resturant Menus API to create a local restaurant carousel
- Client side form validation
- Form handling using netlify and custom page redirects using javascript

### Problems I faced

- The trickiest part of this project was configuring Webpack for the first time.
- I initially tried to create a moving underline slider that was responsive at all breakpoints using percents. This resulted in the underline spacing being offset from the icon it was meant to highlight at some screen widths.
  - To solve this, I changed all percent to pixels and calculated the margin-left for the moving underline for each icon. I adjusted the margins for 3 breakpoints.

# Available Scripts

In the project directory:

`npm start`
Runs the app in the development mode.
Open http://localhost:8080/ to view in the browser.

`npm run build`
Builds the web page for production to the `dist` folder.
This build includes all modules bundled, minified, and hashes included in the filenames.
