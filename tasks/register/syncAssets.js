/**
 * `syncAssets`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `watch` task (`tasks/config/watch.js`).
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/sync-assets-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('syncAssets', [
    /*
      NOTE: Stuff that is for dynamic website disabled for faster watch tasks.
    */
    // 'jst:dev',
    'metalsmith:dev',
    // 'less:dev',
    'compass:dev',
    'postcss:dev',
    'sync:dev',
    // 'coffee:dev'
  ]);
};
