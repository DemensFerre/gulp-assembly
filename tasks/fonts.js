const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const path = require("../config/path.js");

const fonts = () => {
  return src(path.src.fonts)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "FONTS",
          message: error.message,
        })),
      })
    )
    .pipe(dest(path.build.fonts));
};

module.exports = fonts;
