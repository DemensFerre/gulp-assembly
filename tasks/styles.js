const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoPrefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const gcmq = require("gulp-group-css-media-queries");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const rename = require("gulp-rename");

const path = require("../config/path.js");

const styles = () => {
  return src(path.src.styles)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe(sass())
    .pipe(gcmq())
    .pipe(autoPrefixer())
    .pipe(dest(path.build.styles))
    .pipe(csso())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(dest(path.build.styles));
};

module.exports = styles;
