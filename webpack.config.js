const path = require('path');

const SRC_DIR = path.join(__dirname, '/modules');

const PUBLIC_DIR = path.join(__dirname, '/public');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env',
            '@babel/react', { plugins: ['@babel/plugin-proposal-class-properties'] }],
        },
      },
      {
        test: [/\.css$/],
        use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[local]___[hash:base64:5]' } }],
      },
    ],
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    },
  },


};
