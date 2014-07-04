var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('server', function() {
  connect.server({
    root: ['app', 'tmp'],
    livereload: true
  });
});

gulp.task('server:reload', function() {
  connect.reload();
});