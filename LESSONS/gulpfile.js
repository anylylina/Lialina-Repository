const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const watch = require("gulp-watch");

gulp.task("scripts", function () {
  return gulp.
  .src("lesson_22/js/*.js");
  .pipe(concat())
});
