class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      const { build } = await import('velite');
      // velite's `complete` hook strips the `with { type: 'json' }` import
      // attribute that Next 13's SWC can't parse (see velite.config.ts).
      await build({ watch: dev, clean: !dev });
    });
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Static export for GitHub Pages. Next 13.0.3 predates `output: 'export'`,
  // so the build runs `next export` (see the `build` script) to emit `out/`.
  // Pages has no image optimization server, so serve images as-is.
  images: { unoptimized: true },
  // Pretty URLs (`/blog/post/`) instead of `/blog/post.html` on static hosts.
  trailingSlash: true,
  webpack(config) {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
  // NOTE: the previous `/poke` rewrite proxied to dj-meyers.github.io/poke.
  // Rewrites/proxies don't exist on static GitHub Pages — `/poke` is now a
  // client-side redirect stub at `public/poke/index.html` instead.
}

module.exports = nextConfig
