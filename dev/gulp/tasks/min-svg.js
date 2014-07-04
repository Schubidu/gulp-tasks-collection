var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    config = require('../config.js');


// Concatenate & Minify SVG
gulp.task('min-svg', ['sprites']);
