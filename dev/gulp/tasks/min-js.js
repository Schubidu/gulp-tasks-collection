var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    config = require('../config.js');


// Concatenate & Minify JS
gulp.task('min-js', ['browserify'], function () {
    return gulp.src(config.app_js + '/' + config.dist_jsBundle)
        .pipe(rename(function ( path ) {
            path.basename += ".min";
        }))
        .pipe(uglify())
        .pipe(gulp.dest(config.dist_js + '/' + config.dist_jsBundle));
});
