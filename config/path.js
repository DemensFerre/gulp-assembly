module.exports = {
  src: {
    styles: `./src/scss/*.scss`,
    html: `./src/html/*.html`,
    js: `./src/js/*.js`,
  },
  build: {
    styles: `./build/css`,
    html: `./build`,
    js: `./build/js`,
  },
  watch: {
    styles: `./src/scss/**/*.scss`,
    html: `./src/**/*.html`,
    js: `./src/js/**/*.js`,
  },
};
