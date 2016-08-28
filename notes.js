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

.headerBox{
  margin-top:5px;
  margin-bottom:5px;
  background-color: #000;
  height:150px;
  border-top-left-radius:75px;
  border-bottom-left-radius:75px;
  border-top-right-radius:15px 25px;
  border-bottom-right-radius:15px 25px;
  font-size:67px;
  text-shadow: 2px 2px #ff0000;
}

.boxheader {
  font-size:30px; 
}

.standardBox{
  background-color: #000;
  width:325px;
  border-top-left-radius:15px 25px;
  border-bottom-left-radius:15px 25px;
  border-top-right-radius:15px 25px;
  border-bottom-right-radius:15px 25px;
  margin:5pX 10px 5pX 10px;
  padding:15pX;
}

.redBox {
  box-shadow: inset 4px 4px 20px rgba(255, 0, 0, 0.75), 3px 3px 10px rgba(18, 52, 86, 0.5);
}

.goMax {
  width:95%;
  height:160px;
}

.goLeft{
  float:left;
}

.goRight{
  float:right;
}

.textCenter {
  text-align:center;
}

.w200{
  width:200px;
}


.infobox{

}

.bigbox{

}

.newbox{

}


