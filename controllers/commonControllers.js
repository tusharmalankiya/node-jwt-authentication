module.exports.home_get = (req, res) =>{
    res.render('home');
}

module.exports.protected_get = (req, res) =>{
    res.render('protected');
}