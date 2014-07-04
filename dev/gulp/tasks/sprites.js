var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    svgSymbols = require('gulp-svg-symbols'),
    svgo = require('gulp-svgo'),
    rename = require("gulp-rename"),
    config = require('../config.js');

gulp.task('sprites', function () {
    return gulp.src(config.app + 'svg/*.svg')
        .pipe(svgo())
        .pipe(svgSymbols({
            svgId: 'icon-%f',
            className: '.icon-%f'
        }))
        // rename svg-symboles to svg-sprites
        .pipe(rename({
            basename: "sprites"
        }))
        // change css to scss with underscore prefix
        .pipe(gulpif(/[.]css$/, rename({
            prefix: "_",
            basename: "svg-sprites",
            extname: ".scss"
        })))
        // write scss to app-folder and the sprites.svg to dist/assets
        .pipe(gulpif(/[.]scss$/, gulp.dest(config.app_scss), gulp.dest(config.dist + 'assets')));
});