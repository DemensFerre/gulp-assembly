const server = () => {
  $.browserSync.init({
    server: {
      baseDir: "./build",
    },
  });
};

module.exports = server;
