const { series, parallel, src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const path = {
  src: {
    styles: `./src/scss/**/*.scss`,
  },
  put: {
    styles: `./css`,
  },
};

const styles = () => {
  return src(path.src.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(dest(path.put.styles));
};

exports.default = function () {
  watch(path.src.styles, styles);
};
