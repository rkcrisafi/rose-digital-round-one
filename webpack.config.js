module.exports = {
  entry: './src/entry.jsx',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }}
      ]
    },
  devtool: 'source-map'
};
