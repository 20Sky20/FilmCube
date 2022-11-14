
const login = function(req, res){
    res.render('', {title: 'Login' });
};

const home = function(req, res){
    res.render('home', {title: 'Home' });
};

const info = function(req, res){
    res.render('index', {title: 'Info' });
};

const addReview = function(req, res){
    res.render('review', {title: 'Add Review' });
};

const contact = function(req, res){
    res.render('contact', {title: 'Contact Page' });
};

const profile = function(req, res){
    res.render('profile', {title: 'Profile' });
};

module.exports = {
    login,
    home,
    info,
    addReview,
    contact,
    profile
};