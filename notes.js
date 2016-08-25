tsconfig.json:
"outDir": "dist/app",



// gulp.task("compile", () => {
//     var tsResult = gulp.src("src/**/*.ts")
//         .pipe(sourcemaps.init())
//         .pipe(tsc(tsProject));
//     return tsResult.js
//         .pipe(sourcemaps.write("."))
//         .pipe(gulp.dest("build"));
// });


gulp.task('copy:libs', function() {
  return gulp.src([
      //'es6-shim/es6-shim.min.js',
      //'systemjs/dist/system-polyfills.js',
      //'reflect-metadata/Reflect.js',
      'core-js/client/shim.min.js',
      'zone.js/dist/zone.js',
      'reflect-metadata/Reflect.js',
      'systemjs/dist/system.src.js',
      'rxjs/**',
      '@angular/**'
    ], {cwd: "node_modules/**"})
    .pipe(gulp.dest('dist/lib'))
});
