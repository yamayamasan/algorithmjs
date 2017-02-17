import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', ['trans:ws']);

gulp.task('trans:ws', () => {
  return gulp.src('./functions.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./ws.js'));;
  ;
});
