var express = require('express');
var router = express.Router();
var app = express();

module.exports = function (app) {
  app.get('/test', function (req, res) {
    // Controller logic
    console.log('[ACCESSED]')
    res.render('index', { title: 'This works' });
  });
}