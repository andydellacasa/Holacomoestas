const gulp = require('gulp');

gulp.task('default', () =>
  gulp.src('./Holacomoestas')
    .pipe(gulp.dest('./Holacomoestas'))
  );


gulp.task('default', () => {
  gulp.watch('./Holacomoestas', ['default']);
});
