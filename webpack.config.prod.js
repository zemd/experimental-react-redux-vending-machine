"use strict";

// Default webpack config for development environment only

const webpack = require("webpack");
const {resolve} = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


// ENTRIES
const entries = [
  resolve(__dirname, "./src/main.js")
];

// PLUGINS
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new ExtractTextPlugin("app.css"),
  new webpack.NamedModulesPlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    output: {
      comments: false
    },
  })
];

// LOADERS
const htmlLoader = {
  test: /\.html$/,
  exclude: /node_modules/,
  loader: "file-loader",
  query: {
    name: "[name].[ext]"
  }
};

const jsLoader = {
  test: /\.js$/,
  use: [
    "babel-loader",
  ],
  exclude: /node_modules/
};

// @see https://webpack.js.org/plugins/extract-text-webpack-plugin/#usage-example-with-css
const cssLoader = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    loader: ["css-loader", "postcss-loader"],
    fallbackLoader: "style-loader",
  })
};


module.exports = {
  entry: entries,
  context: resolve(__dirname, "src"),

  output: {
    filename: "app.js",
    path: resolve(__dirname, "./docs"),
    publicPath: "/"
  },

  module: {
    rules: [
      htmlLoader,
      jsLoader,
      cssLoader
    ],
  },

  resolve: {
    extensions: [".js"],
    modules: [
      resolve(__dirname, "node_modules"),
      resolve(__dirname, "src")
    ]
  },

  devtool: "source-map", // @see https://webpack.js.org/configuration/devtool/#for-development

  plugins: plugins
};
