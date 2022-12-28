const { series, parallel, src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoPrefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const cssnano = require("gulp-cssnano");
const plumber = require("gulp-plumber");
const del = require("del");

const path = {
  src: {
    styles: `./src/scss/**/*.scss`,
    html: `./src/html/*.html`,
  },
  build: {
    styles: `./build/css`,
    html: `./build`,
  },
};

const styles = () => {
  return src(path.src.styles)
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(dest(path.build.styles));
};

exports.default = function () {
  watch(path.src.styles, styles);
};
