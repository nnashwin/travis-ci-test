/**
 * `less`
 *
 * ---------------------------------------------------------------
 *
 * Compile your LESS files into a CSS stylesheet.
 *
 * By default, only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-less
 *
 */
module.exports = function(grunt) {

  grunt.config.set('compass', {
    dev: {
      options: {
        sassDir: 'assets/styles/',
        // Specify ignores filenames starting with underscores
        specify: 'assets/styles/*.scss',
        cssDir: '.tmp/public/styles/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
