var express = require('express');
var router = express.Router();

/* GET home page. */

var ctrlPictures = require('../controllers/pictures');
var ctrlOthers = require('../controllers/others');

router.get('/', ctrlOthers.index, ctrlPictures.index);
module.exports = router;
