var gulp = require("gulp");
var webserver = require("gulp-webserver");
var gulpInject = require("gulp-inject");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
//var mainbBowerFiles = require("main-bower-files");
var del = require("del");

var paths = {
    temp: "tempApp",
    appSrc: ["app/*.*"],
}

gulp.task("default", ["watch"]);

gulp.task('jsAll', ["jsAllMinify"], function() {
    gulp.src([
        'app/**/*.js'
    ])
        .pipe(concat('all.js'))
    //.pipe(uglify())
    .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(gulp.dest(paths.temp));
});

gulp.task('jsAllMinify', function() {
    gulp.src([
        'app/**/*.js'
    ])
        .pipe(concat('all.min.js'))
    //.pipe(ngAnnotate())
    .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(uglify())
        .on('error', notify.onError("Error: <%= error.message %>"))
        .pipe(gulp.dest(paths.temp));
});

gulp.task("copyAppFiles",  function() {
    gulp.src(paths.appSrc).pipe(gulp.dest(paths.temp));
});

gulp.task("watch", ["serve"], function() {
    gulp.watch(paths.appSrc, ["copyAppFiles"]);
});

gulp.task("serve", ["copyAppFiles"], function() {

    gulp.src(paths.temp)
        .pipe(webserver({
            fallback: 'test.html',
            livereload: true,
            port: '1111',
        }))
});