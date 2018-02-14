var gulp = require('gulp');

var del = require('del');

var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('copy-package-json', () => {

    gulp.src([
        'src/package.json'
    ]).pipe(gulp.dest('dist/'));
});

gulp.task('copy-d-ts', () => {

    gulp.src([
        'build/**/*.*',
        '!build/**/*.js'
    ]).pipe(gulp.dest('dist/'));
});

gulp.task('copy-ts', () => {

    gulp.src([
        './*.ts',
    ]).pipe(gulp.dest('./tmp'));
});

gulp.task('transpile-inline', () => {
    gulp.src(['./src/**/*.ts'])
        .pipe($.inlineNg2Template({
            base: './src/',
            useRelativePath: true
        }))
        .pipe(gulp.dest('./tmp/src'));
})