var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    plumber = require('gulp-plumber'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config');

// Lint Task
gulp.task('lint', function () {
    return gulp.src([config.app_js + '*.js', '!' + config.app_js + 'bundle.js'])
        .pipe(jshint())
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jscs('./dev/resources/common/jscs.json'));
});
