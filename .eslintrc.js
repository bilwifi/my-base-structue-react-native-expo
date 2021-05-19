module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _images : './src/assets/images',
          _components: './src/components',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _navigations: './src/navigations',
          _scenes: './src/scenes',
          _services: './src/services',
          _redux: './src/redux',
          _styles: './src/styles',
          _utils: './src/utils',
          _constants: './src/constants',
          _helpers: "./src/helpers",
          _constants: "./src/utils/constants",

        },
      },
    },
  },
};