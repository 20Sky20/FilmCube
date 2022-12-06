const express = require('express');
const router = express.Router();
const ctrlOthers = require('../controllers/others');
const ctrlUsers = require('../controllers/user');
const ctrlReviews = require('../controllers/reviews');

router
    .route('/login')
    .get(ctrlOthers.login) //verify if required
    .post(ctrlOthers.accountCreate)
    .post(ctrlOthers.home);

router
    .route('/user')
    .get(ctrlUsers.account)
    .delete(ctrlUsers.deleteAccount);

router
    .route('/others/user/:upload')
    .post(ctrlUsers.upload)
    .get(ctrlUsers.files)
    .get(ctrlUsers.filename);


router
    .route('/others/user/reviews')
    .post(ctrlReviews.reviewsCreate);
router
    .route('/others/user/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);


module.exports = router;

