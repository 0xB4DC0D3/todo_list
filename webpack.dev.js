const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/**@type {import('webpack').Configuration}*/
const config = {
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    liveReload: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  mode: "development"
};

module.exports = merge(common, config);