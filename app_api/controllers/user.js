const mongoose = require('mongoose');
const Use = mongoose.model('user');

const user = (req, res) => {
    res
    .status(200)
    .json(content);
};

const account = (req, res) => {
    res
    .status(200)
    .json(content);
};

const deleteAccount = (req, res) => {
    res
    .status(200)
    .json(content);
};

const upload = (req, res) => {
    res
    .status(200)
    .json(content);
};

const files = (req, res) => {
    res
    .status(200)
    .json(content);
};

const filename = (req, res) => {
    res
    .status(200)
    .json(content);
};

module.exports = {
    user,
    account,
    deleteAccount,
    upload,
    files,
    filename
}