const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});



var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
    },
    {
      test: /\.(scss|css)$/,
      use: extractSass.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
      })
    },
        {
            test: /\.(woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: 'fonts/[hash].[ext]',
                    limit: 5000,
                    mimetype: 'application/font-woff'
                }
            }
        }, {
            test: /\.(ttf|eot|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]'
                }
            }
        }]
  },

    plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css")

  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
    publicPath: '/'
  }
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
     }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports =config;

