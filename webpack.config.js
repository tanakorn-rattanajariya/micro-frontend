const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "emit-file-loader",
            options: {
              name: "dist/[path][name].[ext].js",
            },
          },
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              extends: path.resolve(__dirname, "./.babelrc"),
            },
          },
          {
            loader: "styled-jsx-css-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
