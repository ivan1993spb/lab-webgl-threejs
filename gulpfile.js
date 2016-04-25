'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');

gulp.task('build', function() {
    return gulp.src("src/*.js")
        .pipe(webpack({
            externals: {
                "three.js": "THREE"
            }
        }))
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function (cb) {
    gulp.watch(["src/*.js", "src/models/*.json"], ['build']);
});
