class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      const { build } = await import('velite');
      await build({ watch: dev, clean: !dev });
    });
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/poke',
        destination: 'https://dj-meyers.github.io/poke/',
      },
      {
        source: '/poke/:path*',
        destination: 'https://dj-meyers.github.io/poke/:path*',
      },
    ];
  },
}

module.exports = nextConfig
