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


  return tsResult.js.pipe(addsrc.append('config-prod.js'))
                    .pipe(concat('app.min.js'))
                    .pipe(uglify())
                    .pipe(gulp.dest('./dist'));

  
  gem:


gulp.task('app.systemjs.bundle2', function () {

  // optional constructor options
  // sets the baseURL and loads the configuration file
  var builder = new systemjsbuilder('path/to/baseURL', 'path/to/system/config-file.js');

  builder
  .bundle('local/module.js', 'outfile.js')
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });

});

gulp.task('boot-bundle', function() {
  gulp.src('config.prod.js')
    .pipe(concat('puidk.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./wwwroot'));
});

