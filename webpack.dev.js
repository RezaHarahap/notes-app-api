const { merge } = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, { mode: 'development', devtool: 'eval-source-map', devServer: { static: './dist', port: 8080, hot: true, open: true } });
