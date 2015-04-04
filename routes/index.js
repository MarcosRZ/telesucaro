var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('professional');
});

router.get('/academic', function(req, res, next) {
  res.render('academic');
});

router.get('/hobbies', function(req, res, next) {
  res.render('hobbies');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
