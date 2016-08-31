/**
 * `metalsmith`
 *
 * ---------------------------------------------------------------
 *
 * Build static files.
 *
 */
module.exports = function (grunt) {
  grunt.config.set('metalsmith', {
    dev: {
      options: {
        clean: false,
        metadata: {
          title: 'Snapask',
          description: 'It\'s about Snapask.',
          url: 'https://snapask.co/',
        },
        plugins: {
          // Be careful, the order of the plugins is important!
          'metalsmith-multi-language': {
            default: 'en-hk',
            locales: ['en-hk', 'ch-hk', 'tw']
          },
          'metalsmith-collections': {
            /*
              TODO: Use collections for stuff like blog
            */
          },
          'metalsmith-discover-helpers': {
            directory: '__helpers',
            pattern: /\.js$/
          },
          'metalsmith-in-place': {
            engine: 'handlebars',
            partials: '__partials/components'
          },
          'metalsmith-markdown-precompiler': {
            // This allows for including partials in .md templates.
            engine: 'handlebars',
            pattern: /\.md$/,
            partialsPath: '../__partials/components',
            /*
              NOTE: Need to register new partials to this array.
            */
            partials: [
              'jumbotron',
              'collage',
              'newsletter'
            ]
          },
          'metalsmith-markdown': {},
          'metalsmith-permalinks': {
          // Don't use Chinese in the title. It fucks up the permalink pattern?
            relative: 'false',
            pattern: ':locale/:title/'
          },
          'metalsmith-layouts': {
            engine: 'handlebars',
            directory: '__layouts',
            partials: '__partials'
          },
        },
      },
      src: '__html',
      dest: '.tmp/public',
    },
  });
  grunt.loadNpmTasks('grunt-metalsmith');
};
