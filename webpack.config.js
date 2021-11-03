const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATHS = {
  entryPoint: path.relative(__dirname, "src/index.ts"),
  bundles: path.resolve(__dirname, "bundles"),
};

const config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "toastsrap.css",
    }),
  ],
  context: __dirname,
  entry: "./src/browser.ts",

  output: {
    filename: "toastsrap.js",
    library: "Toastsrap",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.wav$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "/assets/[name].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },

  devtool: "source-map",
};

module.exports = config;
