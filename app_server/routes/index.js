const express = require('express');
const router = express.Router();

const ctrlPictures = require('../controllers/pictures');
const ctrlOthers = require('../controllers/others');

router.get('/', ctrlOthers.home);
router.get('/information', ctrlOthers.info);
router.get('/review', ctrlOthers.addReview);
router.get('/contact', ctrlOthers.contact);

router.get('/index', ctrlOthers.index)//, ctrlPictures.index);

/* Get 'home' page*/
module.exports.index = function(req, res){ // create an index export method
  res.render('index', { title: 'Express' }); // coontroller code for homepage
 };
module.exports = router;