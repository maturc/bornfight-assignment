const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    home: './src/home.ts',
    artist: './src/artist.ts',
  },
  output: {
    filename: './[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}