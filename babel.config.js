module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg'],
      },
    ],
    // react-native-worklets/plugin must stay last.
    'react-native-worklets/plugin',
  ],
};
