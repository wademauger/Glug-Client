const webpack = require('webpack');
const config = require('./webpack.config.dev');
const WebpackDevServer = require('webpack-dev-server');

const server = new WebpackDevServer(webpack(config), {
  contentBase: './app',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true
})

server.listen(process.env.PORT || 3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:' + (process.env.PORT || 3000));
});
