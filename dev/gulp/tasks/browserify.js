var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    config = require('../config');

gulp.task('browserify', ['lint'], function () {
    return browserify(config.app_jsIndex)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source(config.dist_jsBundle))
        // Start piping stream to tasks!
        .pipe(gulp.dest(config.app_js));
});
