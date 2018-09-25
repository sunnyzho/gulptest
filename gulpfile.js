let gulp = require("gulp");
let clean = require("gulp-clean");
let less = require("gulp-less");
let cssmin = require("gulp-cssmin");
let rename = require("gulp-rename");
let htmlmin = require("gulp-htmlmin");
let jsmin = require("gulp-uglify");
let concat = require("gulp-concat");

let app = {
	src: "src",
	dist: "dist"
}

let clean_resource = function(){
	gulp.src("dist")
		.pipe(clean());
};

gulp.task("clean", clean_resource);

gulp.task("default",function(){
	gulp.src(app.src)
		.pipe(less())
		.pipe(cssmin())
		.pipe(rename("broostrap.min.css"))
	    .pipe(gulp.dest(app.dist));

glup.src("src/*.htm")
	.pipe(htmlmin({
		removeComments:true,
		collapseWhitespace:true
	}))
	.pipe(gulp.dest("dist/src"));

gulp.src("src/*.js")
	.pipe(concat("all.min.js"))
	.pipe(jsmin())
	.pipe(gulp.dest("dist/src"));

});


