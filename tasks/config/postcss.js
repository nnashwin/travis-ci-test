/**
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */
module.exports = function(grunt) {
  var autoprefixer = require('autoprefixer')({
    browsers: [
      'Chrome >= 35',
      'Firefox >= 31',
      'Edge >= 12',
      'iOS >= 8',
      'Safari >= 8',
      'Android 2.3',
      'Android >= 4',
      'Opera >= 12'
    ]
  }),
    mq4HoverShim = require('mq4-hover-shim'),
    modRewrite = require('connect-modrewrite');

  grunt.config.set('postcss', {
    dev: {
      options: {
        map: false,
        processors: [
          mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.bs-true-hover ' }),
          autoprefixer
        ]
      },
      src: '.tmp/public/styles/*.css'
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
};
