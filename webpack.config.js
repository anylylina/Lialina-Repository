// const path = require("path");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// module.exports = {
//     mode: "production",
//     entry: "./src/js/index.js",
//     output: {
//       filename: "bundle.js",
//       path: path.resolve(__dirname, "dist"),
//       clean: true,
//     },
//     plugins: [
//       new MiniCssExtractPlugin({
//           filename: 'style.css',
//       }),
//     ],
//     module: {
//       rules: [
//           {
//               test: /\.s[ac]ss$/i,
//               use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//           },
//       ],
//     },
//     optimization: {
//       minimize: true,
//       minimizer: [`...`, new CssMinimizerPlugin()],
//     },
//   };
