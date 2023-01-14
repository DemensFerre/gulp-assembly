export const server = () => {
	$.browserSync.init({
		server: {
			baseDir: "./build",
		},
	});
};
