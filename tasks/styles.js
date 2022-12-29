const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoPrefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const gcmq = require("gulp-group-css-media-queries");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const gulpIf = require("gulp-if");

const path = require("../config/path.js");
const app = require("../config/app.js");

const styles = () => {
  return src(path.src.styles, {
    sourcemaps: app.isDev,
  })
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
    .pipe(gulpIf(app.isProd, autoPrefixer()))
    .pipe(
      gulpIf(
        app.isProd,
        dest(path.build.styles, {
          sourcemaps: app.isDev,
        })
      )
    )
    .pipe(gulpIf(app.isProd, csso()))
    .pipe(
      gulpIf(
        app.isProd,
        rename({
          suffix: ".min",
        })
      )
    )
    .pipe(
      dest(path.build.styles, {
        sourcemaps: app.isDev,
      })
    );
};

module.exports = styles;
