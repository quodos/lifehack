const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const NODE_ENV = process.env.NODE_ENV;

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
};

const buildingForLocal = () => {
  return NODE_ENV === 'development';
};

// Const setPublicPath = () => {
//   const env = NODE_ENV;
//   if (env === 'production') {
//     return 'https://your-directory/production/';
//   }
//   if (env === 'staging') {
//     return 'https://your-directory/staging/';
//   }
//   return '/';
// };

const extractHTML = new HtmlWebpackPlugin({
  title: 'History Search',
  filename: 'index.html',
  inject: true,
  template: setPath('/src/html/index.ejs'),
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true,
  },
  environment: process.env.NODE_ENV,
  isLocalBuild: buildingForLocal(),
  imgPath: buildingForLocal() === false ? 'assets' : 'src/assets',
});

const config = {
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'bundle',
          chunks: 'all',
        },
      },
    },
  },
  resolveLoader: {
    modules: [setPath('node_modules')],
  },
  mode: buildingForLocal() ? 'development' : 'production',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
  },
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
  },
  plugins: [
    extractHTML,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/styles.[hash].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: NODE_ENV === 'development' || NODE_ENV === 'staging',
        NODE_ENV: '"' + NODE_ENV + '"',
      },
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015'] },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use:
          buildingForLocal() === false
            ? [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            : [
                {
                  loader: 'style-loader', // Creates style nodes from JS strings
                },
                {
                  loader: 'css-loader', // Translates CSS into CommonJS
                },
                {
                  loader: 'sass-loader', // Compiles Sass to CSS
                },
              ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
          useRelativePath: buildingForLocal(),
        },
      },
    ],
  },
};

module.exports = config;
