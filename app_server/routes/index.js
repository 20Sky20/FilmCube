const express = require('express');
const router = express.Router();

const ctrlPictures = require('../controllers/pictures');
const ctrlOthers = require('../controllers/others');

router.get('/', ctrlOthers.home);
router.get('/information', ctrlOthers.info);
router.get('/review', ctrlOthers.addReview);
router.get('/contact', ctrlOthers.contact);

router.get('/index', ctrlOthers.index)//, ctrlPictures.index);

module.exports = router;