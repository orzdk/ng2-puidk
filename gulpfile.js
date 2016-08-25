const gulp = require('gulp');
const gulprename = require('gulp-rename');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del(['dist/**/*','!dist/supersimpleserver.js']);
});

// TypeScript compile
gulp.task('compile', function () {
  return gulp
    .src(['app/**/*.ts', 'typings/**/*.d.ts'])
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:libs', function() {
  return gulp.src([
      'zone.js/dist/zone.js',
      'reflect-metadata/Reflect.js',
      'systemjs/dist/system.src.js',
      'rxjs/**',
      '@angular/**'
    ], {cwd: "node_modules/**"})
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:root', function() {
  return gulp.src(['systemjs.config.js'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:root2', function() {
  return gulp.src(['index-prod.html'], { base : './' })
    .pipe(gulprename("index.html"))
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:html', function() {
  return gulp.src(['html/**/*'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:css', function() {
  return gulp.src(['css/**/*'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:img', function() {
  return gulp.src(['img/**/*'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:fonts', function() {
  return gulp.src(['fonts/**/*'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('copy:all', ['copy:libs','copy:root','copy:css','copy:img','copy:fonts'], function() {
  return gulp.src(['app/**/*', 'index.html', 'styles.css', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['clean'], function() {
    gulp.start('compile','copy:all');
});
