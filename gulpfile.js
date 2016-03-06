var gulp = require('gulp');
var less = require('gulp-less'),
    path = require('path');


gulp.task('watch', function () {
    gulp.watch('**/*.less', ['less']);
});

gulp.task('less', function () {

    return gulp.src('./External/Bootstrap/less/bootstrap.less')
        .pipe(less().on('error', function (err) {
            console.log(err);
        }))

        .pipe(gulp.dest('./styles/css'));

});

gulp.task('default', ['less', 'watch']);