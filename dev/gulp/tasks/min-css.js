var gulp = require('gulp'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    config = require('../config.js');

// Minify CSS
gulp.task('min-css', ['ruby-sass'], function () {
    return gulp.src([config.app + 'css/*.css', '!' + config.app + 'css/*.min.css'])
        .pipe(minifyCSS())
        .pipe(rename(function (path) {
            path.basename += ".min"
        }))
        .pipe(gulp.dest(config.dist + 'css'));
});
