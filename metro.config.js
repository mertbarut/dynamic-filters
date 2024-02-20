/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
//const blacklist = require('metro').createBlacklist;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const blacklist = require('metro-config/src/defaults/exclusionList');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.blacklistRE = blacklist([/#current-cloud-backend\/.*/]);

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

module.exports = defaultConfig;

// module.exports = {
//   resolver: {
//     blacklistRE: blacklist([/#current-cloud-backend\/.*/]),
//   },
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };

/* module.exports = {
  server: {
    rewriteRequestUrl: url => {
      if (!url.endsWith('.bundle')) {
        return url;
      }
      // https://github.com/facebook/react-native/issues/36794
      // JavaScriptCore strips query strings, so try to re-add them with a best guess.
      return url + '?platform=ios&dev=true&minify=false&modulesOnly=false&runModule=true';
    }, // ...
  }, // ...
};
*/