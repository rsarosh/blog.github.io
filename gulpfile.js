var gulp = require('gulp');
var markdown = require('gulp-markdown-it');
var header = require('gulp-header');
var footer = require('gulp-footer');

gulp.task('markdown', function() {
  return gulp
    .src('*.md')
    .pipe(markdown())
    .pipe(header('<html><link rel="stylesheet" type="text/css" href="./style.css"><header><img src="image/header.jpg" style="width: 100%; Height:150px" ><div style="text-align: center;"><div style="font-size: xx-large;">Rafat Sarosh</div><a href="index.html">Home </a>| <a href="https://www.linkedin.com/in/rafatsarosh/" windows="_new">About </a></div><br /></header>  '))

    .pipe(footer('<a href="https://github.com/rsarosh/rsarosh.github.io/issues/new" window="new"> comment? </a> </html>'))
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
     
    );
});


gulp.task('convert-md-to-html', function() {
  return gulp.watch('*.md', gulp.series(['markdown' ]));
});