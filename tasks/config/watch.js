/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {
    assets: {

      // Assets to watch:
      files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**', '__html/**/*', '__layouts/**/*', '__partials/**/*', '__helpers/**/*'],

      // When assets are changed:
      /*
        NOTE: Stuff that is for dynamic website disabled for faster watch tasks.
      */
      tasks: ['syncAssets' /*, 'linkAssets'*/ ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
