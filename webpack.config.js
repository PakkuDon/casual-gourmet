module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: __dirname + '/src'
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname + '/src'
      }
    ]
  }
};
