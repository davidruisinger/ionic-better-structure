This is an alternative project structure for the [Ionic Framework](http://ionicframework.com/) demonstrated with the ionic tabs starter.

## How to use this project

To use this starter create a new project folder (e.g. 'myApp') for your app and clone this repository into it.
```bash
$ cd mkdir myApp
$ git clone https://github.com/flavordaaave/ionic_better_structure.git
```

Then run npm and bower to get all needed dependencies:

```bash
$ npm install
$ bower install
```

## How this project is structured

All working files are underneath the 'src' folder trying to follow the [angular styleguide](https://github.com/johnpapa/angular-styleguide) created by [johnpapa](https://github.com/johnpapa).

	/src
		/app
		/images
		/lib
		/styles
		index.html


Everything is set up to serve from this src folder using
```bash
$ ionic serve
```

## Building process

This project comes with a before_build hook to run the 'gulp build' task before actually building the app with cordova. The 'gulp build' task concatenates, minifies and copies the files into the 'www' folder from where cordova is loading the files. So you can just use the standard ionic build commands:

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

## Included gulp tasks

A bunch of useful gulp tasks have been copied from the [HotTowel yeoman generator](https://github.com/johnpapa/generator-hottowel) created by [johnpapa](https://github.com/johnpapa) and modified to work with ionic.

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

### Testing

- `gulp test`

	Runs all unit tests using karma runner & jasmine with phantomjs. Depends on vet task, for code analysis.

### Cleaning Up

- `gulp clean`

    Remove all files from the build and temp folders

- `gulp clean-images`

    Remove all images from the build folder

- `gulp clean-code`

    Remove all javascript and html from the build folder

- `gulp clean-fonts`

    Remove all fonts from the build folder

- `gulp clean-styles`

    Remove all styles from the temp and build folders

### Fonts and Images

- `gulp fonts`

    Copy the ionic fonts from source to the build folder

- `gulp images`

    Copy all images from source to the build folder

### Styles

- `gulp styles`

    Compile less files to CSS and copy to the build folder

### Lib Files

- `gulp wiredep`

    Looks up all bower components' main files and JavaScript source code, then adds them to the `index.html`.

    The `.bowerrc` file also runs this as a postinstall task whenever `bower install` is run.

### Angular HTML Templates

- `gulp templatecache`

    Create an Angular module that adds all HTML templates to Angular's $templateCache. This pre-fetches all HTML templates saving XHR calls for the HTML.

- `gulp templatecache --verbose`

    Displays all files affected by the task.

### Serving Development Code

- `ionic serve`

    You can us the standard ionic serve task here. 


### Building Production Code

- `gulp optimize`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies the ionic fonts, copies images and runs `gulp optimize` to build the production code to the build folder.