const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const gulpIf = require("gulp-if");

const path = require("../config/path.js");
const app = require("../config/app.js");

const js = () => {
  return src(path.src.js, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "JS",
          message: error.message,
        })),
      })
    )
    .pipe(gulpIf(app.isProd, dest(path.build.js, { sourcemaps: app.isDev })))
    .pipe(gulpIf(app.isProd, uglify()))
    .pipe(
      gulpIf(
        app.isProd,
        rename({
          suffix: ".min",
        })
      )
    )
    .pipe(dest(path.build.js, { sourcemaps: app.isDev }));
};

module.exports = js;
