const express = require('express');
const router = express.Router();

const ctrlPictures = require('../controllers/pictures');
const ctrlOthers = require('../controllers/others');

router.get('/login', ctrlOthers.login);
router.get('/home', ctrlOthers.home);
router.get('/review', ctrlOthers.addReview);
router.get('/contact', ctrlOthers.contact);
router.get('/profile', ctrlOthers.profile);

module.exports = router;