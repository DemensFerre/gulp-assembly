const { src, dest } = require("gulp");
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
    .pipe(dest(path.build.js));
};

module.exports = js;
