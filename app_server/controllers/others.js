
const home = function(req, res){
    res.render('', {title: 'Home' });
};

const info = function(req, res){
    res.render('index', {title: 'Info' });
};

const addReview = function(req, res){
    res.render('review', {title: 'Add Review' });
};

const contact = function(req, res){
    res.render('contact', {title: 'Contact' });
};

module.exports = {
    home,
    info,
    addReview,
    contact
};