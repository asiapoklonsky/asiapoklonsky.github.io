const routes = require('next-routes')

module.exports = routes()
  .add('Anypage', '/:slug', 'Page')
