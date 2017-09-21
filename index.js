const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');

Metalsmith(__dirname)
  .metadata({
    title: "Example"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
  }))
  .build(function(err) {
    if (err) throw err;
  });
