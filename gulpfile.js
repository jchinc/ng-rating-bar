var gulp = require('gulp');

var del = require('del');

var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('copy-package-json', () => {

    gulp.src([
        'src/package.json'
    ]).pipe(gulp.dest('dist/'));
});