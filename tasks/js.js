const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const path = require("../config/path.js");

const js = () => {
  return src(path.src.js)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "JS",
          message: error.message,
        })),
      })
    )
    .pipe(uglify())
    .pipe(dest(path.build.js));
};

module.exports = js;
