# WordPress Theme Boilerplate

This repository contains a simple setup, which is fast to install and start with. Tools used:

* [Gulp](https://gulpjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [Sass](https://sass-lang.com/)
* [Composer](https://getcomposer.org/)

## Quick Start

To start quickly all you need is `npm`. Recommended way to install `npm` is using Node Version Manager - [Link](https://github.com/nvm-sh/nvm).

Run `npm install .` to install all development dependencies. After installing the dependencies you are ready to go and develop your theme using TypeScript and SCSS. For more automation, there is also [Gulp](https://gulpjs.com/) installed.

## File Structure

The boilerplate has pretty simple file structure:

* `/assets/` - a folder containing the css files, images and javascript files for the theme. There are also the folders `ts/` and `scss/` inside which are used for development with SCSS and TypeScript.

* `/.gitignore` - contains files which should be ignored in your git repository. Feel free to adjust this according to your project.

* `/composer.json` - a file containing the repository description for PHP Composer. Really useful if you have your development with [Bedrock](https://roots.io/bedrock/)

* `/gulpfile.js` - contains various tasks used by Gulp for automated pre-processing and development. For more info read [how to use gulp](#how-to-use-gulp)

* `/index.php` - simple php file needed for the theme to be installed and started in WordPress. For more info read [installing the theme](#installing-the-theme)

* `/package.json` - dependencies for the Node Package Manager. Gulp (+ some gulp plugins) and TypeScript are defined as dependencies there.

* `/style.css` - main theme stylesheet, read by WordPress for theme validation and description. For more general info, you can read [this guide](https://codex.wordpress.org/Theme_Development) by WordPress.

* `/tsconfig.json` - configuration file for TypeScript, which is also used by Gulp when pre-processing typescript code.

## How to use gulp

There are three gulp tasks currently defined:

* `gulp css` - pre-processes all sass files.
* `gulp js` - pre-processes all typescript files.
* `gulp watch` - runs `gulp css` and `gulp js` parallel whenever a file in the repository is changed.

### Installing the theme

This theme is ready to be installed. Feel free to copy the theme inside your `wp-contents/themes` folder or just zip it and upload it via the dashboard.

#### License

This theme, as any other WordPress theme or plugin is licensed under the GPL.