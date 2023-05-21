var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/step4', function(req, res, next) {
  res.sendFile('step4.html',{root:path.join(__dirname,'../public')});
});
router.get('/step5', function(req, res, next) {
  res.sendFile('step5.html',{root:path.join(__dirname,'../public')});
});

module.exports = router;
