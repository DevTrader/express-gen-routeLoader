// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


// routes/index.js
var fs = require('fs'),
    validFileTypes = ['js'];

var requireFiles = function (directory, app) {
  fs.readdirSync(directory).forEach(function (fileName) {
    // Recurse if directory
    if(fs.lstatSync(directory + '/' + fileName).isDirectory()) {
      requireFiles(directory + '/' + fileName, app);
    } else {

      // Skip this file
      if(fileName === 'index.js' && directory === __dirname) return;

      // Skip unknown filetypes
      if(validFileTypes.indexOf(fileName.split('.').pop()) === -1) return;

      // Require the file.
      require(directory + '/' + fileName)(app);
    }
  })
}

module.exports = function (app) {
  requireFiles(__dirname, app);
}