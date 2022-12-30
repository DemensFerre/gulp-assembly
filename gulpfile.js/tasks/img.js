const img = () => {
  return $.gulp
    .src($.path.src.img)
    .pipe(
      $.plumber({
        errorHandler: $.notify.onError((error) => ({
          title: "IMG",
          message: error.message,
        })),
      })
    )
    .pipe($.gulp.dest($.path.build.img))
    .pipe($.browserSync.stream());
};

module.exports = img;
