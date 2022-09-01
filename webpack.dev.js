const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/**@type {import('webpack').Configuration}*/
const config = {
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    liveReload: true,
    open: true,
  },
  mode: "development"
};

module.exports = merge(common, config);