const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");

const html = () => {
  return $.gulp
    .src($.path.src.html)
    .pipe(
      $.plumber({
        errorHandler: $.notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(
      $.gulpIf(
        $.app.isProd,
        htmlmin({
          collapseWhitespace: true,
        })
      )
    )
    .pipe($.gulp.dest($.path.build.html))
    .pipe($.browserSync.stream());
};

module.exports = html;
