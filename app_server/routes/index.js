var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var ctrlPictures = require('../controllers/pictures');
var ctrlOthers = require('../controllers/others');

router.get('/', ctrlOthers.index, ctrlPictures.index);
module.exports = router;
