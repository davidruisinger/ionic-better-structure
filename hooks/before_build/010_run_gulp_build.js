#!/usr/bin/env node

var gulp = require('gulp');
var path  = require('path');

var rootdir = process.argv[2];
var gulpfile = path.join(rootdir, 'gulpfile.js');

process.stdout.write('[GULP] Running "gulp build" task\n');

require(gulpfile);

// execute specific gulp task
gulp.start('build');