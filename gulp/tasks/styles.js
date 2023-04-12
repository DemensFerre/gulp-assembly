import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import gcmq from "gulp-group-css-media-queries";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

export const styles = () => {
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
		.pipe($.gulpIf($.app.isProd, autoPrefixer()))
		.pipe($.gulpIf($.app.isProd, gcmq()))
		.pipe($.gulpIf($.app.isProd, csso()))
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe($.gulp.dest($.path.build.styles))
		.pipe($.browserSync.stream());
};
