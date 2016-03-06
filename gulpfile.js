var gulp = require('gulp');
var less = require('gulp-less'),
    path = require('path');



gulp.task('default', function () {
    gulp.src('./styles/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./styles/css'));
});