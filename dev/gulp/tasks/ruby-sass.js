var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config.js');

// Compile Our Sass
gulp.task('ruby-sass', function () {
    return gulp.src(config.app + 'scss/**/*.scss')
        .pipe(sass({sourcemap: true, style: 'compact'}))
        .on('error', handleErrors)
        .pipe(prefix("last 2 versions", "> 1%", "ie 8"))
        .pipe(gulp.dest(config.app + 'css'))
        .pipe(connect.reload());
});

