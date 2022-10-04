const index = function(req, res){
    res.render('index', { title: 'Express' });
};
   

const home = function(req, res){
    res.render('index', {title: 'Home' });
};

const info = function(req, res){
    res.render('index', {title: 'Info' });
};

const addReview = function(req, res){
    res.render('index', {title: 'Add Review' });
};

const contact = function(req, res){
    res.render('index', {title: 'Contact' });
};

module.exports = {
    index,
    home,
    info,
    addReview,
    contact
};