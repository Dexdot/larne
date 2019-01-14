/* eslint-disable */

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  fileinclude = require('gulp-file-include'),
  named = require('vinyl-named'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  del = require('del'),
  notify = require('gulp-notify'),
  svgmin = require('gulp-svgmin'),
  svgstore = require('gulp-svgstore'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  mmq = require('gulp-merge-media-queries'),
  plumber = require('gulp-plumber'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      host: '192.168.1.108',
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('js', function() {
  return gulp
    .src('./app/js/pages/*.js')
    .pipe(plumber())
    .pipe(named())
    .pipe(
      webpackStream({
        module: {
          rules: [
            {
              loader: 'babel-loader',
              test: /\.(js)$/,
              exclude: /(node_modules)/
            }
          ]
        }
      })
    )
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js-min', function() {
  return gulp
    .src('./app/js/pages/*.js')
    .pipe(plumber())
    .pipe(named())
    .pipe(
      webpackStream(
        {
          module: {
            rules: [
              {
                loader: 'babel-loader',
                test: /\.(js)$/,
                exclude: /(node_modules)/
              }
            ]
          },
          mode: 'production'
        },
        webpack
      )
    )
    .pipe(gulp.dest('./app/js'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', function() {
  return gulp
    .src('app/sass/**/*.sass')
    .pipe(
      sass({ outputStyle: 'expand', precision: 5 }).on(
        'error',
        notify.onError()
      )
    )
    .pipe(rename({ suffix: '.min', prefix: '' }))
    .pipe(
      postcss([
        autoprefixer({
          browsers: ['last 3 versions'],
          cascade: false
        })
        // mqpacker()
      ])
    )
    .pipe(
      mmq({
        log: true
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', function() {
  return gulp
    .src(['app/html/pages/*.html'])
    .pipe(plumber())
    .pipe(
      fileinclude({
        prefix: '@',
        basepath: '@file'
      })
    )
    .pipe(gulp.dest('./app/'));
});

gulp.task('sprite', function() {
  return gulp
    .src('app/img/svg/*.svg')
    .pipe(plumber())
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('app/img/'));
});

gulp.task('removedist', function() {
  return del.sync('dist');
});

gulp.task('watch', ['html', 'sass', 'js', 'browser-sync'], function() {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch(['app/js/blocks/*.js'], ['js']);
  gulp.watch(['app/js/pages/*.js'], ['js']);
  gulp.watch(['app/html/**/*.html', 'app/html/svg/*.svg'], ['html']);
  gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('build', ['removedist', 'html', 'sass', 'js-min'], function() {
  var buildFiles = gulp.src(['app/*.html']).pipe(gulp.dest('dist'));

  var buildFonts = gulp.src(['app/fonts/**/*']).pipe(gulp.dest('dist/fonts'));

  var buildCss = gulp.src(['app/css/main.min.css']).pipe(gulp.dest('dist/css'));

  var buildJs = gulp.src(['app/js/*.js']).pipe(gulp.dest('dist/js'));

  var buildImg = gulp.src(['app/img/**/*']).pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['watch']);
