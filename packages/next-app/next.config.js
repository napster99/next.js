/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    // config.watchOptions => { aggregateTimeout: 5, ignored: [ '**/.git/**', '**/.next/**' ] }
    // if (config.watchOptions) {
    //   config.watchOptions = { ...config.watchOptions }
    // }
    console.log(config.watchOptions, config.watch)

    return config
  },
}

module.exports = nextConfig
