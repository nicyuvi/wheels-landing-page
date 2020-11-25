var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    signup: './src/signup.js',
    styles: './src/styles.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/home.html',
      scriptLoading: 'defer',
      chunks: ['main', 'styles'],
    }),
    new HtmlWebpackPlugin({
      filename: 'rider-signup.html',
      template: './public/rider-signup.html',
      scriptLoading: 'defer',
      chunks: ['signup', 'styles'],
    }),
    new HtmlWebpackPlugin({
      filename: 'driver-signup.html',
      template: './public/driver-signup.html',
      scriptLoading: 'defer',
      chunks: ['signup', 'styles'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
