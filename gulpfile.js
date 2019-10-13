let gulp = require('gulp');
let sass = require('gulp-sass');

function compile() {
    return gulp.src("./css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest((file) => {
            return file.base;
        }));
};

function watch() {
    return gulp.watch('./css/*.scss', compile);
};

exports.default = function() {
    return compile();
};

exports.compile = compile;
exports.watch = watch;


// gulp --tasks  to see registered tasks