// next.config.js
const withImages = require('next-images')
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase, {defaultConfig}) => {
  let assetPrefix = '';
  if(phase !== PHASE_DEVELOPMENT_SERVER) {
    assetPrefix = '/foo';
  }

  return withImages({
    assetPrefix,
  })
}
