/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // except for webpack, other parts are left as generated
    webpack: (config, context) => {
      config.watchOptions = {
        //poll: 1000, only if wtaching doesn't work...
        aggregateTimeout: 600
      }
      return config
    }
  }
  
  module.exports = nextConfig