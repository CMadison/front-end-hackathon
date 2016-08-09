var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('build', function() {
  console.log('Gulping');
  gulp.src(['js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('deploy.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
