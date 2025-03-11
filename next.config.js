const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://hou.mintlify.app' : '',
}
 
module.exports = nextConfig
