var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var jshint = require('gulp-jshint');
var del = require('del');
var htmlreplace = require('gulp-html-replace');
var vinylPaths = require('vinyl-paths');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require("gulp-uglify");
var templateCache = require('gulp-angular-templatecache');

var paths = {
	html: ['./dev/index.html'],
	sass: ['./dev/styles/**/*.scss'],
	scripts: ['./dev/app/**/*.js'],
	templates: ['./dev/app/**/*.html'],
	lib: ['./dev/lib/**'],
	dist: ['./www/']
};

var files = {
	jsbundle: 'app.bundle.min.js',
	appcss: 'app.css'
};

gulp.task('default', ['sass']);

gulp.task('build', ['sass', 'scripts', 'index', 'copy']);

gulp.task('clean', function() {
	return gulp.src(paths.dist, {
			read: false
		})
		.pipe(vinylPaths(del))
});

// Prepare Index.html for dist - ie. using min files
gulp.task('index', ['clean'], function() {
	gulp.src(paths.html)
		.pipe(htmlreplace({
			'css': 'css/ionic.app.min.css',
			'js': 'js/app.bundle.min.js',
			'templates': 'js/templates.js'
		}))
		.pipe(gulp.dest(paths.dist + '.'));
});

gulp.task('sass', function(done) {
	gulp.src('./dev/styles/ionic.app.scss')
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./dev/styles/'))
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./www/css/'))
		.on('end', done);
});

// scripts - clean dist dir then annotate, minify, concat
gulp.task('scripts', ['clean', 'lint', 'templateCache'], function() {
	gulp.src(paths.scripts)
		.pipe(ngAnnotate({
			remove: true,
			add: true,
			single_quotes: true
		}))
		.pipe(uglify())
		.pipe(concat(files.jsbundle))
		.pipe(gulp.dest(paths.dist + 'js'));
});

// concat all html templates and load into templateCache
gulp.task('templateCache', ['clean'], function() {
	return gulp.src(paths.templates)
		.pipe(templateCache({
			'filename': 'templates.js',
			'root': 'app/',
			'module': 'app'
		}))
		.pipe(gulp.dest('./www/js'));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
	// Copy the whole lib folder
	gulp.src(paths.lib)
		.pipe(gulp.dest(paths.dist + 'lib/.')); 
});

gulp.task('lint', function() {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.scripts, ['lint']);
});

gulp.task('install', ['git-check'], function() {
	return bower.commands.install()
		.on('log', function(data) {
			gutil.log('bower', gutil.colors.cyan(data.id), data.message);
		});
});

gulp.task('git-check', function(done) {
	if (!sh.which('git')) {
		console.log(
			'  ' + gutil.colors.red('Git is not installed.'),
			'\n  Git, the version control system, is required to download Ionic.',
			'\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
			'\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
		);
		process.exit(1);
	}
	done();
});
