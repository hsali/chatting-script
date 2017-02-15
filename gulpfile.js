/**
 * Created by shehbaz on 1/27/17.
 */
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var rename = require('gulp-rename');



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
   return gulp.src('babel/index.js')
       .pipe(babel({
           presets: ['es2015']
       }))
       .pipe(gulp.dest('output/js'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('production', ['templates', 'scss','babel']);


gulp.task('test-templates', function () {
    gulp.src('test.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('test'));
});

gulp.task('test-scss', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('test/css'));
});
gulp.task('test-babel', function () {
    return gulp.src('babel/index.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('test/js'));
});

gulp.task('default', ['test-templates', 'test-scss','test-babel']);