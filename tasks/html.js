const { src, dest } = require("gulp");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const gulpIf = require("gulp-if");

const path = require("../config/path.js");
const app = require("../config/app.js");

const html = () => {
  return src(path.src.html)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(
      gulpIf(
        app.isProd,
        htmlmin({
          collapseWhitespace: true,
        })
      )
    )
    .pipe(dest(path.build.html));
};

module.exports = html;
