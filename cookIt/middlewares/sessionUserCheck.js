function sessionUserCheck(req, res, next) {
    if (req.session.user) {
        session = req.session.user
        next()
    } else {
        session = undefined;
        res.redirect('/users/login')
    }
}

module.exports = sessionUserCheck;