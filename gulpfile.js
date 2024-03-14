const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("node-sass"));
const uglify = require('gulp-uglify');

function sassTask(done) {
	gulp.src("./sass/**/*.scss")
    .pipe(sass())
		.pipe(cssnano())
		.pipe(concat("styles.css"))
		.pipe(
			rename(function (path) {
				if (!path.extname.endsWith(".map")) {
					path.basename += ".min";
				}
			})
		)
		.pipe(gulp.dest("./dist"));
	done();
}

function htmlTask(done) {
	gulp.src("./index.html")
		.pipe(
			htmlmin({
				collapseWhitespace: true,
			})
		)
		.pipe(gulp.dest("./dist/"));
	done();
}

function imgTask(done) {
	gulp.src("./img/**/*.+(png|jpg|svg|webp)").pipe(imagemin()).pipe(gulp.dest("./dist/img/"));
	done();
}

function jsTask(done) {
	gulp.src(["./js/aosSetup.js", "./js/main.js"])
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(gulp.dest("./dist/"))
	done();
}

function cleanDist(done) {
	del(["./dist/**/*"]);
	done();
}

exports.sassTask = sassTask;
exports.htmlTask = htmlTask;
exports.imgTask = imgTask;
exports.jsTask = jsTask;

exports.build = gulp.series(cleanDist, sassTask, htmlTask, imgTask);
