module.exports.index = function(req, res){
    res.render('index', {title: 'FilmCube'});
};

const home = (req, res) =>{
    res.render('index', {title: 'Home'});
};

const info = (req, res) =>{
    res.render('index', {title: 'Info'});
};

const addReview = (req, res) =>{
    res.render('index', {title: 'Add review'});
};

module.exports = {
    home,
    info,
    addReview
};