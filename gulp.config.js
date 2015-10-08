module.exports = function() {
	var src = './src/';
	var app = src + 'app/';
	var temp = './src/.tmp/';
	var dest = './src/';
	var build = './www/';
	var bower = {
		json: require('./bower.json'),
		directory: './src/lib/',
		ignorePath: '../..',
		exclude: [
			'src/lib/angular/angular.js',
			'src/lib/angular-animate/*.js',
			'src/lib/angular-sanitize/*.js',
			'src/lib/angular-ui-router/release/*.js'
		]
	};
	var wiredep = require('wiredep');
	var bowerFiles = wiredep({devDependencies: true})['js'];
	var config = {
		/**
		 * File paths
		 */
		// all javascript that we want to vet
		alljs: [
			'./src/app/**/*.js',
			'./*.js'
		],
		bower: bower,
		build: build,
		css: temp + 'ionic.app.css',
		dest: dest,
		fonts: bower.directory + 'ionic/fonts/**/*.*',
		htmltemplates: app + '**/*.html',
		images: src + 'images/**/*.*',
		index: src + 'index.html',
		// app js, with no specs
		js: [
			src + '**/*.module.js',
			src + '**/*.js',
			'!' + src + '**/*.spec.js',
			'!' + bower.directory + '**/*.js'
		],
		jsOrder: [
			'**/app.module.js',
			'**/*.module.js',
			'**/*.js'
		],
		/**
		 * optimized files
		 */
		optimized: {
			app: 'app.js',
			lib: 'lib.js'
		},
		sass: src + 'styles/ionic.app.scss',
		src: src,
		temp: temp,
		/**
		 * template cache
		 */
		templateCache: {
			file: 'templates.js',
			options: {
				module: 'app.core',
				root: 'app/',
				standalone: false
			}
		},
		specHelpers: [src + 'test-helpers/*.js']
	};


	/**
	 * wiredep and bower settings
	 */
	config.getWiredepDefaultOptions = function() {
		var options = {
			bowerJson: config.bower.json,
			directory: config.bower.directory,
			ignorePath: config.bower.ignorePath,
			exclude: config.bower.exclude
		};
		return options;
	};

	/**
	 * karma settings
	 */
	config.karma = getKarmaOptions();

	return config;

	////////////////

	function getKarmaOptions() {
		var options = {
			files: [].concat(
				bowerFiles,
				config.specHelpers,
				app + '**/*.module.js',
				app + '**/*.js',
				temp + config.templateCache.file
			),
			exclude: [],
			preprocessors: {}
		};

		return options;
	}
};
