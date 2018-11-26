// next.config.js
const withImages = require('next-images')
const client = require('./client')
const dev = process.env.NODE_ENV !== 'production'

module.exports = (phase, {defaultConfig}) => {
  let assetPrefix = '';
  if(!dev) {
    assetPrefix = '/foo';
  }

  return withImages({
    assetPrefix,
    exportPathMap: async function (defaultPathMap) {
      const paths = await client
      .fetch('*[_type == "page" && defined(slug)].slug.current')
      .then(data => {
            console.log(data)
            return data.reduce(
              (acc, slug) => ({
                '/': { page: '/' },
                ...acc,
                [`/${slug}`]: { page: '/Page', query: { slug } }
              }),
              defaultPathMap
            )
           }
           )
           .catch(console.error)
           console.log(paths)
           return paths
    }
  })
}
