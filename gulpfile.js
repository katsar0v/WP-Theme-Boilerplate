var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

function do_scss(cb) {
    return gulp.src('assets/sass/**/*.scss') 
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
};

function do_ts(cb) {
    var tsResult = gulp.src('assets/ts/*.ts')
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('assets/js/'));
}


exports.css = do_scss
exports.js = do_ts
exports.watch = function () {
    watch([
        '**/*',
        '!css',
        '!node_modules/*'
    ], gulp.parallel(['scss', 'ts']));
}
