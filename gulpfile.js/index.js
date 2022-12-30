global.$ = {
  gulp: require("gulp"),
  browserSync: require("browser-sync").create(),
  plumber: require("gulp-plumber"),
  notify: require("gulp-notify"),
  gulpIf: require("gulp-if"),
  path: require("./config/path.js"),
  app: require("./config/app.js"),
};

const server = require("./tasks/server");
const html = require("./tasks/html");
const styles = require("./tasks/styles");
const js = require("./tasks/js");
const img = require("./tasks/img");
const fonts = require("./tasks/fonts");

const watcher = () => {
  $.gulp.watch($.path.watch.html, html);
  $.gulp.watch($.path.watch.styles, styles);
  $.gulp.watch($.path.watch.js, js);
  $.gulp.watch($.path.watch.img, img);
};

const build = $.gulp.parallel(html, styles, js, img, fonts);
const dev = $.gulp.series(build, $.gulp.parallel(watcher, server));

exports.default = $.app.isProd ? build : dev;
