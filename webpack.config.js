/* eslint no-console:off */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';

const toFilename = (name, ext = 'js') => {
  if (DEV_MODE) {
    return `${name}.${ext}`;
  }
  return `${name}-[chunkhash].${ext}`;
};

const config = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    index: ['./js/index.js'],
    sale: ['./js/sale.js'],
    // special: ['./js/special.js'],
    // gift: ['./js/gift.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    filename: toFilename('asset/js/[name]'),
    path: path.resolve('dist'),
  },
  resolve: {
    modules: [
      path.resolve('src/html'),
      path.resolve('src/css'),
      path.resolve('src/js'),
      path.resolve('node_modules'),
    ],
    alias: {
      '~': path.resolve('./src'),
      '@': path.resolve('./src/js'),
      img: path.resolve('./src/asset/img'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve('src/js'),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          DEV_MODE ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
        include: path.resolve('src/css'),
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: '[path][name].[ext]?[hash:8]',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              root: 'src/asset',
            },
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: DEV_MODE,
              data: {
                DEV_MODE,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './html/index.pug',
      filename: 'cube.html',
      chunks: ['index', 'vendor', 'common'],
    }),
    new HtmlWebpackPlugin({
      template: './html/sale.pug',
      filename: 'cylinder.html',
      chunks: ['sale', 'vendor', 'common'],
    }),
    // new HtmlWebpackPlugin({
    //   template: './html/special.pug',
    //   filename: 'special.html',
    //   chunks: ['special', 'vendor', 'common'],
    // }),
    // new HtmlWebpackPlugin({
    //   template: './html/gift.pug',
    //   filename: 'gift.html',
    //   chunks: ['gift', 'vendor', 'common'],
    // }),
    new CopyWebpackPlugin([
      { from: 'asset/copy', to: './' },
    ]),
    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
    }),
    ...DEV_MODE ? [
      new FriendlyErrorsPlugin(),
    ] : [
      new CleanWebpackPlugin('./dist'),
    ],
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 100,
      // minSize: 1,
      minChunks: 1,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendors: {
          name: 'vendor',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: !DEV_MODE ? 'warning' : false,
  },
};

config.devServer = {
  historyApiFallback: true,
  noInfo: true,
  hot: true,
  inline: true,
  port: 3000,
  // https: true,
  // open: true,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
  },
  host: 'localhost',
  disableHostCheck: true,
};


if (!DEV_MODE) {
  config.plugins.push(new MiniCssExtractPlugin({
    filename: 'css/[name]-[contenthash].css',
    chunkFilename: 'css/[id]-[contenthash].css',
  }));
}


module.exports = config;
