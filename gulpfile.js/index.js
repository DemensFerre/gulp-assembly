const { series, parallel, watch } = require("gulp");
const browserSync = require("browser-sync").create();

const path = require("./config/path.js");
const app = require("./config/app.js");

const html = require("./tasks/html");
const styles = require("./tasks/styles");
const js = require("./tasks/js");
const img = require("./tasks/img");
const fonts = require("./tasks/fonts");

const watcher = () => {
  watch(path.watch.html, html).on("all", browserSync.reload);
  watch(path.watch.styles, styles).on("all", browserSync.reload);
  watch(path.watch.js, js).on("all", browserSync.reload);
  watch(path.watch.img, img).on("all", browserSync.reload);
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./build",
    },
  });
};

const build = parallel(html, styles, js, img, fonts);
const dev = series(build, parallel(watcher, server));

exports.default = app.isProd ? build : dev;
