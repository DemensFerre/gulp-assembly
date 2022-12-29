const { src, dest } = require("gulp");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const path = require("../config/path.js");

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
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest(path.build.html));
};

module.exports = html;
