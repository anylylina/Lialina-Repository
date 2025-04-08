const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const imageminMozjpeg = require("imagemin-mozjpeg").default;
const imageminPngquant = require("imagemin-pngquant").default;

module.exports = {
  entry: "./Homework_22/src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./Homework_22/src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g|gif)$/i,
      generator: [
        {
          implementation: imageminMozjpeg({
            quality: 70,
          }),
          preset: "webp",
        },
        {
          implementation: imageminPngquant({
            quality: [0.65, 0.9],
          }),
          preset: "webp",
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devServer: {
    static: "./dist",
    hot: true,
    open: true,
  },
};
