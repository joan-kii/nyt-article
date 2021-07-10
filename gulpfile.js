var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('run', async function() {
  gulp.src('./styles/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});