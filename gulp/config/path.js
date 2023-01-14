const build = "./public";
const src = "./src";

export const path = {
	root: `${build}`,

	src: {
		styles: `${src}/scss/*.scss`,
		html: `${src}/html/*.html`,
		js: `${src}/js/*.js`,
		img: `${src}/img/**/*.*`,
		fonts: `${src}/fonts/*.*`,
	},
	build: {
		styles: `${build}/css`,
		html: `${build}`,
		js: `${build}/js`,
		img: `${build}/img`,
		fonts: `${build}/fonts`,
	},
	watch: {
		styles: `${src}/scss/**/*.scss`,
		html: `${src}/**/*.html`,
		js: `${src}/js/**/*.js`,
		img: `${src}/img/**/*.*`,
		fonts: `${src}/fonts/*.*`,
	},
};
