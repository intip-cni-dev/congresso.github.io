const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const css = require("gulp-clean-css");
const babel = require('gulp-babel');

const MODULES = ['bootstrap', 'scripts', 'watch'];

gulp.task('bootstrap', () => {
    return gulp.src('assets/src/scss/*.scss')
        .pipe(sass())
        .pipe(css())
        .pipe(gulp.dest('./assets/dist/css/'));
})

gulp.task('scripts', () => {
    return gulp.src('assets/src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./assets/dist/js/'));
})

gulp.task('watch', gulp.series(() => {
    gulp.watch(['assets/src/scss/*.scss', 'assets/src/js/*.js'], gulp.series(MODULES));
}))

gulp.task('default', gulp.series(MODULES));