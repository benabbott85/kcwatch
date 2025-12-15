const gulp         = require('gulp');
const path         = require('path');
const gulpSass     = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const connect      = require('gulp-connect');
const open         = require('gulp-open');

const Paths = {
  HERE                 : './',
  DIST                 : 'dist/',
  CSS                  : './assets/css/',
  SCSS_TOOLKIT_SOURCES : './assets/scss/now-ui-kit.scss',
  SCSS                 : './assets/scss/**/**'
};

// Compile SCSS
function compileScss() {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS))
    .pipe(connect.reload());
}

// Watch SCSS
function watchFiles() {
  gulp.watch(Paths.SCSS, compileScss);
}

// Server
function server() {
  connect.server({
    port: 9001,
    livereload: true
  });
}

// Open browser
function openBrowser() {
  return gulp.src(__filename)
    .pipe(open({ uri: 'http://localhost:9001/presentation.html' }));
}

// Define tasks
gulp.task('compile:scss', compileScss);
gulp.task('watch', watchFiles);
gulp.task('server', server);

// Default task (runs server + watch in parallel, then opens browser)
gulp.task('default', gulp.series(
  gulp.parallel(server, watchFiles),
  openBrowser
));
