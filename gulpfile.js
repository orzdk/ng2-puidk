const gulp = require('gulp');
const gulprename = require('gulp-rename');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var embedTemplates = require('gulp-angular-embed-templates');
var addsrc = require('gulp-add-src');
const del = require('del');

var systemjsbuilder = require('systemjs-builder');

gulp.task('clean', function () {
  return del(['wwwroot/**/*','!wwwroot/supersimpleserver.js']);
});

gulp.task('bundle-dependencies', function() {
  var builder = new systemjsbuilder('', 'systemjs.config.js'); // config.js is the name of systemjs config file
  return builder
    .bundle('app/app.js - [app/**/*.js]', 'wwwroot/dependencies.bundle.js', { minify: true})
    .then(function() {
      console.log('Build complete');
    })
    .catch(function(err) {
      console.log('Build error');
      console.log(err);
    });
});

gulp.task('compile', function () {
  return gulp
    .src(['app/**/*.ts', 'typings/**/*.d.ts'])
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('wwwroot/app'));
});

gulp.task('copy:libs', function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/**',
      'node_modules/@angular/**'
    ])
    .pipe(gulp.dest('wwwroot/lib'))
});

gulp.task('copy:root', function() {
  return gulp.src(['systemjs.config.js'], { base : './' })
    .pipe(gulp.dest('wwwroot'))
});

gulp.task('copy:html', function() {
  return gulp.src(['html/**/*'], { base : './' })
    .pipe(gulp.dest('wwwroot'))
});

gulp.task('copy:css', function() {
  return gulp.src(['css/**/*'], { base : './' })
    .pipe(gulp.dest('wwwroot'))
});

gulp.task('copy:img', function() {
  return gulp.src(['img/**/*'], { base : './' })
    .pipe(gulp.dest('wwwroot'))
});

gulp.task('copy:fonts', function() {
  return gulp.src(['fonts/**/*'], { base : './' })
    .pipe(gulp.dest('wwwroot'))
});

gulp.task('fix-index', function() {
  return gulp.src('index.html')
    .pipe(htmlreplace({
        'vendor': ['lib/shim.min.js','lib/zone.js','lib/Reflect.js','lib/system.src.js'],
        'app':['dependencies.bundle.js']
    }))
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('default', ['clean'], function() {
    gulp.start('compile','bundle-dependencies','copy:libs','copy:root','fix-index','copy:css','copy:html','copy:img','copy:fonts');
});


