const { src, dest, series, watch } = require('gulp');
const cssmin = require('gulp-cssmin');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean() {
  return del('dest');
}

function img() {
  return src('src/img/**/*.{jpg,jpeg,svg,png,ico,webp}')
    .pipe(dest('dest/img/'));
}

function css() {
  return src('src/css/*.css')
    // .pipe(cssmin())
    .pipe(dest('dest/css'));
}

function js() {
  return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('dest/js'));
}

function html() {
  return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dest/'));
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './dest',
      index: '/index.html'
    }
  });

  watch('src/css/**/*.css', series(css)).on('change', browserSync.reload);
  watch('src/**.html', series(html)).on('change', browserSync.reload);
  watch('src/**.js', series(js)).on('change', browserSync.reload);
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
// function build(cb) {
//   // body omitted
//
//   cb();
// }

exports.images = img;
exports.css = css;
exports.server = serve;
exports.js = js;

exports.default = series(clean, css, js, img);
exports.serve = series(clean, css, js, serve);
exports.build = series(clean, html, css, js, img, serve);
