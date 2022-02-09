const webpack = require("webpack");
const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
          APP_TITLE: JSON.stringify(process.env.APP_TITLE),
        }),
      ]
  };

  
module.exports = config;
