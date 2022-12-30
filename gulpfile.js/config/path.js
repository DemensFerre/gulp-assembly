const build = "./build";
const src = "./src";

module.exports = {
  root: `${build}`,

  src: {
    styles: `${src}/scss/*.scss`,
    html: `${src}/html/*.html`,
    js: `${src}/js/*.js`,
    img: `${src}/img/**/*.*`,
    fonts: `${src}/fonts/*.*`,
  },
  build: {
    styles: `${build}/css`,
    html: `${build}`,
    js: `${build}/js`,
    img: `${build}/img`,
    fonts: `${build}/fonts`,
  },
  watch: {
    styles: `${src}/scss/**/*.scss`,
    html: `${src}/**/*.html`,
    js: `${src}/js/**/*.js`,
    img: `${src}/img/**/*.*`,
    fonts: `${src}/fonts/*.*`,
  },
};
