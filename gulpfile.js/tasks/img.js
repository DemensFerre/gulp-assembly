const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const path = require("../config/path.js");

const img = () => {
  return src(path.src.img)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "IMG",
          message: error.message,
        })),
      })
    )
    .pipe(dest(path.build.img));
};

module.exports = img;
