const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  pageExtensions: ['jsx', 'js', 'mdx'],
  distDir: '../../dist/functions/next',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {

    if (!isServer && !dev) {
      config.plugins.push(
        new WebpackPwaManifest({
          filename: 'static/manifest.json',
          name: 'Firebase Next',
          short_name: 'FNext',
          description: 'Firebase Next Hosting',
          background_color: '#ffffff',
          theme_color: '#000000',
          display: 'standalone',
          orientation: 'portrait',
          fingerprints: false,
          inject: false,
          start_url: '/',
          ios: {
            'apple-mobile-web-app-title': 'FNext',
            'apple-mobile-web-app-status-bar-style': '#000000',
          },
          icons: [
            {
              src: path.resolve('./src/public/android-chrome-192x192.png'),
              sizes: [192],
              destination: '/static'
            },
            {
              src: path.resolve('./src/public/android-chrome-512x512.png'),
              sizes: [512],
              destination: '/static'
            }
          ],
          includeDirectory: true,
          publicPath: '..',
        })
      );
    }

    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
}
