/**
 * Created by shehbaz on 1/27/17.
 */
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var babel = require('gulp-babel');



gulp.task('templates', function () {
    gulp.src('index.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('output'));
});

gulp.task('scss', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('output/css'));
});
gulp.task('babel', function () {
   return gulp.src('babel/index.babel')
       .pipe(babel({
           presets: ['es2015']
       }))
       .pipe(gulp.dest('output/js'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('default', ['templates', 'scss','babel']);