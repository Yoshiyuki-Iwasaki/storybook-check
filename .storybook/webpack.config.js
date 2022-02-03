const path = require(`path`);

module.exports = ({ config }) => {
  config.resolve.extensions.push(".svg");
  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test(String(data.test)))
      data.test =
        /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
    return data;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module.rules.unshift({
    test: /\.js$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["react-app"],
        },
      },
    ],
    include: [
      path.join(path.dirname(__dirname), "node_modules/gatsby/cache-dir"),
    ],
  });

  return config;
};
