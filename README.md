This is an alternative project structure for the [Ionic Framework](http://ionicframework.com/).

## How to use this project

To use this, create a new project folder (e.g. 'myApp') for your app and clone this repository into it. Then run npm install to get all needed dependencies:

```bash
$ npm install
```

## How this project is structured

All files are structured in the 'dev' folder trying to follow the [angular styleguide](https://github.com/johnpapa/angular-styleguide) created by [johnpapa](https://github.com/johnpapa).

Everything is set up to serve from this dev folder using
```bash
$ ionic serve
```

## Building process

This project comes with a before_build hook to run the 'gulp build' task which automatically concatenates, minifies and copies the files into the 'www' folder. 

```bash
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac.