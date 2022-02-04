const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "/src"),
    },
  },
};
