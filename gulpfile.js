var gulp = require('gulp');
var less = require('gulp-less'),
    path = require('path');


gulp.task('watch', function () {
    gulp.watch('./Styles/less/*.less', ['my-less']);
});

gulp.task('my-less', function () {

    return gulp.src('./Styles/less/styles.less')
        .pipe(less().on('error', function (err) {
            console.log(err);
        }))

        .pipe(gulp.dest('./styles/css'));

});



//gulp.task('bootstrap-less', function () {
//
//    return gulp.src('./External/Bootstrap/less/bootstrap.less')
//        .pipe(less().on('error', function (err) {
//            console.log(err);
//        }))
//
//        .pipe(gulp.dest('./styles/css'));
//
//});


gulp.task('default', ['my-less', 'watch']);