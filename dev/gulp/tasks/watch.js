var gulp = require('gulp'),
    config = require('../config');

// Watch Files For Changes
gulp.task('watch', ['sprites', 'ruby-sass', 'watchify'], function () {
    gulp.watch(config.app + 'svg/**/*.svg', ['sprites']);
    gulp.watch(config.app + 'scss/**/*.scss', ['ruby-sass']);
    gulp.watch(config.app + 'js/**/*.js', ['watchify']);
});

