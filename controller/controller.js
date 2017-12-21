var express = require('express');
var router = express.Router();
var path = require('path');
// var apiKey = require('./config.js').api



router.get('*', function(req,res) {
  // console.log('key:', apiKey);
  console.log('controller.js.7');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('controller.js.9');
});



module.exports = router;
