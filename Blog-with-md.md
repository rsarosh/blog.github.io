
# World Simplest Blogging Platform
 To write this blog, I am using simplest possible blogging platform. I am using [Github Pages]("https://pages.github.com/) to create my blog. But, wait i am not even using Jekyll. 

 In this blog post i am talking about how you can maintain a blog from Github, VS Code and with markdown files. Please check the [How you can create a website from Github](https://pages.github.com/). However, github recommends to use Jekyll. It may be a simple tool, but i could't get it installed properly on my window machine. The installation process was scary,  hundred's of ruby files, Gems etc, and god knows what all dependencies where getting downloaded on my machine. 

I wanted to have lowest possible load of tools and tech for my blogging. I wanted to write my blogs in markdown, like readme files. However, md files are not liked by the browsers. They want HTML files. So, my first instinct was to use 'github actions' to convert the checked in md files into html. But then the problem was to see the html output too late.

## Convert the markdown to html
So, I thought, using one of the extensions I will convert the md to html in VSCode. There are many "Run on Save" Extension for VS Code. but none work properly in the my VSCode. Their documentation seems very straight forward, but unfortunately they don't work as advertised. So, lets go more simpler.

Best option i found was to use Gulp and markdown-it. [See more here](
https://code.visualstudio.com/docs/languages/markdown#_automating-markdown-compilation)

Below few lines of code is only what you need. This code converts md files to html. Adds style sheet to the created html as a header and using gulp-footer formatted the file to a proper html file. 

Here is my Gulp file:

            var gulp = require('gulp');
            var markdown = require('gulp-markdown-it');
            var header = require('gulp-header');
            var footer = require('gulp-footer');

            gulp.task('markdown', function() {
                return gulp
                .src('*.md')
                .pipe(markdown())
                .pipe(header('<html> <header><link rel="stylesheet" type="text/css" href="./style.css"> </header>'))
                .pipe(footer('</html>'))
                .pipe(
                gulp.dest(function(f) {
                    return f.base;
                })
                .pipe(header('</html> '))
                );
            });

            gulp.task('convert-md-to-html', function() {
                return gulp.watch('*.md', gulp.series(['markdown']));
            });
 

> of course don't forget to npm install the packages.

Here is the Task.json file

            {
            "version": "2.0.0",
            "tasks": [
                {
                "type": "gulp",
                "task": "convert-md-to-html",
                "problemMatcher": [],
                "group": {
                    "kind": "build",
                    "isDefault": true
                }
                }
            ]
            }





What i like about this approach is there is no complicated tools are needed. Just write a md file, push it to GitHub and it get published. 
