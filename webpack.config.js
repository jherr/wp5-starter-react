const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "starter",
      library: { type: "var", name: "starter" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: [],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
