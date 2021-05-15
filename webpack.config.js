const path = require('path');

const srcPath = path.resolve(__dirname, 'client', 'src');
const distPath = path.resolve(__dirname, 'client', 'dist');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(srcPath, 'index.jsx'),
  output: {
    path: distPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
