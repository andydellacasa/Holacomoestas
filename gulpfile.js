const gulp = require('gulp');

gulp.task('default', () =>
  gulp.src('./*')
    .pipe(gulp.dest('./'))
  );


gulp.task('default', () => {
  gulp.watch('./', ['default']);
});
