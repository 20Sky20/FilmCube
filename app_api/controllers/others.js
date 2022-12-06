const mongoose = require('mongoose');
const Otr = mongoose.model('others');
const Use = mongoose.model('user');
const Com = mongoose.model('comments');

const login = (req, res) => {
    res
        .status(200)
        .json(content);
};

const home = (req, res) => {
    res
    .status(200)
    .json(content);
};

const contact = (req, res) => {
    res
    .status(200)
    .json(content);
};

const profile = (req, res) => {
    res
    .status(200)
    .json(content);
};

const accountCreate = (req, res) => {
    res
    .status(200)
    .json(content);
}

module.exports = {
    profile,
    contact,
    home,
    login,
    accountCreate
}

// const request = require('request');
// const apiOptions = {
//     server:
// };
// if(process.env.NODE_ENV === 'production') {
//     apiOptions.server = ;
// }