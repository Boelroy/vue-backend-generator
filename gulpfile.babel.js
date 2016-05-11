'use strict';

import gulp from 'gulp';
import path from 'path';
//import webpack from 'webpack-stream';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

let config = {
  entry: {
    app:['./app/scripts/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build/scripts'),
    filename: 'main.js'
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel?presets[]=es2015']
      }
    ]
  }
};


gulp.task('dev', function() {
  config.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/');
  var compiler = webpack(config);
  var server = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: './app/',
    publicPath: '/scripts/'
  });
  server.listen(8080);
});

gulp.task('default', function() {

});
