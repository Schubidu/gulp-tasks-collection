var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    connect = require('gulp-connect'),
    watchify = require('watchify'),
    config = require('../config');

gulp.task('watchify', ['lint'], function() {
  var bundler = watchify(config.app_jsIndex);

  // Optionally, you can apply transforms
  // and other configuration options on the
  // bundler just as you would with browserify
//  bundler.transform('brfs');

  bundler.on('update', rebundle);

  function rebundle () {
    return bundler.bundle({ debug: true })
      .pipe(source(config.dist_jsBundle))
      .pipe(gulp.dest(config.app_js))
      .pipe(connect.reload());

  }

  return rebundle()
});