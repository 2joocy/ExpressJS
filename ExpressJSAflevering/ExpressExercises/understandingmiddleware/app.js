var express = require("express");
var app = express();

var calculator = {};

function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .use(nib())
  }
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.use(express.logger('dev'))
  app.use(stylus.middleware(
    { src: __dirname + '/public'
    , compile: compile
    }
  ))
  app.use(express.static(__dirname + '/public'))

app.listen(3000,function(){
  console.log("Server started, listening on: "+ 3000);
})
