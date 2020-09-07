/* eslint max-len:0, no-console:0, func-names: 0 */
const gulp = require('gulp');
const changed = require('gulp-changed');
const size = require('gulp-size');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const merge = require('merge-stream');


gulp.task('m', () => {
  const imgSrc = [
    'src/asset/img_src/**/*.+(jpg|png|gif)',
    '!src/asset/img_src/_*',
  ];
  const otherSrc = imgSrc.map(imgPath => (imgPath.indexOf('!') === 0 ? imgPath.substr(1) : `!${imgPath}`));
  const imgDest = 'src/asset/img';

  const taskOtherSrc = gulp.src(otherSrc)
    .pipe(changed(imgDest))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(imgDest));

  const taskImgSrc = gulp.src(imgSrc)
    .pipe(changed(imgDest))
    .pipe(size({ showFiles: true }))
    .pipe(imagemin([
      imageminMozjpeg({ quality: 90 }),
      imageminPngquant({ quality: 90 }),
    ]))
    .pipe(gulp.dest(imgDest));

  return merge(taskOtherSrc, taskImgSrc);
});

gulp.task('watch', () => {
  gulp.watch('src/asset/img_src/**/*', ['m']);
});

gulp.task('default', ['m', 'watch']);
