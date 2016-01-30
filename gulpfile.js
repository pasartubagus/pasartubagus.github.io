var gulp =  require('gulp');

gulp.task('default', function (){
  var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');
  var csso = require('gulp-csso');

  return gulp.src('./style.css')
        .pipe(postcss([ autoprefixer({browsers: ['last 2 versions']}) ]))
        .pipe(csso())
        .pipe(gulp.dest('./dist'));
});
