/* eslint-disable */

// Plugins
const CircularDependencyPlugin = require("circular-dependency-plugin");
const {
  useBabelRc,
  useEslintRc,
  enableEslintTypescript,
} = require("customize-cra");
// Utils
const { loaderUtil } = require("./utils");

// Paths
const paths = require("./paths");

// Loaders
const { stylesLoaders } = require("./loaders/styles");
const svgLoader = require("./loaders/svg");

module.exports = function(config, isProd) {
  const { fileLoader, oneOf } = loaderUtil(config.module.rules);

  // Use the local .babelrc file
  useBabelRc();

  // Use custom .eslintrc file
  useEslintRc();

  // Enables Eslint Typescript
  enableEslintTypescript();

  // Resolve
  config.resolve = {
    ...config.resolve,
    modules: [...config.resolve.modules, "./src"],
    extensions: [...config.resolve.extensions, ".ts", ".tsx", ".js"],
    alias: {
      assets: `${paths.appSrc}/assets`,
      constants: `${paths.appSrc}/constants`,
      state: `${paths.appSrc}/state`,
      utils: `${paths.appSrc}/utils`,
      typings: `${paths.appSrc}/typings`,
      views: `${paths.appSrc}/views`,
    },
  };

  // Exclude the new file from the file loader, so we can add custom loader for them.
  fileLoader.exclude.push(/\.(sa|sc|c)ss$/);

  // // Extend with the extra loaders
  const loaders = [svgLoader, ...stylesLoaders(isProd)];
  if (oneOf) {
    oneOf.unshift(...loaders);
  } else {
    config.module.rules.push(...loaders);
  }

  // Plugins
  config.plugins = [
    ...config.plugins,
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
      // set the current working directory for displaying module paths
      cwd: process.cwd(),
    }),
  ];

  return config;
};
