var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: './index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js' ,
},
   module : {
    loaders : [
      {
        test : /\.jsx?/,
        
        loader : 'babel-loader',
        
        
      }
    ]
  }
}

module.exports = config