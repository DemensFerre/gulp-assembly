const { series, parallel, watch } = require("gulp");
const browserSync = require("browser-sync").create();

const path = require("./config/path.js");

const html = require("./tasks/html");
const styles = require("./tasks/styles");
const js = require("./tasks/js");

const watcher = () => {
  watch(path.watch.html, html).on("all", browserSync.reload);
  watch(path.watch.styles, styles).on("all", browserSync.reload);
  watch(path.watch.js, js).on("all", browserSync.reload);
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./build",
    },
  });
};

exports.css = styles;
exports.dev = series(parallel(html, styles, js), parallel(watcher, server));
