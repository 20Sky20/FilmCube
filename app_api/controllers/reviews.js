const mongoose = require('mongoose');
const Loc = mongoose.model('comments');

const addReview = (req, res) => {
    res
    .status(200)
    .json(content);
};

const reviewsCreate = (req, res) => {
    res
    .status(200)
    .json(content);
};

const reviewsReadOne = (req, res) => {
    res
    .status(200)
    .json(content);
};

const reviewsUpdateOne = (req, res) => {
    res
    .status(200)
    .json(content);
};

const reviewsDeleteOne = (req, res) => {
    res
    .status(200)
    .json(content);
};

module.exports = {
    addReview,
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
}