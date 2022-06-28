const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
    mode: 'development',
devServer: {
    historyApiFallback: true,   
    static: {
        directory: path.resolve(__dirname, './dist'),
      },
    open: true,
    compress: true,
    port: 8082,
  }
}