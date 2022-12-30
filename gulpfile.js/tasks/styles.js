const sass = require("gulp-sass")(require("sass"));
const autoPrefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const gcmq = require("gulp-group-css-media-queries");
const rename = require("gulp-rename");

const styles = () => {
  return $.gulp
    .src($.path.src.styles, {
      sourcemaps: $.app.isDev,
    })
    .pipe(
      $.plumber({
        errorHandler: $.notify.onError((error) => ({
          title: "SCSS",
          message: error.message,
        })),
      })
    )
    .pipe(sass())
    .pipe(gcmq())
    .pipe($.gulpIf($.app.isProd, autoPrefixer()))
    .pipe(
      $.gulpIf(
        $.app.isProd,
        $.gulp.dest($.path.build.styles, {
          sourcemaps: $.app.isDev,
        })
      )
    )
    .pipe($.gulpIf($.app.isProd, csso()))
    .pipe(
      $.gulpIf(
        $.app.isProd,
        rename({
          suffix: ".min",
        })
      )
    )
    .pipe(
      $.gulp.dest($.path.build.styles, {
        sourcemaps: $.app.isDev,
      })
    )
    .pipe($.browserSync.stream());
};

module.exports = styles;
