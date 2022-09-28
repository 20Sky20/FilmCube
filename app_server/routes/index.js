var express = require('express');
var router = express.Router();

/* GET home page. */

var ctrlPictures = require('../controllers/pictures');
const ctrlOthers = require('../controllers/others');

router.get('/', ctrlOthers.home);
router.get('/', ctrlOthers.info);
router.get('/', ctrlOthers.addReview);
module.exports = router;
